import styled from 'styled-components';

export const Div = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    main {
        text-align: center;
    }

    h1 {
        font-family: 'Qahiri';
        font-size: 6em;
        text-transform: uppercase;
        color: #fff;
        margin-bottom: 4vh;
    }

    .Students {
        display: flex;
    }

    Button {
        font-family: 'Josefin Sans';
        font-size: 2em;
        margin: 5vh;
    }
`;