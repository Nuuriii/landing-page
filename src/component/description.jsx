import React from "react";

function Description() {
   return (
      <div className='description'>
         <div className='description-items1'>
            <h3>long established</h3>
            <p className='p'>
               It is a long established fact that a reader will be distracted by
               the readable content of a page when looking at its layout. The
               point of using Lorem Ipsum is that....
            </p>
            <div className='items-content1'>
               <p className='p'>May 20th 2020</p>
               <p className='read-more'>Read More</p>
            </div>
         </div>
         <img className='img' src='./src/assets/image-1.png' alt='' />
      </div>
   );
}

export default Description;
