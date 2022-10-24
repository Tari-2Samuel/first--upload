import "../App.css";
import dan from "../assets/yy.jpg";
import shi from "../assets/sd.jpg";
import "animate.css"

function Card() {
  return (
    <>
      <div className=" con-card">
        <div className="row ">
         
          <div className="col-md-3 text-bottom">
            <div className="card animate__animated animate__backinDown ">
              <div className="card-body animate__animated animate__backinDown">
                <i className=" card-icon fa fa-phone fa-3x "></i>
                <h4 className="fonts">RESULTS</h4>
                <p className="fonts">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
                <a className="card-more" href="0">
                  MORE
                </a>
              </div>
            </div>
          </div>
         
          <div className="col-md-3  text-adjust ">
            <div className="card animate__animated animate__backinDown">
              <div className="card-body">
                <i className=" card-icon fa fa-user fa-3x "></i>
                <h4 className="fonts">SUPPORT</h4>
                <p className="fonts">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
                <a className="card-more" href="#">
                  MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3  text-bottom">
            <div className="card animate__animated animate__backinDown">
              <div className="card-body">
                <i className=" card-icon fa fa-atom fa-3x "></i>
                <h4 className="fonts">EXPERTISE</h4>
                <p className="fonts">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
                <a className="card-more" href="#">
                  MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3  text-adjust ">
            <div className="card animate__animated animate__backinDown">
              <div className="card-body">
                <i className=" card-icon fa fa-coins fa-3x "></i>
                <h4 className="fonts">STRATEGY</h4>
                <p className="fonts">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
                <a className="card-more" href="#">
                  MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
