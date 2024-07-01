import React,{useState} from 'react'
// import { Navigate } from 'react-router-dom';

export default function TextForm(props) {
    const [text, setText] = useState("");   // useState aik hook he jo k react me aya he or ye var ko use krne ka tarika he . is me first wala var hota he or dosre wala function or var ko directly change nhi kya ja sakta us k liye function use krna parta he. 

    const Uppercase=()=>{
     if(text.length===0){
      props.showAlert("Enter some text.","Failed")
     }
     else{
      console.log("You clicked on Uppercase button.")
     let newText=text.toUpperCase()
     setText(newText)
     props.showAlert("Converted to Upper Case.","Success")
     }
    }
    const Lowercase=()=>{
      if(text.length===0){
        props.showAlert("Enter some text.","Failed")
       }
       else{ console.log("You clicked on Uppercase button.")
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower Case.","Success")
       }
       }
       const ClearText=()=>{
        if(text.length===0){
          props.showAlert("Enter some text.","Failed")
         }
        else{let newText=""
        setText(newText)
        props.showAlert("Text has been Cleared.","Success")
        }
       } 
       const SentenceCounter=()=>{
        if(text.length===0){
          props.showAlert("Enter some text.","Failed")
         }
        else{let sentence=text.split(".").length-1;
        let newText="No of sentences is " + sentence
        setText(newText)
        }
       } 
       const CopyText=()=>{
        if(text.length===0){
          props.showAlert("Enter some text.","Failed")
         }
        else{
      
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied.","Success")
        }
       } 
       
       const ExtraSpaces=()=>{
        if(text.length===0){
          props.showAlert("Enter some text.","Failed")
         }
        else{let newText=text.split(/\s+/).join(" ").trim();
        setText(newText)
        props.showAlert("Extra spaces has been removed.","Success")
        }
       }  
    const Change=(event)=>{
        console.log("You change the text.")
        setText(event.target.value)
    }
    let count=0;
    const wordCount=(word)=>{
      let newWord1=word.replace(/\./g, "");
      let newWord2 = newWord1.split(/\s+/);
      for(let i=0;i<newWord2.length;i++){
        if (newWord2[i].trim() !== "") {
          count++;
        }
     
      }
      return count;
    }
  
  return (
    <>
    <div>
        <div className="container mb-3"><h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1></div>

<div className="container">
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor:document.body.style.backgroundColor , color:props.mode==='light'?'black':'white'}} onChange={Change} id="myBox" rows="8"></textarea>
</div>
<button  className="btn btn-primary mx-2 my-1"  onClick={Uppercase}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2 my-1" onClick={Lowercase}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2 my-1" onClick={ClearText}>Clear</button>
<button className="btn btn-primary mx-2 my-1" onClick={SentenceCounter}>Sentence Counter</button>
<button className="btn btn-primary mx-2 my-1" onClick={CopyText}>Copy Text</button>
<button className="btn btn-primary mx-2 my-1" onClick={ExtraSpaces}>Remove Extra Spaces</button>
    
</div>
</div>

<div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h2>Text Summary</h2>
    <p>{wordCount(text)} words and {text.length} characters .</p>
    <p>It take {0.008*text.split(" ").length} minutes to read.</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
</div>

</>
  )
}