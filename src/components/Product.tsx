type Props = {
    title:String,
    price:number,
    quantity:number
};

function Product(props:Props){
    

    return(
        <div>
        <p>Title: {props.title}</p>
        <p>Price: {props.price}</p>
        {
            props.quantity===0
            ?<p>товар кончился</p>
            : <p>колво: {props.quantity}</p>
        }
        <p>quantity: {props.quantity}</p>
        </div>
    );
}

export default Product;