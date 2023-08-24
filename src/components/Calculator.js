import React ,{useState} from "react";


const Calculator = () =>{

    const [sum, setSum] = useState(0);

    return (
        <div>
            <h1>Sum Calculator</h1>
            <input type="number" onChange={(e) => setSum(sum + parseFloat(e.target.value))}/>
            sum: {sum};
        </div>
    )
}

export default Calculator;