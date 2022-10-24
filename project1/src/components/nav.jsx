import { Link } from "react-router-dom"

function Nav(){
    return(
       
    <header>
    <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="javascript:void(0)">Logo</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navb">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
         <Link to='/'>
          <a class="nav-link nav-text" href="javascript:void(0)">HOME</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link to='/AboutUs'>
          <a class="nav-link nav-text" href="javascript:void(0)">About Us</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link to='/ContactUs'>
          <a class="nav-link nav-text" href="javascript:void(0)">Comtact Us</a>
          </Link>
        </li>
       
      </ul>
    </div>
    </nav>
 </header>

    )
}

export default Nav