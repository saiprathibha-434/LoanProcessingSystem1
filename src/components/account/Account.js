import React from 'react';
import { Router,Route,Switch,Link } from 'react-router-dom';
import Accountdetails from '../accountdetails/Accountdetails';
import Contactdetails from '../contactdetails/Contactdetails';
import Logout from '../logout/Logout';
import Transactions from '../transactions/Transactions';
import Payloan from '../payloan/Payloan';
import Makeloan from '../makeloan/Makeloan';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
//gaurding
const isAuthenticated = true;
function Account() {
    let history=useHistory();
    const username=localStorage.getItem("userName")
    const password=localStorage.getItem("password")
console.log(username,password)
    return (
    
        <div>
       
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">Smart bank</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/accountDetails">Account Details</Link>
              <Link class="nav-link" to="/transcations">Transcations</Link>
              <Link class="nav-link" to="/makeloan">Makeloan</Link>
              <Link class="nav-link" to="/payloan">Payloan</Link>
              <Link class="nav-link" to="/applicationform">Applicationform</Link>
              <Link class="nav-link" to="/logout">Logout</Link>
              <Link class="nav-link" to="/transactions">Transactions</Link>
            </div>
          </div>
        </div>
      </nav>
    
    
     
    
  </div>
    </div>
    );
}

export default Account







































// import React from 'react';
// import { Router,Route,Switch,Link } from 'react-router-dom';
// import Accountdetails from '../accountdetails/Accountdetails';
// import Contactdetails from '../contactdetails/Contactdetails';
// import Help from '../help/Help';
// import FAQ from '../faq/FAQ';
// import Logout from '../logout/Logout';
// //import Transcations from '../transcations/Transcations';
// import Payloan from '../payloan/Payloan';
// import Makeloan from '../makeloan/Makeloan';
// import { Redirect } from 'react-router';
// import { useHistory } from 'react-router-dom';
// //gaurding
// const isAuthenticated = true;
// function Account() {
//     let history=useHistory();
//     return (
    
//         <div>
       
//         <div>
//         <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
//         <div class="container-fluid">
//           <Link class="navbar-brand" href="#">Smart bank</Link>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
//           data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
//           aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div class="navbar-nav">
//               <Link class="nav-link active" aria-current="page" to="/accountdetalis">Account Details</Link>
//               {/* <Link class="nav-link" to="/transcations">Transcations</Link> */}
//               <Link class="nav-link" to="/makeloan">Makeloan</Link>
//               <Link class="nav-link" to="/payloan">Payloan</Link>
//               <Link class="nav-link" to="/contactdetails">Contactdetails</Link>
//               <Link class="nav-link" to="/faq">Faq</Link>
//               <Link class="nav-link" to="/help">Help</Link>
//               <Link class="nav-link" to="/logout">Logout</Link>
//             </div>
//           </div>
//         </div>
//       </nav>
    
    
     
    
//   </div>
//     </div>
//     );
// }

// export default Account
























// import React from 'react'
// import { useHistory } from 'react-router-dom';
// export default function Account() {
//     let history=useHistory();
//     return (
//         <div>
//         <marquee><h1>Welcome to the bank</h1></marquee>
//             <h1>Account pages</h1>
//             <h1>for more benfits login to your account</h1>
//       <button type='submit' class="btn btn-primary" color='primary' variant="contained" 
//       onClick={() =>{ history.push('/Login');}} >Login</button>
//         </div>
//     )
// }




// import React from 'react';
// import { Router,Route,Switch,Link } from 'react-router-dom';
// import Accountdetails from '../accountdetails/Accountdetails';
// import Contactdetails from '../contactdetails/Contactdetails';
// import Help from '../help/Help';
// import FAQ from '../faq/FAQ';
// import Logout from '../logout/Logout';
// import Transcations from '../transcations/Transcations';
// import Payloan from '../payloan/Payloan';
// import Makeloan from '../makeloan/Makeloan';
// import { Redirect } from 'react-router';
// import { useHistory } from 'react-router-dom';
// //gaurding
// const isAuthenticated = true;
// function Account() {
//     let history=useHistory();
//     return (
    
//         <div>
//         <Router> 
//         <div>
//         <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
//         <div class="container-fluid">
//           <Link class="navbar-brand" href="#">Smart bank</Link>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
//           data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
//           aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div class="navbar-nav">
//               <Link class="nav-link active" aria-current="page" to="/accountdetalis">Account Details</Link>
//               <Link class="nav-link" to="/transcations">Transcations</Link>
//               <Link class="nav-link" to="/makeloan">Makeloan</Link>
//               <Link class="nav-link" to="/payloan">Payloan</Link>
//               <Link class="nav-link" to="/contactdetails">Contactdetails</Link>
//               <Link class="nav-link" to="/faq">Faq</Link>
//               <Link class="nav-link" to="/help">Help</Link>
//               <Link class="nav-link" to="/logout">Logout</Link>
//             </div>
//           </div>
//         </div>
//       </nav>
    
    
//       <Switch>
//         <Route path="/accountdetails" component={Accountdetails} />
//         Guarding Routes 
  
//         {isAuthenticated ?
        
//           <div>
//         <Route path="/transcations" component={Transcations} />
//         <Route path="/makeloan" component={Makeloan} />
//         <Route path="/payloan" component={Payloan} />
//         <Route exact path="/contactdetails" component={Contactdetails} />
//         <Route path="/faq" component={FAQ} />
//         <Route path="/help" component={Help} />
//         <Route path="/logout" component={Logout} />
//         </div>
//         :
//     <Redirect to="/home" />
    
//   }
  
//       </Switch>
//     </div>
//     </Router>
//     </div>
//     );
// }

// export default Account