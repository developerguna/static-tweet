import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './utill.css';
import  WithAuth  from './HOC/ConditionalComponent/WithAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import $ from 'jquery';
import Popper from 'popper.js'; */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './mobile-shopping-cart/index.js'
import ErrorBoundary from './errorBoundary';
import './ReactConsole/reactconsole.js'
import {Router,Switch,Route} from 'react-router-dom';
import createBrowseHistory from 'history/createBrowserHistory'
import Hooks from './Hooks/app';
import FetchRandomuser from './FetchRandomuser/app';
import Myprofile from './MyProfile/profile';
import Layout from './SideBar/sidebar';
import { HeaderNav } from './Header/app';
import Hexagonal from './HexaGona/hexagona';
import FooterNav from './Footer/app';
import Jokes from './UdemyCoursePortFolio/portfolio/Components/jokes';
import FirebaseApp from './firebaseComponents/App';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
const FirstPage = () =>
{
  
  return(
    <div className="FirstPage">
      
      <ErrorBoundary>
  
         <WithAuth/>
         
      </ErrorBoundary>
      
      
    </div>
    
    
  );
}

ReactDOM.render(
  <Provider store={store}>
  <Router history={createBrowseHistory()}>
    <Switch>
      <Route exact path='/' component={FirstPage}></Route>
<Route path="/userProfile" render={() => <div><FirebaseApp/><FooterNav/></div> }/>
      <Route path='/learningWidget' render={() => <HeaderNav><Hexagonal/><FooterNav/></HeaderNav>}/>
      <Route  path='/jokes' render={() => <HeaderNav><Jokes/><FooterNav/></HeaderNav>} />
      <Route  path='/hooks' render={() => <HeaderNav><Hooks/><FooterNav/></HeaderNav>}/>
      <Route  path='/fetchrandomuser' render={() => <HeaderNav><FetchRandomuser/><FooterNav/></HeaderNav>}/>
      <Route  path='/resume' render={() => <HeaderNav><Myprofile/><FooterNav/></HeaderNav>}/>
      <Route  path='/layout' render={() => <HeaderNav><Layout/><FooterNav/></HeaderNav>}/>
    </Switch>
    </Router></Provider>, 
  document.querySelector("#Page")); 

if (module.hot) {
  module.hot.accept();
}


