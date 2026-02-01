import "./OpinionCard.css"
function OpinionCard({ deletePrefume,logo, userName, date, perfumeName, rate, comment }) {
    return (
        <div className="opinion-card hover-move">

            <div className="user-row">
                <div className="state-icon">{logo}</div>
                <h4>{userName}</h4>
            </div>

            <div className="state-content">
                <p className="date">{date}</p>
                <h1>{perfumeName}</h1>


<div className="rate">
  {[1,2,3,4,5].map((star) => (
    <span
      key={star}
      className={star <= rate ? "star filled" : "star"}
    >
      ★
    </span>
  ))}
</div>
                <p className="comment">{comment}</p>

                <div className="actions">
                    <button className="btn-delete" onClick={deletePrefume}>حذف</button>
                </div>
            </div>

        </div>
    )
}



export default OpinionCard;