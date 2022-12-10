import React, { useState } from 'react'
import './App.css'
// import car from './assets/1.png'
// import w1 from './assets/2.png'
// import w2 from './assets/3.png'

const App = () => {
  const [distance, setDistance] = useState(1);
  const [time, setTime] = useState(1);
  const [speed, setSpeed] = useState();

  function handleDistance(e){
    setDistance(e.target.value);
  }

  function handleTime(e){
    setTime(e.target.value);
  }

  function calculateSpeed(){
    setSpeed(distance/time);
  }

  function clearSpeed(){
    setSpeed()
  }

  const spin = {
    animation: `spin infinite ${100/speed}s linear`
  }

  return (
    <div className='main'>
      <div className='inputFields'>
        <h1>Speed Calculator</h1>
        <input type="number" placeholder='Distance' value={distance} onChange={handleDistance}/>
        <input type="number" placeholder='Time' value={time} onChange={handleTime}/>
      </div>
      <div className='buttons'>
        <button onClick={calculateSpeed}>Calculate Speed</button>
        <button onClick={clearSpeed}>Clear Speed</button>
      </div>
      <div className='result'>
        <h1 style={speed && isFinite(speed) ? {opacity:"1"} : {opacity: "0"}}>{speed <= 60 ? `Slow ${speed} km/hr.` : speed >60 && speed < 100 ? `Moderate ${speed} km/hr.` : speed >= 100 ? `Fast ${speed} km/hr.` : `${' '}`}</h1>
        <h1 style={speed?{display:"none"}:{display:"block", opacity:0}}>.</h1>
      </div>
//       <div className='container'>
//         <div className='parent' style={speed ? {animation: `run infinite ${100/speed}s linear`} : {}} >

//           <img width="150px" height="150px" src={car} alt='car' />
//           <img style={speed ? spin : {}} src={w1} alt='wheel1' />
//           <img style={speed ? spin : {}} src={w2} alt='wheel2' />
//         </div>
//       </div>
    </div>
  )
}

export default App
