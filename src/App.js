import React from "react";
import Header from "./Header";
import Home from "./pages/Home";



function App () {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
  }
  return (
      <div>
          <Header /> 
          {component}
          
      </div>
  )
}

export default App

