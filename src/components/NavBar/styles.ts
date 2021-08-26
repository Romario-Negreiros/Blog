import styled from 'styled-components';

import StyledProps from './types';

import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 0.5rem;
    background: ${({ theme: { backgrounds } }) => backgrounds.secondaryblue};
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.pink};
    color: ${({ theme: { colors } }) => colors.pink};
    @media screen and (min-width: 300px) {
        padding: 0 1.5rem;
    }
    h2 {
        font-size: 2.2rem;
    }
`;

export const Navigation = styled.nav`
    height: 100%;
    li {
        height: 100%;
    }
`;

export const NavList = styled.ul<StyledProps>`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 600px) {
        ${props =>
            props.isOpen ? 'visibility: visible' : 'visibility: hidden'};
        ${props =>
            props.isOpen
                ? 'transform: translateY(0)'
                : 'transform: translateY(-600px)'};
        position: absolute;
        padding-top: 70px;
        top: 0;
        left: 0;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        background: #191d3a;
        z-index: 10;
        transition: visibility 0.5s ease-in-out, transform 0.5s ease-in-out;
        @media screen and (max-height: 200px) {
            height: fit-content;
        }
    }
`;

export const Burguer = styled.div`
    cursor: pointer;
    display: block;
    position: absolute;
    top: 22px;
    right: 5px;
    z-index: 11;
    @media screen and (min-width: 300px) {
        right: 25px;
    }
    @media screen and (min-width: 600px) {
        display: none;
    }
`;

export const Line = styled.span`
    @media screen and (max-width: 600px) {
        background: ${({ theme: { colors } }) => colors.pink};
        width: 15px;
        height: 2px;
        display: block;
        margin-top: 3px;
        background: $weakGray;
        transition: all 0.4s ease-in-out;
    }
    &.close-left {
        transform: translate(0, 2px) rotate(45deg);
    }
    &.close-right {
        transform: translate(0, -3px) rotate(135deg);
    }
    &.fade {
        opacity: 0;
    }
`;

export const Link = styled(ReactRouterLink)`
    color: ${({ theme: { colors } }) => colors.weakerpink};
    padding: 0 1.5rem;
    font-size: 1.6rem;
    height: 100%;
    display: block;
    line-height: 65px;
    transition: background 0.3s ease, color 0.3s ease;
    :hover {
        background: rgba(25%, 29%, 58%, 0.5);
        color: ${({ theme: { colors } }) => colors.pink};
    }
    @media screen and (max-width: 600px) {
        line-height: 0;
        height: fit-content;
        padding: 2rem 0;
        width: 100vw;
        text-align: center;
    }
`;

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 4rem 0 1rem;
    @media screen and (min-width: 400px) {
    }
    p {
        color: ${({ theme: { colors } }) => colors.pink};
        font-size: 1.6rem;
    }
    div {
        border-radius: 50%;
        background: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        margin-left: 1rem;
    }
    img {
        width: 1.5rem;
        object-fit: cover;
    }
`;
