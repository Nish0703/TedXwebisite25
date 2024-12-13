
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.js'
import Events from './pages/events/Events.js'
import Event24 from "./pages/events/2024/Event_24.js"
import Event23 from "./pages/events/2023/Event_23.js"
import Event22 from "./pages/events/2022/Event_22.js"
import Event21 from "./pages/events/2021/Event_21.js"
import Event19 from "./pages/events/2019/Event_19.js"
import Event16 from "./pages/events/2016/Event_16.js"
import AboutUs from './pages/aboutUs/AboutUs.js'
import ContactUs from './pages/contactUs/ContactUs.js'
import Privacy from './pages/privacy/Privacy.js'
import Terms from './pages/terms/Terms.js'
import Team from './pages/team/Team.js'
import BuyTickets from './pages/buyTickets/buyTickets.js'
import Sidebar from './components/sidebar/Sidebar';
import './components/sidebar/Sidebar.css';

function App() {
  return (
    <>
        <Router>
        <Sidebar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Events" element={<Events/>} />
            <Route path="/Events/2024" element={<Event24/>} />
            <Route path="/Events/2023" element={<Event23/>} />
            <Route path="/Events/2022" element={<Event22/>} />
            <Route path="/Events/2021" element={<Event21/>} />
            <Route path="/Events/2019" element={<Event19/>} />
            <Route path="/Events/2016" element={<Event16/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/Team" element={<Team />} />
            <Route path="/ContactUs" element={<ContactUs/>} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/BuyTickets" element={<BuyTickets/>}></Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
