import React, { useState } from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState("");
    const [Tex, setTex] = useState("");


    const handleOnChange = (event) => {
        setText(event.target.value);
        setTex(Text.split(" ").filter((word) => {
            return word.length !== 0
        }));
    }

    const handleUpClick = () => {
        let upperCaseText = Text.toUpperCase();
        setText(upperCaseText);
    }

    const handlelowClick = () => {
        let lowerCaseText = Text.toLowerCase();
        setText(lowerCaseText);
    }

    const handleclearClick = () => {
        setText("")
        setTex("")
    }

    return (
        <>
        <div className="container my-4 mb-2">
            <div>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={Text} id="myBox" rows="12"></textarea>
                </div>
                <button className="btn btn-danger mx-4 my-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-danger mx-4 my-2" onClick={handlelowClick}>Convert to lowercase</button>
                <button className="btn btn-danger mx-4 my-2" onClick={handleclearClick}>Clear text</button>

            </div>
            <div className="container my-4">
                <h3>Text Summary</h3>
                <p>Number of letters : {Text.length}</p>
                <p>Number of words : {Tex.length}</p>
            </div>
        </div>
        </>
    )
}


