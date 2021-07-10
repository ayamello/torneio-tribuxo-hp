import Button from '../Button';
import { Div } from './style';

function HomeScreen() {
    return(
        <Div>
            <header>
                <h1>Triwizard Tournament</h1>
            </header>

            <main>
                <Button onClick={() => null}>Start</Button>
            </main>
        </Div>
    );
}

export default HomeScreen;