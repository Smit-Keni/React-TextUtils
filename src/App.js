
import './App.css';
import Navbar from './Components/Navbar';
import TextField from './Components/TextField';
import { useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';

// import {
   
//     BrowserRouter as Router,
    
//     Routes,
//     Route,
   
//   } from "react-router-dom";

function App() {

  

  const [mode,setMode] = useState('light')

  //const [btnText,setbtnText] = useState("Dark mode");

  const[textColor,settextColor] = useState("black");

  const [alert, setAlert] = useState(null);

  const toggleTheme=()=>{
        if(mode === 'light')
        {
            setMode("dark");
            //setbtnText("Light mode");
            document.body.style.backgroundColor = '#0e131a'
            settextColor("white")
            showAlert("Dark mode enbled","Success")
        }
        else
        {
            setMode("light");
            //setbtnText("Dark mode");
            document.body.style.backgroundColor = 'white'
            settextColor("black")
            showAlert("Light mode enabled","Success")
        }};
  
  // const [navCol,setNavcol] = useState("white")
  const [colorTheme, setcolorTheme] = useState("blue")
  //colorTheme

  // const navTheme=()=>{
  //   if(colorTheme==='Blue'){
  //     setNavcol("white")
  //   }
  //   else if(colorTheme==='Green')
  //   {
  //     setNavcol("#d9ffcc")
  //   }
  //   else
  //   {
  //     setNavcol("#f0d8d5")
  //   }

  // }
  const themeBlue=()=>{
    setcolorTheme("Blue")
    if(mode === 'light')
        {
            
            document.body.style.backgroundColor = '#91e4ff'
            
        }
        else
        {
            
            
            document.body.style.backgroundColor = '#0e131a'
            
        }
  }

  const themeRed=()=>{
    setcolorTheme("Red")
    if(mode === 'light')
        {
            
            document.body.style.backgroundColor = '#99423c'
            
        }
        else
        {
            
            
            document.body.style.backgroundColor = '#2e0300'
            
        }
  }

  const themeGreen=()=>{
    setcolorTheme("Green")
    if(mode === 'light')
        {
            
            document.body.style.backgroundColor = '#83bd5b'
            
        }
        else
        {
            
            
            document.body.style.backgroundColor = '#071a00'
            
        }
  }

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1000);
  }
  return (

  <>
   {/* <Router> */}
   <Navbar title="TextUtilsApp" item1="Home" item2="About" theme={mode} toggleTheme={toggleTheme} themeBlue={themeBlue} themeRed={themeRed} themeGreen={themeGreen}/> 
   <Alert alertContent={alert}/>
   {/* <Routes> */}
        {/* <Route index element={<div className='container my-5'><TextField heading="Enter your text" textcol={textColor} theme={mode} showAlert={showAlert}/></div>}/>
        <Route path='/Home' element={<div className='container my-5'><TextField heading="Enter your text" textcol={textColor} theme={mode} showAlert={showAlert}/></div>}/>
        <Route path='/About' element={<About/>}/>   */}
        
   
        <div className='container my-5'><TextField heading="Enter your text" textcol={textColor} theme={mode} showAlert={showAlert}/></div>
   {/* </Routes>
   </Router> */}
  </>
  );
}

export default App;
