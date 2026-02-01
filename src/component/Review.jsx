import { useEffect, useState } from "react";
import OpinionCard from "./opinion card/OpinionCard";
function Review() {
    const [reviews, setReviwes] = useState([]);
    const [selectedRate,setSelectedRate] = useState("all");
    const API_URL = "https://6971fed032c6bacb12c564b2.mockapi.io/reviews"

    useEffect(()=>{
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {console.log(data[0]); setReviwes(data)})
        .catch((err)=> console.error(err));
    },[])



        const deletePrefume=(id)=>{
            fetch(`${API_URL}/${id}`,{
                method: "DELETE",
            })
            .then(()=>{
                setReviwes(reviews.filter((p)=> p.id != id))
            });
        };


        const filterReviews= 
        selectedRate === "all"
        ? reviews
        : reviews.filter((item) => Number(item.rate)=== Number(selectedRate));

        

        return (

        <div>
            <div className="filters">
                <select className="filter-select hover-move"
                value={selectedRate}
                onChange={(e)=> setSelectedRate(e.target.value)}>
                    <option value="all">الكل</option>
                    <option value="5">5 نجوم</option>
                    <option value="4">4 نجوم</option>
                    <option value="3">3 نجوم</option>
                    <option value="2">2 نجوم</option>
                    <option value="1">1 نجوم</option>
                </select>
            </div>
            <div className="opnion-grid">
                {filterReviews.map((item) => (
                    <OpinionCard key ={item.id} deletePrefume={()=> deletePrefume(item.id)} userName={item.userName} date={item.date} perfumeName={item.perfumeName} rate={item.rate} comment={item.comment} />

                ))}

            </div>
        </div>

    )
}

export default Review;