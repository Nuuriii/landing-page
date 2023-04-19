import React from "react";

function Card() {
   return (
      <div className='card'>
         <div className='card-1'>
            <img src='./src/assets/image-2.png' alt='' />
            <div className='card-items'>
               <h3>long established</h3>
               <p className='p'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....
               </p>
               <div className='card-content'>
                  <p className='p'>May 20th 2020</p>
                  <p className='read-more'>Read more</p>
               </div>
            </div>
         </div>
         <div className='card-2'>
            <img src='./src/assets/image-3.png' alt='' />
            <div className='card-items'>
               <h3>long established</h3>
               <p className='p'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....
               </p>
               <div className='card-content'>
                  <p className='p'>May 20th 2020</p>
                  <p className='read-more'>Read more</p>
               </div>
            </div>
         </div>
         <div className='card-3'>
            <img src='./src/assets/image-4.png' alt='' />
            <div className='card-items'>
               <h3>long established</h3>
               <p className='p'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....
               </p>
               <div className='card-content'>
                  <p className='p'>May 20th 2020</p>
                  <p className='read-more'>Read more</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Card;
