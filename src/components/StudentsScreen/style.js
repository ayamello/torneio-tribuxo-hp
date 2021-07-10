import styled from 'styled-components';

export const Div = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    main {
        text-align: center;
    }

    h1 {
        font-family: 'Architects Daughter';
        font-size: 3em;
        text-transform: uppercase;
        color: #fff;
        margin: 6vh;
    }

    .Students {
        display: flex;
    }

    Button {
        font-family: 'Architects Daughter';
        font-size: 1.5em;
        margin: 5vh;
    }

    @media screen and (max-width: 699px) {
        .Students {
            flex-direction: column;
        }
    }
`;