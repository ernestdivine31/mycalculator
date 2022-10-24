
import Cover from "./component/Cover";
import Display from "./component/Display";
import ButtonBox from './component/ButtonBox';
import Button from './component/Button';
import CalcProvider from "./context/CalcContext";




const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];



export default function App() {
  return (

    <CalcProvider>
      <Cover>
        <Display />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Cover>
    </CalcProvider>

  )
}

