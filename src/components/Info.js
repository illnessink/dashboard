function Info(props) {
    return (
        <div className="infoBox">
            <p>{props.whichTitle}</p>
            <h4>{props.statOne}</h4>
            <h4>{props.statTwo}</h4>
            <h4>{props.statThree}</h4>
        </div>
    );
}

export default Info;