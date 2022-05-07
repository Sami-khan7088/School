
function Collection() {
    return (
        <>
            <div className="pay" >
            <div class="modal-dialog">
                <div class="modal-content content">
                <h1 style={{marginTop:"30px"}}>Student Fee collection</h1>
                    <div class="modal-body ">
                        <div class="d-flex justify-content-between align-items-center">
                        {/* <h3 style={{marginTop:"30px"}}>Student Fee collection</h3> */}
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
                                <a href="/" class="btn btn-danger">Cancel</a>
                                <button class="ml-2 btn btn-success">PAY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                </>
                )
}
export default Collection;