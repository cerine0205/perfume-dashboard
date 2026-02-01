import { useState } from "react";
import { perfumesMock } from "../../data/perfumesMock";

function LastPerfume() {
    const [prefumeData, setPrefumeData] = useState(perfumesMock);
    const latestPerfumes = [...prefumeData]
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  .slice(0, 5);
    return (
        <div className="hover-move">
            <div className="table-header">
                <h3> آخر العطور المضافة</h3>
            </div>
            <table className="prefume-table">
                <thead>
                    <tr>
                        <th>التاريخ</th>
                        <th>الحالة</th>
                        <th>السعر</th>
                        <th>العطر</th>
                        <th></th>

                    </tr>
                </thead>

                <tbody>
                    {latestPerfumes.map((item) =>
                        <tr key={item.id}>
                           
                                <td>{item.createdAt}</td>
                                 <td>
                                <span className={item.inStock ? "badge active" : "badge inactive"}>
                                    {item.inStock ? "متوفر" : "غير متوفر"}
                                </span> </td>
                            <td>{item.price}</td>
                            <td>{item.name}</td>
                            <td><img src={item.image} alt={item.name} className="perfume-img" /></td>

                          
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    )
}

export default LastPerfume;