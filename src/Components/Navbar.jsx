import React, {useState} from 'react'

import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className="navbar">
         <ul className="nav-menu">
            <ul onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</ul>
            <li>
              <AnchorLink className='anchor-link' offset={50} href='#about'onClick={() => setMenu("about")}>About</AnchorLink>
            </li>
            <ul onClick={()=>setMenu("portfolio")} className={menu==="portfolio"?"active":""}>Portfolio</ul>
            <li>
           <AnchorLink className='anchor-link' offset={50} href='#contact'onClick={() => setMenu("contact")}>Contact</AnchorLink>
            </li>
         </ul>
         <div><AnchorLink className="nav-connect" href='#contact'onClick={() => setMenu("contact")}>Connect with me</AnchorLink></div>
         
   </div>
  );
}

export default Navbar
