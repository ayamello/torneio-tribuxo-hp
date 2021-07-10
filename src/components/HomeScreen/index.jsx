import Button from '../Button';
import { Div } from './style';

function HomeScreen({ onClick }) {
    return(
        <Div>
            <header>
                <h1>Triwizard Tournament</h1>
            </header>

            <main>
                <Button onClick={onClick}>Start</Button>
            </main>
        </Div>
    );
}

export default HomeScreen;