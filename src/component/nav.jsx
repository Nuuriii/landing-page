import React from "react";

function Nav() {
   return (
      <div>
         <nav class='navbar'>
            <h1>HotCoffee</h1>
            <div class='nav-menu'>
               <p>Home</p>
               <p>Actives</p>
               <a href=''>
                  <img src='./src/assets/instagram.svg' alt='Instagram' />
               </a>
               <a href=''>
                  <img src='./src/assets/twitter.svg' alt='Instagram' />
               </a>
               <a href=''>
                  <img src='./src/assets/linkedin.svg' alt='Instagram' />
               </a>
            </div>
         </nav>
      </div>
   );
}

export default Nav;
