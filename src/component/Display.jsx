import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"

function Display() {
    const { calc } = useContext(CalcContext);

    return (
        <div className="display" max={70} mode="single">{calc.num ? calc.num : calc.res}</div>
    );
};

export default Display