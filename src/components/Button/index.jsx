import { Btn } from "./style";

function Button(props) {
    return(
        <Btn onClick={props.onClick}>{props.text}</Btn>
    );
}

export default Button;