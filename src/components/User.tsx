type Props = {
    name:string,
    surname:string,
    age:number
    showAge:boolean
};

function User(props:Props){
   
    return(
        <div>
        <p>Name: {props.name}</p>
        <p>Surname: {props.surname}</p>
        {
            props.showAge===true
            ?<p>возраст: {props.showAge}</p>
            : <p> </p>
        }
        <p>Age: {props.age}</p>
        </div>
    );
}

export default User;

