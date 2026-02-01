import "./BestPrefumeCard.css"
function BestPrefumeCard({ image, prefumeName, orders, price, rate }) {
    return (
        <div className="best-card hover-move">

            <div className="best-card-header">
                <h2>{prefumeName}</h2>
            </div>

            <div className="card-img">
                <img src={image} alt={prefumeName} />
            </div>

            <div className="card-content">
                <h1>عدد الطلبات</h1>
                <h1>{orders}</h1>

                <h1>السعر</h1>
                <h1>{price}</h1>

                <h1>متوسط التقييم </h1>
                <div className="Rate">{[1,2,3,4,5].map((star)=>
                <span key={star} 
                className={star <= rate ? "Star filled" : "Star"}>
                    ★
                </span>)}</div>
            </div>

        </div>

    )
}

export default BestPrefumeCard;