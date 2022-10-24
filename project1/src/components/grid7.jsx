import "../App.css"
import coffee from "../assets/coffee.jpg"
import lady from "../assets/lady.jpg"
import { Link } from "react-router-dom"

function Grid7 (){
    return(
        <>
        <div className="contain2">
            <div className="row">
                <div className="col-md-5">
                    <img src={coffee} className="img-fluid img-coffee" alt="" />

                </div>
                <div className="col-md-3">
                    <img src={lady} className="img-fluid img-lady" alt="" />

                </div>
                <div className="col-md-4 card7-col">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card7-h1">Brand Identity</h1>
                           <div className="card7-list">
                           <ul>
                                <li>Verbal identity</li>
                                <li>Communication style guide</li>
                                <li>Tagline exploration</li>
                            </ul>
                           </div>
                           <div className="btn-div">
                            <Link to='/ContactUs'>
                            <button className="btn-contact">CONTACT US</button>
                            </Link>
                          </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>
    )
}
export default Grid7