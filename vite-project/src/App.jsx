import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [colors, setColors] = useState([]);
  // const [wrongColor1, setWrongColor1] = useState('');
  // const [wrongColor2, setWrongColor2] = useState('');
  const [randomNum,setRandomNum] = useState(Math.floor(Math.random() * 3));
  const [nextColor, setNextColor] = useState(false);
  const [checker,setChecker] = useState();

  useEffect(() => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    let randomColor1 = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    let randomColor2 = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    setColors(["#" + randomColor, '#' + randomColor1, "#" + randomColor2]);
  },[randomNum]);

  const checkHandler = (e) => {
    let pickedColor = e.currentTarget.value
    if(pickedColor === colors[randomNum]) {
      setRandomNum(Math.floor(Math.random() * 3));
      setChecker('Correct')
    } else {
      setChecker('Wrong')
    }
  }
  return (
    <>
      <div style={{backgroundColor: colors[randomNum], padding: '80px', margin: '40px'}}></div>
      {colors.map(colorId => <button key={colorId} onClick={checkHandler} value={colorId} className='btn'>{colorId}</button>)}
     {checker == 'Correct' && <h3>Correct!</h3>}
     {checker == 'Wrong' && <h3>Wrong!</h3>}
    </>
  )
}

export default App
