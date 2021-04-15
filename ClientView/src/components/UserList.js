import React, {useState} from 'react';

import './userlist1.css'
import image from '../components/images/pic1.jpg'
import InternHeader from '../components/Header/update2'
import Footer from './footer1'

function UserList(props) {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('UserData')));


    return (
        <div>
             <InternHeader/>
             <div class="userlistbanner">
       

       
            <div class="container">
                <h2 style={{marginBottom:'40px',textAlign:'center', marginTop:'40px',color:"#106695"}}>{data.length} Results found..</h2>
                <div>
                {data && data.map(item =>
 
 
//  <div class="product">
//     <div>
//       <img src={image} />
//     </div>
//     <div class="product-info">
//       <div class="product-content">
//         <h5>{item.firstname}</h5>
//         <ul>
//           <span><p> {item.email}</p></span>
//          <p>{item.phone}</p> 
//          <p> {item.location}</p>



//          <div class="buttons">
             
//              <button type="button" class="btn btn-primary btn-sm">Send message</button>
//              </div>
//         </ul>

   
//       </div>
//     </div>
//       </div> 


// <div class="about-page">
// 	<div class="container">
// 		<div class="row">
// 			<div class="col-md-offset-4 col-md-8 ml-auto mr-auto">
// 				<div class="card-profile">
// 					<div class="media">
//           <img src={image} />
// 						  <div class="media-body">
//               <h5>{item.firstname}</h5>
// 							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
// 						  </div>
// 					  </div>
// 				</div>
// 				<div class="card-profile">
// 					<div class="media">
						  
// 						  <div class="media-body">
							
//               <ul>
//           <span><p> {item.email}</p></span>
//          <p>{item.phone}</p> 
//         <p> {item.location}</p>



//           <div class="buttons">
             
//              <button type="button" class="btn btn-primary btn-sm">Send message</button>
//               </div>
//        </ul>

						  
// 					  </div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>


<div class="about-page">
	<div class="container">
		<div class="row">
			<div class="col-md-offset-4 col-md-8 ml-auto mr-auto">
				<div class="card-profile">
					<div class="media">
          <img src={image} />
						  <div class="media-body">
              <ul>
              <h5 >{item.firstname}</h5>
						
             
         <span><p class="text-black"> {item.email}</p></span>
          <p class="text-black">{item.phone}</p> 
          <p class="text-black"> {item.location}</p>



         <div class="buttons">
             
              <button type="button" class="btn btn-primary btn-sm">Send message</button>
              </div>
         </ul>
             
             
             
             
             
             
             
             
              </div>
					  </div>
				</div>
			
			</div>
		</div>
	</div>
</div>











      
                )} 
     
             
      </div> 
    
</div>
</div>
<Footer/>
</div>
    );
}

export default UserList;