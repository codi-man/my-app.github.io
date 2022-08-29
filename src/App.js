// import logo from './logo.svg';
// import About from './components/About';
import React, {useState} from 'react'
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
   BrowserRouter as Router,
   Routes,
   Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [text, settext] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  

  const toggleMood = () => {
    if(mode === 'light') {
      setMode('dark')
      settext('Enable Light Mode')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled","success")

    }
    else {
      setMode('light')
      settext('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")

    }
  }

return (
<>
{/* <Navbar title="TextUtils" aboutText="About" text={text} mode={mode} toggleMood={toggleMood}/> */}
<Navbar title="TextUtils" text={text} mode={mode} toggleMood={toggleMood}/>
  <Alert alert={alert}/>
<Router>
    <div className="container my-3">
    <Routes>
      {/* <Route exact path="/about" element={<About/>}>
      </Route> */}
      <Route exact path="/" element={<TextForm heading="Enter the text to analize" mode={mode} showAlert={showAlert}/>}>
      </Route>
    </Routes>
    </div>
</Router>
</>

  );
}

export default App;
