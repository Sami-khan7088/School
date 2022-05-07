import { React,useState} from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
function Nav() {
    const [status, setState] = useState(true)
    return (<>
        <nav className="navBar">
            <div className="Logo">
                <div className="logo1">
                <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/logo.png" alt="img0" style={{ paddingLeft: "20px" }} />
                </div>
                <div className="logo2">
                    <img src={process.env.PUBLIC_URL + '/logo.jpeg'} alt="img"/>
                </div>
            </div>
            <div className="nav_main">
            <div className="drop1">
                <NavLink className="navlink" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#28a745' : '#f0f0f0',
                })} to="/School">
                    <div>Gallery</div>
                </NavLink>
                <NavLink className="navlink" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#28a745' : '#f0f0f0',
                })} to="/Appliction"><div>Application From</div>
                </NavLink>
                <NavLink className="navlink" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#28a745' : '#f0f0f0',
                })} to="/collection"><div>Fee collection</div>
                </NavLink>
            </div>
            <div className="dropdown">
                <button className=" btn btn-success dropbtn" onClick={() => setState(!status)} style={{marginRight:"16px"}}><MenuIcon /></button>
            </div>
            </div>
        </nav>
        <div className={status? "slide ":"active"} >
                <div style={{backgroundColor:"#f0f0f0",padding:"10px 0px"}}>
                <div>
                <NavLink className="navlink" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#28a745' : '#f0f0f0',
                })} to="/School">
                    <div>Gallery</div>
                </NavLink>
                </div>
                <div>
                <NavLink className="navlink" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#28a745' : '#f0f0f0',
                })} to="/Appliction"><div>Application From</div>
                </NavLink>
                </div>
                <div>
                <NavLink className="navlink" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#28a745' : '#f0f0f0',
                })} to="/collection"><div>Fee collection</div>
                </NavLink>
                </div>
                </div>
                </div>
    </>
    )
}
export default Nav;