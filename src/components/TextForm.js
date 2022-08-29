import React, {useState} from 'react'

export default function TextForm(props) {

  const UpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success")
  }

  const LowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success")
  }


  const ClearText = () => {
    let newText = "";
    setText(newText)
    props.showAlert("Text Cleared","success")
  }

  const RemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed","success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  return (
    <>
<div className={`text-${props.mode === 'light'?'dark':'light'}`}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea style={{backgroundColor: props.mode === 'light'?'white':'black', color: props.mode === 'light'?'black':'white'}} className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange}></textarea>
    <button id="btn" className="btn btn-primary my-3" onClick={UpperCase}>Convert to UpperCase</button>
    <button id="btn" className="btn btn-primary my-3" onClick={LowerCase}>Convert to LowerCase</button>
    <button id="btn" className="btn btn-primary my-3" onClick={ClearText}>Clear Text</button>
    <button id="btn" className="btn btn-primary my-3" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>
</div>
<div className={`container my-2 text-${props.mode === 'light'?'dark':'light'}`}>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} word and {text.length} character</p>
  <p>Can be read in approximately {0.008*text.split(" ").length} Minutes</p>
  <h2>{text.length>0?"Preview":"Enter Text to preview"}</h2>
  <p>{text}</p>
</div>
</>
  )
}
