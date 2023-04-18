import React from "react";

function Hero() {
   return (
      <div>
         <section class='hero-container'>
            <div class='hero-items1'>
               <div>
                  <h1>Make better coffe</h1>
                  <div className='learn'>
                     <p>why learn how to blog </p>
                     <img src='./src/assets/coffe.svg' alt='' />
                  </div>
               </div>
            </div>
            <div class='hero-items2'>
               <img
                  src='./src/assets/hero.svg'
                  alt=''
                  height='350'
                  width='600'
               />
            </div>
         </section>
      </div>
   );
}

export default Hero;
