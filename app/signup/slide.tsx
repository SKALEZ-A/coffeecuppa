 "use client";
 import { Slide } from 'react-slideshow-image';
 import 'react-slideshow-image/dist/styles.css';
 import styles from './Slideshow.module.css';
 
 const images = [
   '/images/secure-payment.png',
   '/images/global-reach.png',
   '/images/nft-member.png',
 ];
 
 const Slideshow = () => {
   return (
     <div className={styles.slideshowContainer}>
       <Slide
         slidesToShow={1}
         indicators={true}
         arrows={true}
         easing="ease"
         cssClass={styles.slideshow}
         transitionDuration={1000}
       >
         {images.map((image, index) => (
           <div className={styles.eachSlide} key={index}>
             <div className={styles.imageWrapper}>
               <img
                 src={images[(index - 1 + images.length) % images.length]}
                 className={styles.sideImage}
                 alt={`Side image ${index}`}
               />
               <img
                 src={image}
                 className={styles.mainImage}
                 alt={`Main image ${index}`}
               />
               <img
                 src={images[(index + 1) % images.length]}
                 className={styles.sideImage}
                 alt={`Side image ${index}`}
               />
             </div>
           </div>
         ))}
       </Slide>
     </div>
   );
 };
 
 export default Slideshow;
 