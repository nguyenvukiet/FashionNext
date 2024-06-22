import React from 'react';


const PopupFeedback = ({ openFeedback, handleCloseFeedback  }) => {
  return (
    <div className={`popup popup-login popup-fb ${openFeedback ? 'open' : ''}`}>
    <div className="popup-overlay" onClick={handleCloseFeedback}></div>
    <div className="popup-main">
      <div className="popup-login-title">
        <button className="popup-close" onClick={handleCloseFeedback}><i className="fas fa-times icon"></i></button><span className="txt">ADD A FEEDBACK</span>
      </div>
      <div className="popup-over">
        <div className="popup-wrapper">
          <div className="popup-fb-inner"> 
            <form action="">
              <div className="popup-fb-star">
                <div className="stars">
                  <input id="star1" type="radio" name="rating" value="1" hidden=""/>
                  <input id="star2" type="radio" name="rating" value="2" hidden=""/>
                  <input id="star3" type="radio" name="rating" value="3" hidden=""/>
                  <input id="star4" type="radio" name="rating" value="4" hidden=""/>
                  <input id="star5" type="radio" name="rating" value="5" hidden=""/>
                  <label for="star1"></label>
                  <label for="star2"></label>
                  <label for="star3"></label>
                  <label for="star4"></label>
                  <label for="star5"></label>
                </div>
              </div>
              <div className="form-list"> 
                <label className="ip-control x2"><span className="t-label">First name</span>
                  <input placeholder="Enter your first name" title="Enter your first name" type="text"/>
                </label>
                <label className="ip-control x2"><span className="t-label">Last name</span>
                  <input placeholder="Enter your last name" title="Enter your last name" type="text"/>
                </label>
                <label className="ip-control x2"><span className="t-label">Phone number</span>
                  <input placeholder="Enter your phone number" title="Enter your phone number" type="tel"/>
                </label>
                <label className="ip-control x2"><span className="t-label">Email</span>
                  <input placeholder="Enter your Email" title="Enter your Email" type="email"/>
                </label>
                <label className="ip-control"><span className="t-label">What is the primary reason for you love this product</span>
                  <textarea placeholder="Tell me " title="Tell me " type="text"></textarea>
                </label>
                <label className="ip-control"><span className="t-label">Please provide any additional comments</span>
                  <textarea placeholder="Why did you like or dislike this product?" title="Why did you like or dislike this product?" type="text"></textarea>
                </label>
              </div>
              <div className="popup-fb-control"> 
                {/* <div id="file-selected-message" style="display: none; color: #01677D;"></div> */}
                <input id="file-input" type="file" multiple hidden/>
                <div className="d-flex"> <span className="btn btn-trans" id="upload-btn"><span className="text">CHOOSE FILE</span></span>
                  <button className="btn btn-trans" type="submit"><span className="text">SUBMIT</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PopupFeedback;