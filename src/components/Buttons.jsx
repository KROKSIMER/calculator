import { Button, ButtonGroup } from "@chakra-ui/react"
import './Button.style.css'
function Numbers (props) {

    return (
        <>
            <ButtonGroup variant="outline" spacing="0" flexWrap="wrap" flexDirection="row" justifyContent="start" alignItems="start">
                <Button className="classicButton operantButton" onClick={() => props.buttonHandler("C")}>C</Button>
                <Button className="classicButton operantButton" onClick={() => props.buttonHandler("<-")}>←</Button>
                <Button className="classicButton operantButton" onClick={() => props.buttonHandler("del")}><b>DEL</b></Button>
                <Button className="classicButton operantButton" onClick={() => props.buttonHandler("/")}>÷</Button>
                <Button className="classicButton" onClick={() => props.buttonHandler("1")}>1</Button>
                <Button className="classicButton" onClick={() => props.buttonHandler("2")}>2</Button>
                <Button className="classicButton" onClick={() => props.buttonHandler("3")}>3</Button>
                <Button className="classicButton operantButton" onClick={() => props.buttonHandler("*")}>x</Button>
                <Button className="classicButton" onClick={() => props.buttonHandler("4")}>4</Button>
                <Button className="classicButton" onClick={() => props.buttonHandler("5")}>5</Button>
                <Button className="classicButton" onClick={() => props.buttonHandler("6")}>6</Button>
                <Button className="classicButton operantButton" onClick={() => props.buttonHandler("-")}>-</Button>
                <Button className="classicButton" onClick={() => props.buttonHandler("7")}>7</Button>
                <Button className="classicButton" onClick={() => props.buttonHandler("8")}>8</Button>
                <Button className="classicButton" onClick={() => props.buttonHandler("9")}>9</Button>
                <Button className="classicButton operantButton" onClick={() => props.buttonHandler("+")}>+</Button>
                <Button className="classicButton" onClick={() => props.buttonHandler("00")}>00</Button>
                <Button className="classicButton" onClick={() => props.buttonHandler("0")}>0</Button>
                <Button className="classicButton operantButton" onClick={() => props.buttonHandler(".")}>.</Button>
                <Button className="classicButton operantButton" onClick={() => props.buttonHandler("=")}>=</Button>
            </ButtonGroup>
        </>
    )
        
    
}
export default Numbers;