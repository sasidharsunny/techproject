import React from 'react';
import './update3.css'

function update3(props) {
    return (
        <div>
            


    
<nav class="navbar navbar-expand-lg navbar-light rounded">
            <a class="navbar-brand order-1" href="#">Albenus</a>
<div class="ml-auto flex-md-grow-0 d-flex  order-2">
        <div class=" order-md-secondary order-md-secondary float-right">
          <form action="." method="get">
            <div class="input-icon">
              <span class="input-icon-addon">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /></svg>
              </span>
              <input type="text" class="form-control" placeholder="Search by title or skill…" aria-label="Search in website"/>
            </div>
          </form>
        </div>
<div class=" ml-2 order-3 order-md-three">
          <form action="." method="get">
            <div class="input-icon">
              <span class="input-icon-addon">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /></svg>
              </span>
              <input type="text" class="form-control" placeholder="City, State, or Zip…" aria-label="Search in website"/>
            </div>
          </form>
        </div>
      </div>



      <div class="dropdown order-5 d-flex update-profile">
       
        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="https://image.flaticon.com/icons/png/128/3135/3135715.png"/>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#"  data-toggle="modal" data-target="#exampleModal">Profile</a>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>



<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Profile</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="card-body">
          <div class="row">
              <div class="form-group col-md-6 col-12">
                  <input type="text" class="form-control" name="full_name" placeholder="First Name"/>
              </div>
              <div class="form-group col-md-6 col-12">
                  <input type="text" class="form-control" name="user_name" placeholder="Last Name"/>
               </div>
               <div class="form-group col-md-6 col-12">
                <input type="tel" class="form-control" name="user_name" placeholder="Phone Number"/>
               </div>
                  <div class="form-group col-md-6 col-12">
                      <input type="text" class="form-control" name="email_id" placeholder="Email"/>
                  </div>
    
               <div class="form-group col-md-6 col-12">
                <input type="text" class="form-control" name="user_name" placeholder="Skills"/>
             </div>
             <div class="form-group col-md-6 col-12">
              <input type="text" class="form-control" name="user_name" placeholder="Location"/>
           </div>
         
          </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Update changes</button>
      </div>
    </div>
  </div>
</div>




        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse  order-4" id="navbarsExample09" >
  
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="" >
                  <span class="nav-link-icon d-md-none d-lg-inline-block"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
                  </span>
                  <span class="nav-link-title">
                    My Network
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="" >
                  <span class="nav-link-icon d-md-none d-lg-inline-block"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><line x1="3" y1="6" x2="3" y2="19" /><line x1="12" y1="6" x2="12" y2="19" /><line x1="21" y1="6" x2="21" y2="19" /></svg>
                  </span>
                  <span class="nav-link-title">
                    My Courses
                  </span>
                </a>
              </li>
      
              <li class="nav-item">
                <a class="nav-link" href="" >
                  <span class="nav-link-icon d-md-none d-lg-inline-block"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" /></svg>
                  </span>
                  <span class="nav-link-title">
                   My Internships
                  </span>
                </a>
              </li>
             
              <li class="nav-item">
                <a class="nav-link" href="" >
                  <span class="nav-link-icon d-md-none d-lg-inline-block"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></svg>
                  </span>
                  <span class="nav-link-title">
                    Jobs
                  </span>
                </a>
              </li>
            </ul>
         
        </div>
      </nav>

      







    








        </div>
    );
}

export default update3;