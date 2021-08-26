// Modules or libs content
import { FC,} from 'react';
// Images
import PlusIcon from '../../assets/plus-solid.svg';
import ManageIcon from '../../assets/hammer-solid.svg';
// Components
import { Container, UserOption, Post, Link } from './styles';
// Context
// import userContext from '../../context/UserContext';

const Home: FC = () => {
    // const context = useContext(userContext);

    return (
        <Container>
            <UserOption to="/home/create">
                <p>Create new post</p>
                <img src={PlusIcon} alt="plus icon"></img>
            </UserOption>
            <UserOption to="/home/manage">
                <p>Manage posts</p>
                <img src={ManageIcon} alt="manage icon"></img>
            </UserOption>
            <Post>
                <h2>Lorem ipsum dolor sit.</h2>
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.
                </small>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus quos nobis earum voluptas. Voluptatem ab
                    voluptatibus, laborum quam a quisquam voluptatum excepturi
                    rerum quae assumenda sit praesentium fugit ullam nisi alias
                    nostrum aut quod! Excepturi facilis voluptates
                    necessitatibus aperiam assumenda.
                </p>
                <Link to="/">
                    Nadnadnadna
                </Link>
            </Post><Post>
                <h2>Lorem ipsum dolor sit.</h2>
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.
                </small>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus quos nobis earum voluptas. Voluptatem ab
                    voluptatibus, laborum quam a quisquam voluptatum excepturi
                    rerum quae assumenda sit praesentium fugit ullam nisi alias
                    nostrum aut quod! Excepturi facilis voluptates
                    necessitatibus aperiam assumenda.
                </p>
                <Link to="/">
                    Nadnadnadna
                </Link>
            </Post><Post>
                <h2>Lorem ipsum dolor sit.</h2>
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.
                </small>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus quos nobis earum voluptas. Voluptatem ab
                    voluptatibus, laborum quam a quisquam voluptatum excepturi
                    rerum quae assumenda sit praesentium fugit ullam nisi alias
                    nostrum aut quod! Excepturi facilis voluptates
                    necessitatibus aperiam assumenda.
                </p>
                <Link to="/">
                    Nadnadnadna
                </Link>
            </Post><Post>
                <h2>Lorem ipsum dolor sit.</h2>
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.
                </small>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus quos nobis earum voluptas. Voluptatem ab
                    voluptatibus, laborum quam a quisquam voluptatum excepturi
                    rerum quae assumenda sit praesentium fugit ullam nisi alias
                    nostrum aut quod! Excepturi facilis voluptates
                    necessitatibus aperiam assumenda.
                </p>
                <Link to="/">
                    Nadnadnadna
                </Link>
            </Post><Post>
                <h2>Lorem ipsum dolor sit.</h2>
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.
                </small>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus quos nobis earum voluptas. Voluptatem ab
                    voluptatibus, laborum quam a quisquam voluptatum excepturi
                    rerum quae assumenda sit praesentium fugit ullam nisi alias
                    nostrum aut quod! Excepturi facilis voluptates
                    necessitatibus aperiam assumenda.
                </p>
                <Link to="/">
                    Nadnadnadna
                </Link>
            </Post><Post>
                <h2>Lorem ipsum dolor sit.</h2>
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.
                </small>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus quos nobis earum voluptas. Voluptatem ab
                    voluptatibus, laborum quam a quisquam voluptatum excepturi
                    rerum quae assumenda sit praesentium fugit ullam nisi alias
                    nostrum aut quod! Excepturi facilis voluptates
                    necessitatibus aperiam assumenda.
                </p>
                <Link to="/">
                    Nadnadnadna
                </Link>
            </Post><Post>
                <h2>Lorem ipsum dolor sit.</h2>
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.
                </small>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus quos nobis earum voluptas. Voluptatem ab
                    voluptatibus, laborum quam a quisquam voluptatum excepturi
                    rerum quae assumenda sit praesentium fugit ullam nisi alias
                    nostrum aut quod! Excepturi facilis voluptates
                    necessitatibus aperiam assumenda.
                </p>
                <Link to="/">
                    Nadnadnadna
                </Link>
            </Post><Post>
                <h2>Lorem ipsum dolor sit.</h2>
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.
                </small>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus quos nobis earum voluptas. Voluptatem ab
                    voluptatibus, laborum quam a quisquam voluptatum excepturi
                    rerum quae assumenda sit praesentium fugit ullam nisi alias
                    nostrum aut quod! Excepturi facilis voluptates
                    necessitatibus aperiam assumenda.
                </p>
                <Link to="/">
                    Nadnadnadna
                </Link>
            </Post>
        </Container>
    );
};

export default Home;
