import "../App.css"
import young from "../assets/young.jpg"
function Grid4(){
    return(
      <>
      <div className="grid4-img">
        <div className="row">
            <div className="col-md-9">
           <img src={young} className="img-fluid img-young" alt="" />
            </div>

        </div>
       
      </div>
      </>
    )
}

export default Grid4