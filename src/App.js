import Detail from "./Component/Detail";
import { useState } from "react";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [btns, setbtns] = useState('Dark')
  const [alert, setAlert] = useState(null);
  const [colorValue, setColorValue] = useState("#563d7c");

  const handleOnChange = (event) => {
    setColorValue(event.target.value)
  }
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setbtns('light')
      document.body.style.backgroundColor = 'black';
      showAlert("Enable to Dark Mode", "success")
    }
    else {
      setMode('light');
      setbtns('Dark')
      document.body.style.backgroundColor = 'white';
      showAlert("Enable to Light Mode", "success")
    }
  }
  return (
    <>
   <Router>
      <Navbar title="TextUtile" mode={mode} btns={btns} toggleMode={toggleMode} colorValue={colorValue} handleOnChange={handleOnChange} />
      <Alert alert={alert} />
      <div className="container my-3">

        
          < Routes>
            <Route path="/about" element={<Detail />} />
            <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />

          </Routes>
        

      </div>
      </Router>
    </>
  );
}

export default App;
