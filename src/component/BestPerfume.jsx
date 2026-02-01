import Best5 from "./best5/Best5";
import BestPrefumeCard from "./BestPrefumeCard/BestPrefumeCard";
import { perfumesMock } from "../data/perfumesMock";

function BestPerfume() {

    const prefumeData = [...perfumesMock]
        .sort((a, b) => b.orders - a.orders)
        .slice(0, 2);

    console.log(prefumeData)
    return (
        <div>
            <div className="best-grid">

                {prefumeData.map((item) =>
                    <BestPrefumeCard image={item.image} prefumeName={item.name}
                        orders={item.orders} price={item.price} rate={item.rate} />
                )}
            </div>

                <Best5 />
        </div>
    )
}

export default BestPerfume;