import './App.css';
import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { Table,TableCell,TableRow } from '@material-ui/core';
import {Pie} from 'react-chartjs-2';
import {BrowserRouter as Router,Route,Link,Switch, Redirect}from 'react-router-dom';
import Home from './components/home/Home';
import Admin from './components/admin/Admin';
import ContactUs from './components/contactUs/ContactUs';
import AboutUs from './components/aboutUs/AboutUs';
import Login from './components/login/Login';
import News from './components/news/News';
import Services from './components/services/Services';
import FAQ from './components/faq/FAQ';
import Help from './components/help/Help';
import Signin from './components/signin/Signin';
import Account from './components/account/Account';
import Transactions from './components/transactions/Transactions';
import Makeloan from './components/makeloan/Makeloan';
import Payloan from './components/payloan/Payloan';
import Contactdetails from './components/contactdetails/Contactdetails';
import Logout from './components/logout/Logout';
import Application from './components/applicationform/Application';
import Appemi from './components/calculator/Appemi';
import Header from './components/header';
import Accountdetails from './components/accountdetails/Accountdetails';
import SliderMarks from './components/calculator/SliderMarks';

//import CustomerListComponent from './components/CustomerListComponent';
//import CreateCustomerComponent from './components/CreateCustomerComponent';
//import ViewCustomerComponent from './components/ViewCustomerComponent';








var name='prathibha';
//gaurding
const isAuthenticated = true;
function App() {
  return (
        <Router>
       <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary"> 
    <div class="container-fluid">
      <Link class="navbar-brand" href="#">Loan Process</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
          <Link class="nav-link" to="/news">News</Link>
          <Link class="nav-link" to="/aboutUs">AboutUs</Link>
          <Link class="nav-link" to="/services">Services</Link>
          <Link class="nav-link" to="/contactUs">ContactUs</Link>
          <Link class="nav-link" to="/faq">Faq</Link>
          <Link class="nav-link" to="/help">Help</Link>
          <Link class="nav-link" to="/signin">Signin</Link>
          <Link class="nav-link" to="/calculator">Calculator</Link>
          
        </div>
      </div>
    </div>
  </nav> 


  <Switch>
  
  <Route exact path="/home" component={Home} />
   Guarding Routes 
  
  {isAuthenticated ?
  
    <div>
    <Route path="/contactUs" component={ContactUs} />
    <Route path="/aboutUs" component={AboutUs} />
    <Route path="/services" component={Services} />
    <Route path="/news" component={News} />
    <Route path="/login" component={Login} />
    <Route path="/admin" component={Admin} />
    <Route path="/faq" component={FAQ} />
    <Route path="/help" component={Help} />
    <Route path="/signin" component={Signin} />
    <Route path="/account" component={Account} />
    <Route path="/transactions" component={Transactions} />
    <Route path="/makeloan" component={Makeloan} />
    <Route path="/payloan" component={Payloan} />
    <Route path="/accountdetails" component={Accountdetails} />
    <Route path="/contactdetails" component={Contactdetails} />
    <Route path="/faq" component={FAQ} />
    <Route path="/help" component={Help} />
    <Route path="/logout" component={Logout} />
    <Route path="/applicationform" component={Application} />
    <Route path="/calculator" component={Appemi} />

  </div>
  :
    <Redirect to="/home" />
    
  }
  
  </Switch>
</div>
</Router>
   
  );
}

export default App;














// import './App.css';
// import {BrowserRouter as Router,Route,Link,Switch, Redirect}from 'react-router-dom';
// import Home from './components/home/Home';
// import ContactUs from './components/contactUs/ContactUs';
// import AboutUs from './components/aboutUs/AboutUs';
// import Login from './components/login/Login';
// import News from './components/news/News';
// import Services from './components/services/Services';
// import Signin from './components/signin/Signin';
// import Account from './components/account/Account';
// import Transactions from './components/transactions/Transactions';
// import Makeloan from './components/makeloan/Makeloan';
// import Payloan from './components/payloan/Payloan';
// import Contactdetails from './components/contactdetails/Contactdetails';
// import Logout from './components/logout/Logout';
// import Application from './components/applicationform/Application';
// import Header from './components/header';
// import Accountdetails from './components/accountdetails/Accountdetails';
// import  Admin from './components/admin/Admin';
// var name='Sai prathibha';
// const isAuthenticated = true;
// function App() {
//   return (
//     <Router>
   
