import {NavLink} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function Error() {
	return (
		<>
			<div id="notfound">
				<div class="notfound">
					<div class="notfound-404">
						<h1>Oops!</h1>
						<h2>404 - The Page can't be found</h2>
					</div>
					<NavLink  to="/School">
					<button className="btn btn-outline-success" >HomePage</button>
					</NavLink>
				</div>
			</div>
		</>
	)
}
export default Error;