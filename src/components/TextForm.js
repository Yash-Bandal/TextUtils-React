import  { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    // text = "New Text" //wrong way to update
    // setText("Enter Text 2 :");  //dont use it immediately, cause infinite render


    //concept will be used many times
    const handleUpChange = (e) => { //e , event object is created onChange
        // console.log("On change")
        setText(e.target.value);
    }


    const handleUpClick = (e) => {
        // console.log("Upper case was fired ")
        // setText('You have clicked on handle upclick');  //changing state
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success")
    }
    
    const handleLowClick = (e) => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase","success")
    };
    
    const clearText = (e) => {
        setText('');
        props.showAlert("Cleared Text","success")
    };
    
    const Reverse = (e) => {
        setText(text.split(" ").reverse().join(" "));
        props.showAlert("Reversed Text","success")
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }



    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' , transition: 'background-color 0.3s ease, color 0.3s ease'}}>
                <form>
                    <h1>{props.heading}</h1>
                    <div className="mb-3 ">
                        <textarea className="form-control" 
                        style={
                            { backgroundColor: props.mode === 'dark' ? '#0d1017' : 'white', color: props.mode === 'dark' ? ' white' : 'black', transition: 'background-color 0.3s ease, color 0.3s ease' }
                            }
                         id="myBox" rows="8" value={text} onChange={handleUpChange}></textarea>
                    </div>
                </form>

                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>Click to get Uppercase </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleLowClick}>Click to get Lowercase </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={clearText}>Clear </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={Reverse}>Reverse Sentence </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black', transition: 'background-color 0.3s ease, color 0.3s ease' }} >
                <h1>Summary</h1>
                <p>
                    {/* {text.trim().split(" ").length} words, {text.split("").length} characters */}
                    {text.trim().split(/\s+/).filter((word) => word.length !== 0).length} words, {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length} Minutes Reading content - Manual </p>


                <h2 my-3>Preview</h2>
                <p>{text.length> 0 ? text: "Enter Something in TextBox"}</p>
            </div>
        </>
    );
}
