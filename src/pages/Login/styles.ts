import styled from 'styled-components';

import { Link as ReactRouterLink } from 'react-router-dom';

interface StyledProps {
    bg: string;
}

export const BannerArea = styled.section<StyledProps>`
    background: ${({ theme: { backgrounds } }) => backgrounds.primary};
    position: relative;
    width: 100vw;
    height: 100vh;
    @media screen and (min-width: 600px) {
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
            ${props => `url(${props.bg})`};
        background-size: cover;
    }
    p {
        font-size: 1.4rem;
        text-align: center;
        color: ${({ theme: { colors } }) => colors.primary};
        margin-bottom: 1.5rem;
    }
    button {
        border: 0 none;
        padding: 1rem;
        margin: 1.5rem 0;
        width: 100%;
        max-width: 300px;
        border-radius: 5px;
        background: ${({ theme: { backgrounds } }) => backgrounds.primary};
        color: #fff;
        font-size: 1.4rem;
        cursor: pointer;
        border: 1px solid transparent;
        transition: filter 0.4s ease, border 0.3s ease;
        :hover {
            filter: brightness(0.8);
        }
        :active {
            border-color: ${({ theme: { colors } }) => colors.primary};
        }
    }
`;

export const ContentArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding: 20px;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1.5rem;
    background: ${({ theme: { backgrounds } }) => backgrounds.secondary};
    @media screen and (max-height: 400px) {
        flex-flow: row wrap;
        max-width: unset;
    }
    small {
        color: #fff;
        font-size: 1.2rem;
    }
`;

export const BottomContentWrapper = styled.div`
    width: 100%;
    max-width: 300px;
    text-align: center;
    @media screen and (max-height: 400px) {
        width: 45%;
        max-width: unset;
    }
`;

export const Fieldset = styled.fieldset`
    width: 100%;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    @media screen and (max-height: 400px) {
        width: 45%;
    }
    label {
        color: #ffffff;
        font-size: 1.6rem;
        margin-bottom: 0.4rem;
    }
`;

export const Input = styled.input`
    padding: 1rem;
    background: transparent;
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
    margin-bottom: 1rem;
    transition: background 0.5s ease-in-out;
    color: #ffffff;
    font-size: 1.2rem;
    width: 100%;
    :hover,
    :focus {
        background: ${({ theme: { backgrounds } }) => backgrounds.primary};
    }
`;

export const OpenModal = styled.a`
    cursor: pointer;
    display: inline-block;
    margin: 1.5rem 0;
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: 1.4rem;
    :hover {
        text-decoration: underline;
    }
`;

export const Close = styled(ReactRouterLink)`
    align-self: flex-end;
    display: inline-block;
    cursor: pointer;
    color: #fff;
    font-size: 1.2rem;
    :hover {
        text-decoration: underline;
    }
    @media screen and (max-height: 400px) {
        width: 100%;
        margin-bottom: 1.5rem;
    }
`;
