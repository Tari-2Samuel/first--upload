import { useState } from "react";

function MyForm() {{
    const [username, setUsername] = useState("")
    const [Email, setEmail] = useState("")
     
   function handleSubmit(e){
       e.preventDefault()
       console.log(username,Email)
   }
   
   return(
       <>
      <div>
       
      <div className="card shadow bgimg-form">
      <h1 className="form-h1">Let us focus on the needs of your brand</h1>
           <div className="card-body">
          <form onSubmit={handleSubmit}>
             <div className="form-group ">
               <label className=" form-enter" htmlFor="Name">Enter Your Name: </label>
               <input type="text"value={username} onChange={ (e) => setUsername(e.target.value)} className="form-control" />
              
              

              </div>
             <div className="form-group">
               <label className="form-enter" htmlFor="Email">Enter Your Email Address: </label>
                <input type="text"value={Email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
              
               

              </div>
             <div className="form-group form-submit">
               <input type="submit" value="submit" className="form-control "/>
              

              </div>
          </form>

           </div>

       </div>
      </div>
       
       </>
   )
}
}

export default MyForm