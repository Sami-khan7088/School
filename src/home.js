import {NavLink} from "react-router-dom"
function Home() {
    return(
        <>
        <div className="bgimg">
        <div>
            <h1 className="brhr">Offering accees to high-quality<br/> education for everyone</h1>
            <NavLink   to="/">
                        <button className="btn btn-outline-success">Gallery</button>
            </NavLink>
                    </div>
        </div>
        <div className="card_main">
        <div class="card" style={{width:'350px',justifyContent:"center"}} >
        <div  style={{justifyContent:"center",padding:"40px"}}>
        <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/col-service-1.png" style={{width:"80px",height:"80px",marginTop:"20px"}} className="card-img-top" alt="img is here" />
        <div className="card-body">
        </div>
          <h5 className="card-title">online Courses</h5>
          <p className="card-text">Join the community of modern thinking students. Highly qualified teacher and millions of people learning.</p>
          <a href="www.google.com" className="btn btn-outline-success">Courses</a>
        </div>
      </div>
      <div class="card" style={{width:'350px',justifyContent:"center"}} >
        <div  style={{justifyContent:"center",padding:"40px"}}>
        <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/col-service-2.png" style={{width:"80px",height:"80px",marginTop:"20px"}} className="card-img-top" alt="img is here" />
        <div className="card-body">
        </div>
          <h5 className="card-title">Lifetime Access</h5>
          <p className="card-text">Join the community of modern thinking students. Highly qualified teacher and millions of people learning.</p>
          <a href="www.google.com" className="btn btn-outline-success"> Access</a>
        </div>
      </div>
      <div class="card" style={{width:'350px',justifyContent:"center"}} >
        <div  style={{justifyContent:"center",padding:"40px"}}>
        <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/col-service-3.png" style={{width:"80px",height:"80px",marginTop:"20px"}} className="card-img-top" alt="img is here" />
        <div className="card-body">
        </div>
          <h5 className="card-title">Online Courses</h5>
          <p className="card-text">Join the community of modern thinking students. Highly qualified teacher and millions of people learning.</p>
          <a href="www.google.com" className="btn btn-outline-success">Online Courses</a>
        </div>
      </div>
      </div>
      <div className="Appli">
      <div className="from">
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
            <button className="btn btn-outline-success">Submit Your Application</button>
        </form>
      </div>
      </div>
      <h3 style={{marginTop:"30px"}}>Student Fee collection</h3>
      <div className="pay" style={{marginTop:"40px"}}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body ">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-uppercase">Pay Now</span>
                            <i class="fa fa-close close" data-dismiss="modal"></i>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="d-flex flex-column">
                                    <small>Student</small>
                                    <span class="font-weight-bold">Obi Okafor</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex flex-column">
                                    <small>Tuition Fee Due Date</small>
                                    <span class="font-weight-bolder">12/10/2020</span>
                                </div>
                            </div>
                            <div class="mt-3 d-flex flex-column">
                                <small>Class</small>
                                <span class="font-weight-bolder">Stage 1A</span>
                            </div>
                            <div class="mt-3">
                                <small>Payment Plan</small>
                                <div class="row mt-1">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Monthly
                                                </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    Weekly
                                                </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3">
                                <label class="radio"> <input type="radio" name="week" value="1" checked/> <span>1st Week</span> </label>
                                <label class="radio"> <input type="radio" name="week" value="2"/> <span>2nd Week</span> </label>
                                <label class="radio"> <input type="radio" name="week" value="3"/> <span>3rd Week</span> </label>
                                <label class="radio"> <input type="radio" name="week" value="4"/> <span>4th Week</span> </label>
                            </div>
                            <div class="mt-3 text-center fee align-items-center">
                                <h3 class="mb-0 font-weight-light">$1,000</h3>
                            </div>
                            <div class="mt-3">
                                <small>Payment Method</small>
                                <div class="d-flex flex-row">
                                    <label class="radio1"> <input type="radio" name="payment" value="bank"/>  <span><i class="fa fa-bank"></i>  BANK TRANSFER</span> </label>
                                    <label class="radio1"> <input type="radio" name="payment" value="card"/> <span><i class="fa fa-credit-card-alt"></i> CREDIT CARD</span> </label>
                                </div>
                            </div>
                            <div class="mt-3 mr-2">
                                <div class="row g-2">
                                    <div class="col-md-6">
                                        <div class="inputbox">
                                            <small>Card Number</small>
                                            <input type="text" class="form-control" name=""/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="inputbox">
                                            <small>Card Name</small>
                                            <input type="text" class="form-control" name=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 mr-2">
                                <div class="row g-2">
                                    <div class="col-md-6">
                                        <div class="row g-2">
                                            <div class="col-md-6">
                                                <div class="inputbox">
                                                    <small>Date</small>
                                                    <input type="text" class="form-control" name=""/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="inputbox">
                                                    <small>Month</small>
                                                    <input type="text" class="form-control" name=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                         <div class="inputbox">
                                        <small>CVV</small>
                                            <input type="text" class="form-control" name=""/>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="mr-2 mt-4"/>
                            <div class="mt-3 mr-2 d-flex justify-content-end align-items-center">
                                <a href="/" class="cancel">Cancel</a>
                                <button class=" ml-2 btn btn-primary pay">PAY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <footer>
              <h4>Copyright All Right Reserved 2022, GoodLayers</h4>
      </footer>
      </>
    )
}
export default Home;