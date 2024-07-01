import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Alert from './components/Alert';



function App() {
    const [mode,setMode]=useState('light');
    const [name,setName]=useState('Enable Dark Mode.');
    const [alert,setAlert]=useState(null);

    const showAlert=(message,type)=>{
      setAlert({
         msg:message,
         type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
    

    const toggleMode= () =>{
         if(mode==='light'){
          setMode('dark');
          setName("Enable Light Mode.")
          document.body.style.backgroundColor='#042743';
          showAlert("Dark Mode has been enabled","Success")
          document.title='Text Updater-Dark Mode';
         }
         else{
          setMode('light');
          setName("Enable Dark Mode.")
          document.body.style.backgroundColor='white';
          showAlert("Light Mode has been enabled","Success")
          document.title='Text Updater-Light Mode';
         }

        //  setInterval(() => {             this is just to test how to make shiny title.
        //   document.title='Update your app.'
        //  }, 2000);

        //  setInterval(() => {
        //   document.title='This is Amazing.'
        //  }, 1500);
    }

    const MatteMode=()=>{
       if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#28282B';
        document.body.style.Color='white';
        setName("Enable Light Mode.")
        showAlert("Matte Mode has been enabled","Success")
        document.title='Text Updater-Matte Mode';
        
       }
       else{
        setMode('dark');
        document.body.style.backgroundColor='#28282B';
        document.body.style.Color='white';
        setName("Enable Light Mode.");
        showAlert("Matte Mode has been enabled","Success")
        document.title='Text Updater-Matte Mode';
       }
    }

 

    

    
  
// exact path use krne se react exact path pr jata nhi to agr naam same ho jain or exact path na use kya ho to masla hota he
  return (
   <>
  <Router>
        <Navbar title="Text Updater" mode={mode} name={name} toggleMode={toggleMode} MatteMode={MatteMode}/>
       
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm heading="Enter Text to Analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
          {/* <TextForm heading="Try Text-Updater" mode={mode} showAlert={showAlert} /> */}
        </div>
    
        </Router>

   </>
  );
}

export default App;
