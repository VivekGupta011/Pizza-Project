function Vehicale(props){
    return <h2> hello here from {props.bussiness}</h2>
}

export function Nested(){
    const company='TCS';
    const data=[ "vivek"," gupta"]
    return(
    <>
    <h4>hello this is Garage function</h4>
    <Vehicale bussiness="Microsoft" />
    <p>hello this comapny data {data}</p>
    <Vehicale bussiness="Deloitte" />

    </>
    )
}