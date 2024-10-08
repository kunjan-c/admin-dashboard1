import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";

import userImg from "../assets/user.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch></BsSearch>
          <input type="text" placeholder=" Search For data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>

        <section className="widget-container">
          <WidgetItem percent={40} value={34} heading="Revenue" amount={true} color="rgb(0,115,255)" />
          <WidgetItem percent={-14} value={3400} heading="Users" color="rgb(0,198,202)" />
          <WidgetItem percent={80} value={23000} heading="Transactions" color="rgb(255,196,0)" />
          <WidgetItem percent={30} value={1000} heading="Products" color="rgb(75,0,255)" />

        </section>
      </main>
    </div>
  )
}

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean

}
const WidgetItem = ({ heading, value, percent, color, amount = false }: WidgetItemProps) => <article className="widget">
  <div className="widgetInfo">
    <p>{heading}</p>
    <h4>{amount ? `$${value}` : value}</h4>
    {
      percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%{""}
        </span>
      ) :
        (
          <span className="red">
            <HiTrendingDown /> {percent}%{""}
          </span>
        )
    }

  </div>

  <div className="widgetCircle" style={{
    background: `conic-gradient(
    ${color} ${(Math.abs(percent) / 100) * 360}deg,
    rgb(255,255,255) 0
    )`
  }}>
    <span style={{
      color,

    }}>{percent}</span>
  </div>

</article>


export default Dashboard;