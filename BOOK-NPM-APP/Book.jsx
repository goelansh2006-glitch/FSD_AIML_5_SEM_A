function Book({props}){
    return(
        <div className="card">
            <img src={props.image} width="100px" height="100px"></img>
            <h2 style= {{color:"red"}}>Price: ₹{props.price} </h2>
            <button>Add To Cart</button>
        </div>
    )
}
export default Book;