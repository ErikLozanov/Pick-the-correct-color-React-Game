import { useEffect, useState } from 'react'
import './App.css'

function generateRandomColor () {
  return Math.floor(Math.random()*16777215).toString(16).toUpperCase();
}

function App() {
  const [colors, setColors] = useState([]);
  const [randomNum,setRandomNum] = useState(Math.floor(Math.random() * 3));
  const [nextColor,setNextColor] = useState(false);
  const [checker,setChecker] = useState();

  useEffect(() => {
    setNextColor(false);
    let randomColor = generateRandomColor();
    let randomColor1 = generateRandomColor();
    let randomColor2 = generateRandomColor();
    setColors(["#" + randomColor, '#' + randomColor1, "#" + randomColor2]);
  },[nextColor]);

  const checkHandler = (pickedColor) => {
    if(pickedColor === colors[randomNum]) {
      setRandomNum(Math.floor(Math.random() * 3));
      setChecker('Correct')
      setNextColor(true);
    } else {
      setChecker('Wrong')
    }
  }
  return (
    <>
      <div style={{backgroundColor: colors[randomNum], padding: '80px', margin: '40px'}}></div>
      {colors.map(colorId => <button key={colorId} onClick={() => checkHandler(colorId)} className='btn'>{colorId}</button>)}
     {checker == 'Correct' && <h3>Correct!</h3>}
     {checker == 'Wrong' && <h3>Wrong!</h3>}
    </>
  )
}

export default App
