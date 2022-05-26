function Step(props) {

    return (
        <>
            <div className="step">
                <p><strong>{props.step}</strong> {props.text} </p>
                
            </div>
        </>
    );
}

export default Step;