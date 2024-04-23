import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Categories from './components/Pages/Categories/Categories';
import Fish from './components/Pages/Categories/Fish';
import Vegetables from './components/Pages/Categories/Vegetables';
import Fruits from './components/Pages/Categories/Fruits';
import Meat from './components/Pages/Categories/Meat';
import FoodPage from './components/Pages/Food/FoodPage';
import Contact from './components/Pages/Contact/Contact';
import Orders from './components/Pages/Orders/Orders';
import CartPage from './components/Pages/Cart/CartPage';
import LoginPage from './components/Pages/Login/LoginPage'





export default function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/about" element={<About/>} /> 
      <Route exact path='/categories' element={<Categories/>} />
      <Route exact path='/food/Fish' element={<Fish/>} />
      <Route exact path='/food/Vegetables' element={<Vegetables/>} />
      <Route exact path='/food/Fruits' element={<Fruits/>} />
      <Route exact path='/food/Meat' element={<Meat/>} />
      <Route exact path='/food/:id' element={<FoodPage/>} />
      <Route exact path="/search/:searchTerm" element={<Categories/>} />
      <Route exact path='/cart' element={<CartPage/>}/>
      <Route exact path='/login' element={<LoginPage/>}/>
      

      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/orders' element={<Orders/>}/>



    </Routes>

  
    
  );
}
