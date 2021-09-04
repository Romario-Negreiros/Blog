import styled from 'styled-components';

export const InputWrapper = styled.li`
    width: 100%;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.pink};
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
        width: 90%;
        background: unset;
        padding: 1.5rem;
    }
    div {
        width: 10%;
        align-self: stretch;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 1rem;
    }
    img {
        width: 20px;
        object-fit: cover;
    }
`;

export const Warning = styled.li`
    width: 100%;
    p {
        font-size: 1.4rem;
        text-align: center;
        color: ${({ theme: { colors } }) => colors.error};
        margin-bottom: 1.5rem;
    }
`;