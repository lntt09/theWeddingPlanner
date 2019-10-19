import React, {Component} from 'react';
import Planners from './components/Planner/Planners'
import './App.css';
import FrontPage from './components/FrontPage/FrontPage';


function App(){
  return(
    <div className="App">
      
      <div className="topnav">
        <a className="active" href="/planner">Home</a>
        <a href="https://www.tripadvisor.com/Search?geo=60898&pid=3826&redirect=&startTime=&uiOrigin=&q=florist&supportedSearchTypes=find_near_stand_alone_query&enableNearPage=true&returnTo=__2F__&searchSessionId=F4C4C944BD5B265DEF2284464264209C1571497024945ssid&social_typeahead_2018_feature=true&sid=F4C4C944BD5B265DEF2284464264209C1571497082269&blockRedirect=true&ssrc=a">Vendors</a>
        <a href="https://www.tripadvisor.com/Search?geo=60898&searchNearby=&pid=3826&redirect=&startTime=&uiOrigin=&q=wedding%20venues&supportedSearchTypes=find_near_stand_alone_query&enableNearPage=true&returnTo=__2F__&searchSessionId=F4C4C944BD5B265DEF2284464264209C1571497024945ssid&social_typeahead_2018_feature=true&sid=F4C4C944BD5B265DEF2284464264209C1571497040526&blockRedirect=true">Venues</a>
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
        <img src="https://lh3.googleusercontent.com/2yn98IhcW-lb77XuWzJ6_AI6GZ8tRtVYsDUedQqW2B2PIsZUxrCWeO34ZM8_WZEeJMbPHOHifqGh0rlVztLyqzteL-pS9El8V7uu8lcRoGz9NQwX1ZUQokH-AsMG2iP0Whdb7x8avQ=w2400" alt="" />
        {/* <h1 className='introheader'>The Wedding Planner</h1> */}
      </div>
      
      <div className='aboutparagraph'>
        <h3><i>"Where weddings made easy"</i></h3>
        <p>
          Allow us to help you gather your thoughts and plan your perfect wedding. Our site allows you to search for venues and vendors based on your location. You can also create your guess list and chart your seating. 
        </p>
      </div>
      {/* <div id="carousel">
          <figure><img src="https://lh3.googleusercontent.com/Ec3k2LSjC1kf9o3ylGVMdvZm1lxkoGZV8ZVDdcWFG-LOqLxjcfzD6NtibSAzI4ITOGrFkLPnvcSkArUO7o86WyGpOOqXiN47H7IDr1RE3KEa8BYTlFbpaantDMV_3g6zZRhlRtdYSQ=w2400" alt=""/></figure>

          <figure><img src="https://lh3.googleusercontent.com/c5bxffY4DfnqQb0pxrYcGVIJ2xJ84OF3xjHdUeSQXaQe-jDDNH6-JwJHMOdoR7gyn13lOKi9IvhTsLtJ9ZX9sHyDrMGXGAMfG0hd8nsfqHMu5lvus5qs45wbC66tqEOgla7zxFNjeg=w2400" alt=""/></figure>

          <figure><img src="https://lh3.googleusercontent.com/XjJZF-1rWJjmRqS1ubBlD3Cdpp13PmGpgvr-IhJ-8CwVvHiXTGcD8jn13ffpSfOPr7-VNcnRm85NL9Abtbdad6sBZYR36Ate0Vkua_FT3aMUAKOczY64lw9YxN_hz7Y6H8hJnrcgUQ=w2400" alt=""/></figure>

          <figure><img src="https://lh3.googleusercontent.com/gN9SyI90tyOhFeRK_F_tpMKFoEu5fa16M1duTm7mI3MZ0KBanmwHVGuFWDDGyofoofqw9vvYkGXPRgrkuoMxEn6O6QA9DkkT5oE4__xneygCRH1Ss1mkUV5ERl1uH0fJUBWaCnzehQ=w2400" alt=""/></figure>

          <figure><img src="https://lh3.googleusercontent.com/0QydGFs_KgTQyBFA1osrGCKGPj2Nca_XunTgo22_0hVcRm_kqe1I9d6dKkqn09EYGEjOvv9GNlJ_qIhXuWeb31zMV4PYgkDtuszkSI-d3gEkQDrrRaDI2XZdO_aVkqJiahjvGjo79A=w2400" alt=""/></figure>
          
      </div> */}

      <div>
        <FrontPage />
      </div>

    </div>
  )
}



export default App;
