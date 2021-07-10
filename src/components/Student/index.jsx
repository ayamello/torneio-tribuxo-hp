import { Gryffindor, Slytherin, Hufflepuf, Ravenclaw } from './style';

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
    else if (house === "Hufflepuf") {
        return(
            <Hufflepuf>
                <div className="Img">
                    <img src={img} alt={name} />
                </div>
    
                <div className="Infos">
                    <p className="Name">{name}</p>
                    <p>Patronus: {patronus}</p>
                    <p className="House" >{house}</p>
                </div>
            </Hufflepuf>
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