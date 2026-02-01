import "./StateCard.css"
function StateCard({logo,title,number,description,clsName}) {
    return (
        <div className="state-card hover-move">
            <div className="state-icon">
                {logo}
            </div>
            <div className="state-content">
                <h3>{title}</h3>
                <h1>{number}</h1>
                <h4 className={clsName}>{description}</h4>
            </div>

        </div>
    )
}

export default StateCard;