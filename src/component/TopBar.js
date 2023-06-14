import React from 'react'
function handlelogout(){
    window.localStorage.setItem("token",null);
    window.localStorage.setItem("email",null);
    window.location.href="/login";
}
function TopBar() {
  return (
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

   
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
        <i class="fa fa-bars"></i>
    </button>

  <h3>Welcome Back to URl Shortener on Data Aces</h3>


    <ul class="navbar-nav ml-auto">

    
        <li class="nav-item dropdown no-arrow d-sm-none">
            <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
            </a>
      
            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                    <div class="input-group">
                        <input type="text" class="form-control bg-light border-0 small"
                            placeholder="Search for..." aria-label="Search"
                            aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button">
                                <i class="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </li>

    
        <li class="nav-item dropdown no-arrow mx-1">
            {/* <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"></i>
          
                <span class="badge badge-danger badge-counter">3+</span>
            </a> */}
            <div className='nav-link dropdown-toggle'>
            <i class="fa fa-power-off" aria-hidden="true" onClick={()=>handlelogout()}></i></div>
          
        </li>


    

        {/* <div class="topbar-divider d-none d-sm-block"></div> */}

      

    </ul>

</nav>
  )
}

export default TopBar