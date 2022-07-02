import {useState} from "react";

const InputHandler = (props) => {
    const [text,setText] = useState("");

    const onChange = (e) =>{
        e.preventDefault();
        setText(e.target.value)
    };

    return(
        <div>
            <form
            onSubmit={(e) => (e.preventDefault(), props.getinput(text,setText))}>
            <input onChange={onChange} value={text}/>
            <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default InputHandler