//     <div className="App">
//   <Switch>
  
//   <Route exact path="/home" component={Home} />
//    Guarding Routes 
  
//   {isAuthenticated ?
  
//     <div>
//     <Route path="/contactUs" component={ContactUs} />
//     {/* <Route path="/about" component={About} /> */}
//     <Route path="/services" component={Services} />
//     <Route path="/news" component={News} />
//     <Route path="/login" component={Login} />
//     <Route path="/aboutUs" component={AboutUs} />
//     <Route path="/signin" component={Signin} />
//     <Route path="/account" component={Account} />
//     <Route path="/transactions" component={Transactions} />
//     <Route path="/makeloan" component={Makeloan} />
//     <Route path="/payloan" component={Payloan} />
//     <Route path="/contactdetails" component={Contactdetails} />
//     <Route path="/logout" component={Logout} />
//     <Route path="/accountdetails" component={Accountdetails} />  
//     <Route path="/applicationform" component={Application} />
//     <Route path="/Admin" component={Admin} />
//   </div>
//   :
//     <Redirect to="/home" />
    
//   }
  
//   </Switch>
// </div>
// </Router>
   
//   );
// }

// export default App;























































































// import './App.css';
// import {BrowserRouter as Router,Route,Link,Switch, Redirect}from 'react-router-dom';
// import Home from './components/home/Home';
// import ContactUs from './components/contactUs/ContactUs';
// import AboutUs from './components/aboutUs/AboutUs';
// import Login from './components/login/Login';
// import News from './components/news/News';
// import Services from './components/services/Services';
// import Signin from './components/signin/Signin';
// import Account from './components/account/Account';
// import Transactions from './components/transactions/Transactions';
// import Makeloan from './components/makeloan/Makeloan';
// import Payloan from './components/payloan/Payloan';
// import Contactdetails from './components/contactdetails/Contactdetails';
// import Logout from './components/logout/Logout';
// import Application from './components/applicationform/Application';
// import Header from './components/header';
// import Accountdetails from './components/accountdetails/Accountdetails';
// import  Admin from './components/admin/Admin';
// var name='Sai prathibha';
// const isAuthenticated = true;
// function App() {
//   return (
//     <Router>
   
//     <div className="App">
//   <Switch>
  
//   <Route exact path="/home" component={Home} />
//    Guarding Routes 
  
//   {isAuthenticated ?
  
//     <div>
//     <Route path="/contactUs" component={ContactUs} />
//     {/* <Route path="/about" component={About} /> */}
//     <Route path="/services" component={Services} />
//     <Route path="/news" component={News} />
//     <Route path="/login" component={Login} />
//     <Route path="/aboutUs" component={AboutUs} />
//     <Route path="/signin" component={Signin} />
//     <Route path="/account" component={Account} />
//     <Route path="/transactions" component={Transactions} />
//     <Route path="/makeloan" component={Makeloan} />
//     <Route path="/payloan" component={Payloan} />
//     <Route path="/contactdetails" component={Contactdetails} />
//     <Route path="/logout" component={Logout} />
//     <Route path="/accountdetails" component={Accountdetails} />  
//     <Route path="/applicationform" component={Application} />
//     <Route path="/Admin" component={Admin} />
//   </div>
//   :
//     <Redirect to="/home" />
    
//   }
  
//   </Switch>
// </div>
// </Router>
   
//   );
// }

// export default App;



























































































































































































// //import logo from './logo.svg';
// import './App.css';
// import{ BrowserRouter as Router,Route,Link} from 'react-router-dom';
// import Home from './components/home/Home';
// import ContactUs from './components/contactUs/ContactUs';
// import AboutUs from './components/aboutUs/AboutUs';
// import Login from './components/login/Login';
// //import React,{useState} from 'react';
// // import Login from './login/Login';
// import {Switch} from 'react-router';
// //import Transcations from './components/transactions/Transactions';
// import Payloan from './components/payloan/Payloan';
// import Services from './components/services/Services';
// //import User from './components/modules/User';
// import News from './components/news/News';
// //import Services from './components/services/Services';
// import Account from './components/account/Account';
// import Accountdetails from './components/accountdetails/Accountdetails';
// import Contactdetails from './components/contactdetails/Contactdetails';
// import Emi from './components/emicalculator/Emi'
// import FAQ from './components/faq/FAQ';
// import Help from './components/help/Help';
// import Logout from './components/logout/Logout';
// import Makeloan from './components/makeloan/Makeloan';
// import Signin from './components/signin/Signin';
  

