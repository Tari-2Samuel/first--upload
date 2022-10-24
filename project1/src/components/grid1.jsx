import meme from '../assets/smile.jpg'
import "../App.css"
function Grid1() {
    return(
        <>
        <div className='contain1'>
        
            <h1 className='branding'>Branding Your Creative Business </h1>
           
         <div className="row">
           <div className='col-md-2 circle'>
      
            </div>
            <div className="col-md-6  img ">
                <img src={meme} className="img-fluid" alt="" srcset="" />
               
            </div>
            
              <div className="col-md-4  card creative">
                <div className="card-body ">
                   <h3 className='skill'> Creativity is a valuable skill</h3>
                   <p className='duis'>
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </p>
                     <div className='btn-learn'>
                     <button className='button'>LEARN MORE</button>
                     </div>
                </div>

            </div>
           

        </div>
        </div>
        </>
    )
    
}
export default Grid1;