import { useContext } from "react";
import { SideNavBar } from "../App";
import Cards from "./Cards";
import Charts from "./Charts";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import Sidenav from "./common/Sidenav";
import Table from "./Table";

const Home = () => {
    var { sideNav } = useContext(SideNavBar)
    return (
        <>
            <div className={sideNav ? "sb-nav-fixed sb-sidenav-toggled" : "sb-nav-fixed"}>
                <Sidebar />
                <div id="layoutSidenav">
                    <Sidenav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                                <Header />
                                <Cards />
                                <Charts />
                                <Table />
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;