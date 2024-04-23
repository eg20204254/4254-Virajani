import React from 'react';
import AppRoutes from "./AppRoutes";
//import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

/*<div style={{ minHeight: "600px",color: "green", }}>
            <Footer/>
       </div>*/


function App() {
  return( 
    <>
    <Header/>  
    <AppRoutes/>           
    </>

    
  );
}

export default App;
