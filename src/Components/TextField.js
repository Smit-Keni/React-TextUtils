import React,{useState} from 'react'

export default function TextField(props) {
    const [text,setText] = useState("Enter some text");

    const toUpper=()=>{
        console.log("Converted to UpperCase");
        let upper=text.toUpperCase();
        setText(upper)
        props.showAlert("Converted to uppercase","Success")
    }

    const stringReverse=()=>{
        let reverse = text.split('').reverse().join('');
        setText(reverse)
        props.showAlert("String Reversed","Success")
    }

    const toLower=()=>{
        console.log("Converted to LowerCase");
        let lower=text.toLowerCase();
        setText(lower)
        props.showAlert("Converted to lowercase","Success")
    }

    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    
    


  return (
    <>
    <div>
        <div className="mb-3" style={{color:props.textcol}}>
        <h1 > {props.heading}</h1>
        
        <textarea className="form-control" id="textBox" rows="5" value={text} onChange={handleOnChange} style={{backgroundColor:props.theme==='light'?'white':'LightSlateGray'}}></textarea>
        
        </div>

        <button className='btn btn-outline-primary mx-2' onClick={toUpper}>Convert to uppercase</button>
        <button className='btn btn-outline-primary mx-2' onClick={toLower}>Convert to lowercase</button>
        <button className='btn btn-outline-primary' onClick={stringReverse}>Reverse string</button>
    
    </div>
    <div className='container my-5' style={{color:props.textcol}}>
        <h1>Info about text</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>This will take {0.008*text.split(" ").length} minutes to read</p>
    </div>
    </>
  )
}
