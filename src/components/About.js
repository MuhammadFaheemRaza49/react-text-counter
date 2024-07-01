import React,{useState} from 'react'
import './About.css'


export default function About(props) {
    const [myStyle, setmyStyle] = useState({
        color:"Black" ,
        backgroundColor:"White"
    });
    
    const [MyBtn, setMyBtn] = useState("Enable Dark Mode")

    const ChangeColor=()=>{
        if(myStyle.color==="Black"){
            setmyStyle({
        color:"White" ,
        backgroundColor:"Black"
            })
            setMyBtn("Enable Light Mode");
        }
        else{
            setmyStyle({
                color:"Black" ,
                backgroundColor:"White"
                    })
            setMyBtn("Enable Dark Mode")  ;      
                }
    }
  return (
     <>
    <div className="container" style={{ color:props.mode==='light'?'dark':'white'}}>
      <h1 style={{color:props.mode==='light'?'black':'white'}}>About Us</h1>
    </div>
    <div className='container ' style={{backgroundColor:document.body.style.backgroundColor , color:props.mode==='light'?'black':'white'}}>
   
        <div className="row" >
          <div className="col"><p>  A text counter application efficiently tracks the number of words, characters, and other metrics in a given text. This tool is essential for writers, editors, and professionals who need to ensure their content meets specific length requirements, enhancing productivity and accuracy in various writing tasks. </p> </div>
          <div className="col"> </div>
        </div>
    </div>
    </>
  )
}