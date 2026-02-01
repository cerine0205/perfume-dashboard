import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { perfumesMock } from "../../data/perfumesMock";

const PrefumesData = [...perfumesMock]
.sort((a,b) => b.orders-a.orders)
.slice(0,5)
.map((p)=>({prefume:p.name,orders:p.orders}))

function Best5(){
    return(
    <div className="chart hover-move">
      <h3 className="chart-title">افضل 5 عطور</h3>

      <div className="chart-area">
        <ResponsiveContainer width="100%" height={275}>
          <BarChart data={PrefumesData} layout="vertical" margin={{ left: -35, right: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tick={{fill:"#383538"}} />
            <YAxis dataKey="prefume" type="category" width={80} tickMargin={35} tick={{fill:"#383538"}} />
            <Tooltip />
            <Bar dataKey="orders" radius={[10, 10, 10, 10]} fill="#d79cd4"/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
    
}

export default Best5;



