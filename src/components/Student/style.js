import styled from 'styled-components';

const Div = styled.div`
    .Img {
        margin: 0 2vw;
        padding: 2px 2px 0 2px;
        border-radius: 5px;
    }
    
    img {
        width: 12vw;
        height: 30vh;
        border-radius: 5px;
    }

    .Infos {
        text-align: center;
        color: #fff;
        font-family: 'Josefin Sans';
    }
        .Infos .Name {
            font-size: 1.5em;
            margin: 1vh 0;
        }
        .Infos .House {
            margin: 1vh 0;
        }
`;

export const Gryffindor = styled(Div)`
    .Img {
        background-color: red; 
    }
    .Infos .House {
        color: red;
    }
`;

export const Slytherin = styled(Div)`
    .Img {
        background-color: green;
    }
    .Infos .House {
        color: green;
    }
`;

export const Hufflepuf = styled(Div)`
    .Img {
        background-color: yellow;
    }
    .Infos .House {
        color: yellow;
    }
`;

export const Ravenclaw = styled(Div)`
    .Img {
        background-color: blue;
    }
    .Infos .House {
        color: blue;
    }
`;