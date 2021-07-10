import { Btn } from "./style";

function Button(props) {
    return(
        <Btn onClick={props.onClick}>{props.children}</Btn>
    );
}

export default Button;