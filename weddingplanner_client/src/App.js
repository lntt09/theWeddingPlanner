import React, {Component} from 'react';
import Planners from './components/Planner/Planners'
import './App.css';


function App(){
  return(
    <div className="App">
      
      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div class="login-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Username" name="username" />
            <input type="text" placeholder="Password" name="psw" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>

      <h1 className='introheader'>The Wedding Planner</h1>
      <h3><i>"Where weddings made easy"</i></h3>
      <div className='aboutparagraph'>
        <p>
          Allow us to help you gather your thoughts and plan your perfect wedding. Our site allows you to search for venues and vendors based on your location. You can also create your guess list and chart your seating. 
        </p>
      </div>
      <div id="carousel">
          <figure><img src="https://lh3.googleusercontent.com/Ec3k2LSjC1kf9o3ylGVMdvZm1lxkoGZV8ZVDdcWFG-LOqLxjcfzD6NtibSAzI4ITOGrFkLPnvcSkArUO7o86WyGpOOqXiN47H7IDr1RE3KEa8BYTlFbpaantDMV_3g6zZRhlRtdYSQ=w2400" alt=""/></figure>

          <figure><img src="https://lh3.googleusercontent.com/c5bxffY4DfnqQb0pxrYcGVIJ2xJ84OF3xjHdUeSQXaQe-jDDNH6-JwJHMOdoR7gyn13lOKi9IvhTsLtJ9ZX9sHyDrMGXGAMfG0hd8nsfqHMu5lvus5qs45wbC66tqEOgla7zxFNjeg=w2400" alt=""/></figure>

          <figure><img src="https://lh3.googleusercontent.com/XjJZF-1rWJjmRqS1ubBlD3Cdpp13PmGpgvr-IhJ-8CwVvHiXTGcD8jn13ffpSfOPr7-VNcnRm85NL9Abtbdad6sBZYR36Ate0Vkua_FT3aMUAKOczY64lw9YxN_hz7Y6H8hJnrcgUQ=w2400" alt=""/></figure>

          <figure><img src="https://lh3.googleusercontent.com/gN9SyI90tyOhFeRK_F_tpMKFoEu5fa16M1duTm7mI3MZ0KBanmwHVGuFWDDGyofoofqw9vvYkGXPRgrkuoMxEn6O6QA9DkkT5oE4__xneygCRH1Ss1mkUV5ERl1uH0fJUBWaCnzehQ=w2400" alt=""/></figure>

          <figure><img src="https://lh3.googleusercontent.com/0QydGFs_KgTQyBFA1osrGCKGPj2Nca_XunTgo22_0hVcRm_kqe1I9d6dKkqn09EYGEjOvv9GNlJ_qIhXuWeb31zMV4PYgkDtuszkSI-d3gEkQDrrRaDI2XZdO_aVkqJiahjvGjo79A=w2400" alt=""/></figure>
          
      </div>
      <div>
        <Planners />
      </div>
      
    </div>
  )
}



export default App;
