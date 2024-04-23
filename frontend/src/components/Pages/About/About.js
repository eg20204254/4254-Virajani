import React from 'react';
import classes from './about.module.css';

export default function About() {
  return (
    <div>
      <img src='/foods/Cart.jpg' alt="logo" align='right' height='300px'></img>
      <h1 className={classes.title}> What we provide?</h1>
      <p className={classes.para}> We are dedicated to providing you with a seamless and convenient 
      shopping experience, right from the comfort of your own home. 
      With a wide range of categories to choose from, including 
      vegetables, fruits, fish, and meat, we ensure that your kitchen is 
      always stocked with the freshest and highest quality produce</p>
      <h1 className={classes.title}>Why choose us?</h1>
      <p className={classes.para}>
      Choose us for an unique online grocery experience. We prioritize 
      quality, sourcing the finest produce and meats for your table. Our 
      user-friendly platform ensures seamless browsing through 
      categories, making your shopping hassle-free. Trust us to deliver 
      freshness and convenience, backed by a commitment to excellence.
      </p>

      <h1 className={classes.review}>REVIEWS</h1>

    </div>
  
    
  )
}
