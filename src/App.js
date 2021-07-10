import { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import StudentsScreen from './components/StudentsScreen';

function App() {
    const [studentsList, setStudentsList] = useState([]);
    const [start, setStart] = useState(false);

    useEffect(() => {
        fetch('https://hp-api.herokuapp.com/api/characters/students')
        .then(res => res.json())
        .then(res => setStudentsList(res));
    }, []);

    const handleStart = () => {
        setStart(true);
    }

    return(
       <div>
           {!start && <HomeScreen onClick={handleStart} />}
           {start && <StudentsScreen studentsList={studentsList} />}
       </div>
    );
}

export default App;