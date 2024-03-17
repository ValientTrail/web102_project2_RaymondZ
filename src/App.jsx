import React, { useState } from 'react'
import './App.css'
import planetIcon from '../src/assets/freepik-planets-icon.png';
import Card from './components/Card.jsx'

const cards = [
  {
      question: "How far away is the Earth from the Sun?",
      answer: "93 million miles",
      backImg: "../src/assets/earth-to-sun.jpg"
  },
  {
      question: "What is the name of the furthest man-made spacecraft from Earth?",
      answer: "Voyager 1",
      backImg: "../src/assets/voyager-icon.png"
  },
  {
      question: "What kind of signals has Earth been sending out to space?",
      answer: "Radio signals",
      backImg: "../src/assets/radio-signal-image.jpg"
  },
  {
      question: "How long does the Moon take to orbit the Earth?",
      answer: "1 Earth month",
      backImg: "../src/assets/earth-and-moon-icon.png"
  },
  {
      question: "What is the eighth planet in the Solar System?",
      answer: "Neptune",
      backImg: "../src/assets/neptune-nasa-image.jpg"
  },
  {
      question: "What are Saturn's rings made of?",
      answer: "Small chunks of ice, rock, and dust",
      backImg: "../src/assets/saturn-rings.jpg"
  },
  {
      question: "What is the name of Jupiter's biggest storm?",
      answer: "Great Red Spot",
      backImg: "../src/assets/jupiter-great-red-spot.jpg"
  },
  {
      question: "What is the name of Jupiter's closest moon?",
      answer: "Io",
      backImg: "../src/assets/io-picture-from-juno.png"
  },
  {
      question: "What is at the center of the Milky Way Galaxy?",
      answer: "A supermassive black hole, Sagittarius A",
      backImg: "../src/assets/sagittarius-a-image.jpg"
  },
  {
      question: "What is the radius of the Moon?",
      answer: "1,079.6 miles",
      backImg: "../src/assets/Far_side_of_the_Moon.png"
  },
  {
      question: "What class of star is the Sun?",
      answer: "G2 V star",
      backImg: "../src/assets/sun-mosaic.jpg"
  },
  {
      question: "What is the closest star to Earth?",
      answer: "Proxima Centauri",
      backImg: "../src/assets/New_shot_of_Proxima_Centauri,_our_nearest_neighbour.jpg"
  }
]

function App() {
  const totalCards = cards.length;
  const [index, setIndex] = useState(0);
 
  const randomNumberInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const setRandomCard = () => {
    var prevIndex = index;
    var randCard = randomNumberInRange(0, totalCards - 1);
    while(randCard == prevIndex){
      randCard = randomNumberInRange(0, totalCards - 1);
    }
    setIndex(randCard);
  }
  
  return (
    <>
      <div className='header'>
        <img src={planetIcon} className='planetsIcon'></img>
        <h1>Astronomy Quiz</h1>
        <h4>How much do you know about the universe? Find out here with this quiz on astronomy facts!</h4>
        <h5>Total Cards: {totalCards}</h5>
        <p>Click on a card to flip it around!</p>
      </div>
      <div className="flash-card-container">
        <Card    
          question={cards[index].question} 
          answer={cards[index].answer} 
          backImg={cards[index].backImg} 
          onNewCard={false}
          />
          <form>
            <label>Guess your answer here:</label>
            <input type='text' value={answer} onChange={(e) => setAnswer(e.target.value)}>Place your answer...</input>
            <input type='submit'/>
        </form>
        <button onClick={setRandomCard}>Next Card</button>
      </div>
    </>
  )
}

export default App