// //  var name='prathibha'

// // const isAuthenticated=true;

// function App1(){
//   return (
//     <Router>
//     <div className="App">
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <Link class="navbar-brand" href="#">Loan Processing</Link>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <Link class="nav-link" to="/">Home <span class="sr-only"></span></Link>
//       </li>
//       <li class="nav-item">
//       <li><Link class="nav-link" to="/contactus">Contactus</Link></li>
//       </li>
//       <li class="nav-item">
//       <li><Link class="nav-link" to="/login">Login</Link></li>
//       </li>
//       <li class="nav-item">
//       <li><Link class="nav-link" to="/aboutUs">AboutUs</Link></li>
//       </li>
//       <li class="nav-item">
//       <li><Link class="nav-link" to="/account">Account</Link></li>
//        </li>
//        <li class="nav-item">
//       <li><Link class="nav-link" to="/accountdetails">Accountdetails</Link></li>
//        </li>
//        <li class="nav-item">
//       <li><Link class="nav-link" to="/emicalculator">Emicalculator</Link></li>
//        </li>
//        <li class="nav-item">
//       <li><Link class="nav-link" to="/faq">FAQ</Link></li>
//        </li>
//        <li class="nav-item">
//       <li><Link class="nav-link" to="/help">Help</Link></li>
//        </li>
//        <li class="nav-item">
//       <li><Link class="nav-link" to="/logout">Logout</Link></li>
//        </li>
//        <li class="nav-item">
//       <li><Link class="nav-link" to="/makeloan">Makeloan</Link></li>
//        </li>
//        <li class="nav-item">
//       <li><Link class="nav-link" to="/modules">Modules</Link></li>
//        </li>
//        <li class="nav-item">
//       <li><Link class="nav-link" to="/news">News</Link></li>
//        </li>
//        <li class="nav-item">
//       <li><Link class="nav-link" to="/payloan">Payloan</Link></li>
//        </li>
//        <li class="nav-item">
//       <li><Link class="nav-link" to="/routes">Routes</Link></li>
//        </li>
//        <li class="nav-item">
//       <li><Link class="nav-link" to="/sevices">Services</Link></li>
//        </li>
//        <li class="nav-item">
//       <li><Link class="nav-link" to="/signin">Signin</Link></li>
//        </li>
//        {/* <li class="nav-item">
//       <li><Link class="nav-link" to="/transactions">Transcations</Link></li>
//        </li> */}
//       </ul>
//       </div>
//       </nav>
//       {/* <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul> */}

//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route  path="/contactUs" component={ContactUs}/>
//         <Route  path="/aboutUs" component={AboutUs}/>
//         <Route  path="/login" component={Login}/>
//         <Route  path="/account" component={Account}/>
//         <Route  path="/contactdetails" component={Contactdetails}/>
//         <Route  path="/accountdetails" component={Accountdetails}/>
//         <Route  path="/emicalculator" component={Emi}/>
//         <Route  path="/faq" component={FAQ}/>
//         <Route  path="/help" component={Help}/>
//         <Route  path="/logout" component={Logout}/>
//         <Route  path="/makeloan" component={Makeloan}/>
//         {/* <Route  path="/modules" component={Loan}/> */}
//         {/* <Route  path="/modules" component={User}/> */}
//         <Route  path="/news" component={News}/>
//         <Route  path="/payloan" component={Payloan}/>
//         {/* <Route  path="/routes" component={Loan}/> */}
//         <Route  path="/services" component={Services}/>
//         <Route  path="/signin" component={Signin}/>
//         {/* <Route  path="/transactions" component={Transcations}/> */}
//         {/* <Route  path="/routes" component={Index}/>
//         <Route  path="/routes" component={User}/> */}
//       </Switch>
    
//     </div>
//     </Router>
//   );
//      }
//       export default App1;




// // import logo from './logo.svg';
// // import './App.css';
// // import ReactUpdate from './components/lifecyclehooks/updatingphase/ReactUpdate';
// // //import Trip from './components/conditionalRendering/Trip';
// //  //import Mounting from './components/lifecyclehooks/mountingphase/Mounting';
// // // import BoxContainer from './components/lifecyclehooks/unmountingphase/BoxContainer';
// //  import Hero from './components/errorboundaries/Hero';
// // import ErrorBoundary from './components/errorboundaries/ErrorBoundary';
// //  import NumberList from './components/list&keys/NumberList';
// //  import Forms from './components/reactforms/Forms';

