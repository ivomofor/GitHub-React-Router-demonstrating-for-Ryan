import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav(){
  return(
    <>
      <div className="App">
        <nav>
          <ul className="nav-links">
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/about"}><li>About</li></Link>
            <Link to={"/Services"}><li>Services</li></Link>
            <Link to={"/contact"}><li>Contact</li></Link>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav;