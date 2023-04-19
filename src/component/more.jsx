import React from "react";

function More() {
   return (
      <div className='more-container'>
         <div className='more-items'>
            <a className='anchor' href='#'>
               <p>See more</p>
               <img src='./src/assets/arrow.svg' alt='icon' />
            </a>
         </div>
      </div>
   );
}

export default More;
