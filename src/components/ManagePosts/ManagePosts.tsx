// Modules or libs content
import { FC, useState, useEffect, useCallback, useContext } from 'react';
import { useHistory } from 'react-router';
import { firebaseAuth, firebaseDatabase } from '../../lib/firebase';
import { ToastContainer, toast } from 'react-toastify';
// Components
import { Container, CustomButton, ButtonWrapper } from './styles';
import PostsListForManage from '../PostsListForManage/PostsListForManage';
// Types
import { Posts } from './types';
// Context
import userContext from '../../context/UserContext';

const ManagePosts: FC = () => {
    const [wasDeleted, setWasDeleted] = useState<boolean>(false);
    const [posts, setPosts] = useState<Posts>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const context = useContext(userContext);
    const history = useHistory();
    const user = firebaseAuth.currentUser;

    const userNotLogged = useCallback(() => {
        history.push('/login');
    }, [history]);

    const deletePost = (postID: string) => {
        (async () => {
            try {
                if (context?.userData) {
                    await firebaseDatabase
                        .child('posts')
                        .child(context?.userData.userID)
                        .child(postID)
                        .remove();
                    toast.success('Post succesfully deleted!');
                    setWasDeleted(true);
                } else
                    throw new Error(
                        "The user either doesn't exist or is not signed in"
                    );
            } catch (err) {
                if (err instanceof Error) {
                    toast.error(err);
                } else toast.error('Failed to delete post, please try again!');
            }
        })();
    };

    useEffect(() => {
        if (!user) userNotLogged();
        else {
            (async () => {
                try {
                    if (context?.userData) {
                        const response = await firebaseDatabase
                            .child('posts')
                            .child(context.userData.userID)
                            .get();
                        if (response.val())
                            setPosts(Object.entries(response.val()));
                    } else
                        throw new Error(
                            "The user either doesn't exist or is not signed in"
                        );
                } catch (err) {
                    if (err instanceof Error) {
                        setError(err.message);
                    } else setError(JSON.stringify(err));
                } finally {
                    setIsLoaded(true);
                    setWasDeleted(false);
                }
            })();
        }
    }, [user, userNotLogged, wasDeleted, context?.userData]);

    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={3000}
                closeButton={false}
                style={{ fontSize: '16px' }}
            />
            <ButtonWrapper>
                <CustomButton onClick={() => history.goBack()}>
                    Go back
                </CustomButton>
            </ButtonWrapper>
            <Container>
                <PostsListForManage
                    isLoaded={isLoaded}
                    error={error}
                    posts={posts}
                    deletePost={deletePost}
                />
            </Container>
        </>
    );
};

export default ManagePosts;
