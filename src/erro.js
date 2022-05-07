import { useNavigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function Error() {
	const history = useNavigate()
	return (
		<>
			<div id="notfound">
				<div class="notfound">
					<div class="notfound-404">
						<h1>Oops!</h1>
						<h2>404 - The Page can't be found</h2>
					</div>
					<button className="btn btn-outline-success" onClick={() => { history('/') }}>HomePage</button>
				</div>
			</div>
		</>
	)
}
export default Error;