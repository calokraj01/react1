import React from 'react'

export default function Something1() {
  function handleOnChange() {
    console.log("a")
  }

  function handlesubmitClick() {
    console.log("b")
  }

  function handleclearClick() {
    console.log('c')
  }
  return (
    <>
      <h2 className='container my-4'>Submit Somethinnn</h2>
      <div className="mb-3 container my-4">
        <textarea className="form-control" onChange={handleOnChange} value={Text} id="myBox" rows="12"></textarea>
        <button className="btn btn-danger my-4" onClick={handlesubmitClick}>Submit</button>
        <button className="btn btn-danger mx-4 my-2" onClick={handleclearClick}>Clear text</button>
      </div>
    </>
  )
}
