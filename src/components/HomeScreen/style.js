import styled from 'styled-components';

export const Div = styled.div `
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        font-family: 'Architects Daughter';
        font-size: 4em;
        color: #fff;
        margin-bottom: 10vh;
    }

    Button {
        font-family: 'Architects Daughter';
        font-size: 1.7em;
    }

    @media screen and (max-width: 767px) {
        h1 {
            font-size: 3em;
        }
        Button {
            padding: 0.5vh 10vw;
        }
    }
`;