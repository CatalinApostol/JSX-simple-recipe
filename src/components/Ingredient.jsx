function Ingredient(props) {

    return (
        <>
            <div className="ingredient">
                <p><strong>{props.quantity}</strong> {props.name} </p>
                
            </div>
        </>
    );
}

export default Ingredient;