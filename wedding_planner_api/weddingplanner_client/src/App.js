import React, {Component} from 'react';
import Planners from './components/Planner/Planners'
import './App.css';
import FrontPage from './components/FrontPage/FrontPage';


function App(){
  return(
    <div className="App">
      
      <div className="topnav">
        <a className="active" href="/planner">Home</a>
        <a href="https://www.tripadvisor.com/Search?geo=60898&pid=3826&redirect=&startTime=&uiOrigin=&q=florist&supportedSearchTypes=find_near_stand_alone_query&enableNearPage=true&returnTo=__2F__&searchSessionId=F4C4C944BD5B265DEF2284464264209C1571497024945ssid&social_typeahead_2018_feature=true&sid=F4C4C944BD5B265DEF2284464264209C1571497082269&blockRedirect=true&ssrc=a" target="blank">Vendors</a>
        <a href="https://www.tripadvisor.com/Search?geo=60898&searchNearby=&pid=3826&redirect=&startTime=&uiOrigin=&q=wedding%20venues&supportedSearchTypes=find_near_stand_alone_query&enableNearPage=true&returnTo=__2F__&searchSessionId=F4C4C944BD5B265DEF2284464264209C1571497024945ssid&social_typeahead_2018_feature=true&sid=F4C4C944BD5B265DEF2284464264209C1571497040526&blockRedirect=true" target="blank">Venues</a>
        <a href="#joinus">Join Us</a>
        
        <div className="login-container">
          <form action="">
            <input type="text" placeholder="Username" name="username" />
            <input type="text" placeholder="Password" name="psw" />
            <button type="submit">Login</button>
          </form>
        </div>
        
      </div>
      <div className='introheaderbgimg'>
        <img src="https://lh3.googleusercontent.com/RhN_1tE_sfRcY2QI7eH8W9PelTi7kasoGZosT3__yLKbP0jwuyzpv76qSggVEXdncbbaPCqugn7RQEMsQjCpEwY70wefyKga6CN9WH9mr9tbqipqEr6VHtKDwZWq4jFJPIf-81GLug=w2400" alt="" />
        {/* <h1 className='introheader'>The Wedding Planner</h1> */}
      </div>
      
      <div className='aboutparagraph'>
        <h3><i>"Where weddings made easy"</i></h3>
        <p>
          Allow us to help you gather your thoughts and plan your perfect wedding. Our site allows you to search for venues and vendors based on your location. You can also create your guess list and chart your seating. 
        </p>
      </div>
      
      <div>
        <FrontPage />
      </div>

    </div>
  )
}



export default App;
