import "../App.css"
import dan from "../assets/sd.jpg"
function Grid6(){
    return(
        <>
        <div className="row holder3">
            <div className="col-md-9 holder3-col">
                <div className="card">
                    <div className="card-body holder3-card">
                        <img src={dan} className="dan" alt="" />
                        <h2 className="holder3-text">
                          The greater the tension, the greater the potential.
                           Great energy springs from a correspondingly great tension of opposites. No challenge is too big or messy, familiar or foreign, broad or niche.</h2>
                           <h5 className="ann">ANN SMITH</h5>
                           <p className="ann">Creative Leader</p>

                    </div>

                </div>

            </div>

        </div>
        </>
    )
}

export default Grid6