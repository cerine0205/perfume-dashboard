import "./Orders.css"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const ordersData = [
  { day: "السبت", orders: 55 },
  { day: "الأحد", orders: 62 },
  { day: "الاثنين", orders: 40 },
  { day: "الثلاثاء", orders: 78 },
  { day: "الأربعاء", orders: 88 },
  { day: "الخميس", orders: 72 },
  { day: "الجمعة", orders: 95 },
];

function Orders(){
    return(
    <div className="chart-card hover-move">
      <h3 className="chart-title">الطلبات خلال الأسبوع</h3>

      <div className="chart-area">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ordersData} layout="vertical" margin={{ left: -35, right: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tick={{fill:"#383538"}}/>
            <YAxis dataKey="day" type="category" width={80} tickMargin={35} tick={{fill:"#383538"}}/>
            <Tooltip />
            <Bar dataKey="orders" radius={[10, 10, 10, 10]} fill="#d79cd4"/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
    
}

export default Orders;



