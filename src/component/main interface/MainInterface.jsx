import LastPerfume from "../last prefume/LastPerfume";
import StateCard from "../State card/StateCard";
import "./MainInterface.css"
import Orders from "../order/Orders";

function MainInterface() {
    return (
        <div>
            <div className="stats-grid">
                <StateCard clsName="h4-red" logo="" title="نسبة التوفر" number="87%" description="↓ 3% من الشهر الماضي" />
                <StateCard clsName="h4-green" logo="" title="عدد الطلبات" number="892" description="↑ 8% من الشهر الماضي" />
                <StateCard logo="" title="عدد العطور" number="48" description="" />
                <StateCard clsName="h4-green" logo="" title="عدد المستخدمين" number="1,247" description="↑ 12% من الشهر الماضي" />
            </div>


            <div className="lastOrder-and-chart">
                <div className="Orders-contiainer">
                    <Orders />
                </div>

                <div className="last-perfume-container">
                    <LastPerfume />
                </div>
            </div>

        </div>

    )
}

export default MainInterface;
