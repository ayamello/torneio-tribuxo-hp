import { useState } from 'react';
import Button from '../Button';
import Student from '../Student';
import { Div } from './style';

function StudentsScreen({ studentsList }) {
    const drawStudent = () => {
        const results = [];
    
        while(results.length < 3) {
            const res = Math.floor(Math.random() * studentsList.length);
            const house = studentsList[res].house;
          
            if(results.indexOf(res) === -1) {
                if(results.length === 1) {
                    if(studentsList[results[0]].house !== house) {
                        results.push(res);
                    }
                }
                else if(results.length === 2) {
                    if(studentsList[results[0]].house !== house && studentsList[results[1]].house !== house) {
                        results.push(res);
                    }
                }
                else {
                    results.push(res);
                }
                
            }
        }
        return results;
    }

    const [drawn, setDrawn] = useState(drawStudent);

    function handleTryAgain() {
        setDrawn(drawStudent());
        console.log(drawn)
    }

    return(
        <Div>
            <header>
                <h1>Wizards</h1>
            </header>

            <main>
                <div className="Students">
                    <Student img={studentsList[drawn[0]].image}
                             name={studentsList[drawn[0]].name}
                             house={studentsList[drawn[0]].house}
                             patronus={studentsList[drawn[0]].patronus === "" ? "Null" : studentsList[drawn[0]].patronus} 
                    />
                    <Student img={studentsList[drawn[1]].image}
                             name={studentsList[drawn[1]].name}
                             house={studentsList[drawn[1]].house}
                             patronus={studentsList[drawn[0]].patronus === "" ? "Null" : studentsList[drawn[0]].patronus} 
                    />
                    <Student img={studentsList[drawn[2]].image}
                             name={studentsList[drawn[2]].name}
                             house={studentsList[drawn[2]].house}
                             patronus={studentsList[drawn[0]].patronus === "" ? "Null" : studentsList[drawn[0]].patronus} 
                    />
                </div>
                
                <Button onClick={handleTryAgain}>Try again</Button>
            </main>
        </Div>
    );
}

export default StudentsScreen;