// //  const numLists = ['1','2','3','4','5','6'];

// // function App(){
// //   return(
// //     <div className="APP">
// //       {/* <Mounting favSubject="vue JS"/>
// //       <Mounting/> */}
// //       {/* <ReactUpdate  /> */}
// //       {/* <BoxContainer/> */}
// //        <NumberList numberItems={numLists}/>
// //        {/* <Forms/> */}

// //       <ErrorBoundary>
// //       <Hero heroNmae="spiderman"/>
// //       </ErrorBoundary>

// //       <ErrorBoundary>
// //       <Hero heroName="Batman"/>
// //       </ErrorBoundary>

// //       <ErrorBoundary>
// //       <Hero heroName="joker"/>
// //       </ErrorBoundary>
// //     </div>
// //   );
// // }
// // export default App;



// // function App(){
// //   return(
// //     <div className="App">
// //       <Trip season="summer"/>
// //     </div>
// //   );
// // }
// // export default App;


































































































// const adminUser = {
//   email: "sona@gmail.com",
//   password: "sonatina"
// }
// const [user, setUser] = useState({ name: "", email: "" });
// const [error, setError] = useState(" ");

// const Login1 = details => {
//   console.log(details);

//   if (details.email == adminUser.email && details.password == adminUser.password) {
//     console.log("Logged in");
//     setUser({
//       name: details.name,
//       email: details.email
//     });
//   } else {
//     console.log("Details do not match");
//       setError("Details do not match");
//   }
// }
// const Logout = () => {
//   setUser({ name: "", email: "" });
// }
//  return (
//   <div className="App">
//     {(user.email !== "") ? (
//       <div className="welcome">
//         <h2>Welcome, <span>{user.name}</span></h2>
//         <button onClick={Logout}>Logout</button>
//       </div>
//     ) : (
//       <Login Login1={Login} error={error} />
//     )}

//   </div>
// );
// }
//export default App;

// function App() {
//   return (
//         <Router>
//           <div className="App">
//             {/* <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//               <li><Link to="/about">About</Link></li>
//               <li><Link to="/login">Login</Link></li>
//             </ul> */}
              

// {/* nav bar */}
//   <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <Link class="navbar-brand" to="#">EMS</Link>
//   {/* </nav><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> */}
//       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//       <link class="nav-link" to="/">Home <span class="sr-only">(current)</span></link>
//       </li>
//       <li class="nav-item">
//       <li><link class="nav-link" to="/contact">Contact</link></li>
//       </li>
//       <li class="nav-item">
//       <li><link class="nav-link" to="/about">About</link></li>
//       </li>
//       <li class="nav-item">
//         {/* //<li><link class="nav-link " to={`/login/${name}`}>Login</link></li> */}
//             <li><Link class="nav-link" to="/login">Login</Link></li>
//       </li>
//     </ul>
//   </div>
// </nav>

//             <Switch>
//             <Route exact path="/" component={Home}/>

//             isAuthenticated ?
//             <div>
//             <Route path="/contact" component={Contact}/>
//             <Route path="/about" component={About}/>
//             <Route path="/login" component={Login}/>
//             </div>
//             {
//              <Redirect to ="/"/> }
//              </Switch>
//           </div> 
//         </Router>
//         );
//       }

    //export default App;




























































//     import logo from './logo.svg';
//     import './App.css';
// import Contactdetails from './components/contactdetails/Contactdetails';
// import Account from './components/account/Account';
// import Accountdetails from './components/accountdetails/Accountdetails';
// import FAQ from './components/faq/FAQ';
// import Help from './components/help/Help';
// import Logout from './components/logout/Logout';
// import Makeloan from './components/makeloan/Makeloan';
// import Loan from './components/modules/Loan';
// import User from './components/modules/User';
// import News from './components/news/News';
// import Payloan from './components/payloan/Payloan';
// import Services from './components/services/Services';
// import Transcations from './components/transactions/Transactions';
    
//     function App() {
//       return (
//         <div className="App">
//          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div class="container-fluid">
//         <a class="navbar-brand" href="#">Navbar</a>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNav">
//           <ul class="navbar-nav">
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">Features</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">Pricing</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//     <Loan/>
//     <User/>
//         </div>
    
        
//       );
      
//     }
    
//     export default App;