import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { useState } from 'react'
import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); //state var that tells whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  useEffect(() => {
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    document.body.style.backgroundColor = mode === 'dark' ? '#0d1117' : 'white';
    document.body.style.color = mode === 'dark' ? 'white' : 'black';
  }, [mode]);



  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    if (mode === 'light') {
      // showAlert("Dark Mode has been Enabled", "success");
      document.title = 'Textutils- Dark Mode'
      // setInterval(() => { 
      //   document.title='Textutils is Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Textutils boom'
      // }, 1500);

    } else {
      // showAlert("Light Mode has been Enabled", "success");
      document.title = 'Textutils- Light Mode'
    }
  };

  // const toggleMode =()=>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#0d1017';
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     style = { transition: 'background-color 0.3s ease, color 0.3s ease' }
  //   }
  // }

  return (
    <>
      {/* <Navbar/> */}
      <Navbar title="TestUtils" aboutText="About TestUtils" mode={mode} toggleMode={toggleMode} showAlert={showAlert} setMode={setMode} />

      <Alert alert={alert} />

      <Router>


        <div className="container my-3">
          <Routes>
            {/* /users --> Component 1
        /users/home --> Component 2 */}
     
              <Route path="/about" element={<About mode={mode} />} />
              <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils..." mode={mode} />} />
          
          </Routes>

        </div>

      </Router>

      {/* <About /> */}
    </>
  );
}

export default App;
