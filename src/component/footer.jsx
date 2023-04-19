import React from "react";

function Footer() {
   return (
      <div>
         <hr />
         <div className='container-footer'>
            <div>
               <div className='footer-contents'>
                  <p>
                     <strong>hotcoffee</strong> 2020 copyright all right
                     reserved
                  </p>
                  <div className='footer-items'>
                     <img src='./src/assets/instagram.svg' alt='' />
                     <img src='./src/assets/twitter.svg' alt='' />
                     <img src='./src/assets/linkedin.svg' alt='' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
