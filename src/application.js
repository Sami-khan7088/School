function Application(){
    return(
        <>
        <div className="Appli">
      <div className="form">
      <h1 style={{marginBottom:"10px",}}> Application Form</h1>
        <form>
            <div>
                <input type="text" className="input" placeholder="Enter Your First Name"></input>
            </div>
            <div>
                <input type="text" className="input" placeholder="Enter Your Last Name"></input>
            </div>
            <div>
                <input type="text" className="input" placeholder="Father Name"></input>
            </div>
            <div>
                <input type="mail" className="input" placeholder="Enter Your Email"></input>
            </div>
            <div>
                <input type="text" className="input" placeholder="Address"></input>
            </div>
            <button className="btn btn-success">Submit Your Application</button>
        </form>
      </div>
      </div>
        </>
    )
}
export default Application;