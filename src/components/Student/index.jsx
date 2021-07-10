import { Gryffindor, Slytherin, Hufflepuff, Ravenclaw } from './style';

function Student({img, name, house, patronus}) {
    if (house === "Gryffindor") {
        return(
            <Gryffindor>
                <div className="Img">
                    <img src={img} alt={name} />
                </div>
    
                <div className="Infos">
                    <p className="Name">{name}</p>
                    <p>Patronus: {patronus}</p>
                    <p className="House" >{house}</p>
                </div>
            </Gryffindor>
        );
    }
    else if (house === "Slytherin") {
        return(
            <Slytherin>
                <div className="Img">
                    <img src={img} alt={name} />
                </div>
    
                <div className="Infos">
                    <p className="Name">{name}</p>
                    <p>Patronus: {patronus}</p>
                    <p className="House" >{house}</p>
                </div>
            </Slytherin>
        );
    }
    else if (house === "Hufflepuff") {
        return(
            <Hufflepuff>
                <div className="Img">
                    <img src={img} alt={name} />
                </div>
    
                <div className="Infos">
                    <p className="Name">{name}</p>
                    <p>Patronus: {patronus}</p>
                    <p className="House" >{house}</p>
                </div>
            </Hufflepuff>
        );
    }
    else {
        return(
            <Ravenclaw>
                <div className="Img">
                    <img src={img} alt={name} />
                </div>
                
                <div className="Infos">
                    <p className="Name">{name}</p>
                    <p>Patronus: {patronus}</p>
                    <p className="House" >{house}</p>
                </div>
            </Ravenclaw>
        );
    }
    
}

export default Student;