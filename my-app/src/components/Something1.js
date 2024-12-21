import React, { useState } from 'react'

export default function Something1() {
  const [submitText, setsubmitText] = useState("Not Submitted");
  const [Text, setText] = useState("");


  function handleOnChange(event) {
    setText(event.target.value);
    setsubmitText("Not Submitted");
  }

  function handlesubmitClick() {
    if (submitText === "Not Submitted") {
      setsubmitText("Submitted");
    }
  }

  function handleclearClick() {
    setText("");
    setsubmitText("Not Submitted");
  }

  return (
    <>
      <h2 className='container my-4'>Submit Somethinnn</h2>
      <div className="mb-3 container my-4">
        <textarea className="form-control" onChange={handleOnChange} value={Text} id="myBox" rows="12"></textarea>
        <button className="btn btn-danger my-4" onClick={handlesubmitClick}>Submit</button>
        <button className="btn btn-danger mx-4 my-2" onClick={handleclearClick}>Clear text</button>
        <h3>{submitText}</h3>
        <h4>preview:- {Text}</h4>
      </div>
    </>
  )
}
