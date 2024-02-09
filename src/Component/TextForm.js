import React, { useState } from 'react'

export default function TextForm(props) {
    const islowercase = (input) => {
        return input === String(input).toLowerCase()
    }
    const [text, setText] = useState("Enter Text here");
    const handleUpclick = () => {
        if (text === "") {
             props.showAlert("Text Area is Empty Enter Some Text before", "warning") 
        }
        else if (islowercase(text)) {
            let NewText = text.toUpperCase();
            setText(NewText);
            props.showAlert("Converted To UpperCase", "success") 

        }
        else {
            props.showAlert("Already In Uppercase", "info") 
        }
    }
    const handleLoclick = () => {
        if (text ==="") {
             props.showAlert("Text Area is Empty Enter Some Text before", "warning") 
        }
        else if (islowercase(text)) {
             props.showAlert("Alredy in Lowercase", "info") 
        }
        else {
            let NewText = text.toLocaleLowerCase();
            setText(NewText);
            props.showAlert("Converted To LowerCase", "success")

        }
    }
    const handleOnClear = () => {


        if (text === "") {
            props.showAlert("Txet Area Is Alredy Cleared", "info") 
        }
        else {
            var conf = window.confirm("Do You Want To Clear Text Box");
            let NewText = "";
            if (conf) {
                setText(NewText);
            }
         props.showAlert("Txet Area Cleared", "success") 
        }



    }
    const handleOnChange = (event) => {
        console.log(event)
        setText(event.target.value)
    }
    return (
        <>

            <div className='Container1  ' style={{ fontFamily: "monospace" }}>
                <h3>{props.heading}</h3>
                <div className="mb-3 ">
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <div className="d-flex justify-content-evenly">
                    <div><button type="button" className="btn btn-primary " onClick={handleUpclick}  >Convert To UpperCase</button></div>
                    <div><button type="button" className="btn btn-primary " onClick={handleLoclick}>Convert To LocaleLowerCase</button></div>
                    <div><button type="button" className="btn btn-primary " onClick={handleOnClear}>Clear Text</button></div>



                </div>

            </div>
            <div className='Container2 my-3' style={{ fontFamily: "monospace", color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Your Text Summary</h3>
                <p> <b> In Your Enter Text:</b> <br /> Words : {text.split(" ").length} <br /> Character : {text.length}
                    <br /> You can read in {text.length * 0.008} min
                </p>
                <h3>Preview</h3>
                <p> {text} </p>
            </div>
        </>

    )
}
