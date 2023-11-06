import { useState, useEffect } from "react"
import "./CountButton.css"

export default function CountButton(props) {
    let [count, setCount] = useState(0)
    function plusOne() {
        setCount(count + (1 * props.mult))
    }
    function rollOverCount(){
        if (count > 10){
            setCount(0)
        }
    }
    const buttonStyle = {
         backgroundColor: "rgb(18, 18, 139);",
    }

    useEffect(rollOverCount, [count])
    return (
        <div>
        <button style={buttonStyle}onClick={plusOne}>{props.name}</button>
        <div className="display">{count}</div>
        </div>
    )
}