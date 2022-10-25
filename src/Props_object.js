import { Link } from "react-router-dom";
function Objchild(props){
    return <h2> hello {props.name.name}</h2>
}

export function Props_object(){
    const carInfo={name:"ford",model:"Mustang"};
    return(
        <>
        <h1>
            this is Objparent function
        </h1>
        <Objchild name={carInfo} />

        <Link to="contacts/vivek">this is vivek</Link>
        <Link to="contacts/shankar">this is vivek</Link>
        </>
    )
}