import { IconType } from "react-icons"
import { RiDashboardFill, RiShoppingBag3Fill,RiCoupon3Fill } from "react-icons/ri";
import { Link, useLocation, Location } from "react-router-dom";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FaChartBar, FaChartPie, FaChartLine , FaStopwatch, FaGamepad } from "react-icons/fa";


const AdminSidebar = () => {

  const location = useLocation();
  return (

    <aside>
      <h2>Logo</h2>
      <DivOne location={location}></DivOne>
      <DivTwo location={location}></DivTwo>
      <DivThree location={location}></DivThree>
    </aside>

  )
}

const DivOne = ({ location }: { location: Location }) =>
  <div>
    <h5>Dashboard</h5>

    <ul>
      <Li url="/admin/dashboard" text="Dashboard" location={location} Icon={RiDashboardFill}></Li>
      <Li url="/admin/customers" text="Customer" location={location} Icon={IoIosPeople}></Li>

      <Li url="/admin/products" text="Products" location={location} Icon={RiShoppingBag3Fill}></Li>
      <Li url="/admin/transactions" text="Transactions" location={location} Icon={AiFillFileText}></Li>


    </ul>

  </div>


const DivTwo = ({ location }: { location: Location }) =>
  <div>

    <h5>Charts</h5>
    <ul>
      <Li url="/admin/charts/bar" text="Bar" location={location} Icon={FaChartBar}></Li>
      <Li url="/admin/charts/pie" text="Pie" location={location} Icon={FaChartPie}></Li>

      <Li url="/admin/charts/line" text="Line" location={location} Icon={FaChartLine}></Li>


    </ul>
  </div>


const DivThree = ({ location }: { location: Location }) =>

  <div>
    <h5>App</h5>
    <ul>
      <Li url="/admin/app/stopwatch" text="Stopwatch" location={location} Icon={FaStopwatch}></Li>
      <Li url="/admin/app/coupon" text="Coupon" location={location} Icon={RiCoupon3Fill}></Li>

      <Li url="/admin/app/toss" text="Toss" location={location} Icon={FaGamepad}></Li>

    </ul>
  </div>

interface LiProps {
  url: string;
  text: string;
  location: Location,
  Icon: IconType
}

const Li = ({ url, text, location, Icon }: LiProps) => <li style={
  {
    backgroundColor: location.pathname.includes(url) ? "rgba(0,112,255,0.1)" : "white"
  }
}><Link to={url} style={
  {
    color: location.pathname.includes(url) ? "rgba(0,115,225)" : "black"
  }
}>
    <Icon />
    {text}
  </Link>
</li >


export default AdminSidebar