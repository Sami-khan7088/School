import { React } from "react";
import { NavLink } from "react-router-dom";
function Nav() {
    return (<>
        <nav className="navBar">
        <div className="Logo">
 <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/logo.png" alt="img0"/>
        </div>
                    <div className="nav_main">
                    <NavLink className="navlink"  to="/">
                        <div>Gallery</div>
                    </NavLink>
                    <NavLink className="navlink"  to="/Appliction"><div>Student Application From</div></NavLink>
                    <NavLink className="navlink" to="/collection"><div>Student Fee collection</div></NavLink>                        
                    </div>
        </nav>
    </>
    )
}
export default Nav;