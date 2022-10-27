import { useState, useEffect } from 'react'
import speed from './Images/speed.png'
import combat from './Images/combat.png'
import durability from './Images/durability.png'
import intelligence from './Images/intelligence.png'
import strength from './Images/strength.png'
import power from './Images/power.png'
import fighting from './Images/fighting.gif'


const initialfighterData = {
  name: undefined,
  images: {
    md: undefined,
  },
  powerstats:{
    strength: undefined,
    power: undefined,
    combat: undefined,
    durability: undefined,
    intelligence: undefined,
    speed: undefined
  },
  search: undefined
}

function GetFighters() {
  const [fighter, setFighter] = useState(initialfighterData)
  const [fighterTwo, setFighterTwo] = useState(initialfighterData)
  const [fighterOneSearch, setFighterOneSearch] = useState(undefined)
  const [fighterTwoSearch, setFighterTwoSearch] = useState(undefined)
  const [winner, setWinner] = useState("")
  const [loadingScreen, setLoadingScreen] = useState(undefined)
  const [instructions, setInstructions] = useState("Search for a hero and click Get Fighter to lock them in. Once you have selected two fighters, click the Fight button to make them fight!")
  const [errorMessage, setErrorMessage] = useState("")
  
  const searchInput = event => {
    const newContent = event.target.value
    console.log(newContent)
    fighter.search = newContent
  }
  
  const fetchFighter = () => {
    console.log(fighter.search)

    if (fighter.search == undefined) {
      setErrorMessage("Please Select a Fighter")
    } else {
      const url = `https://superhero-search.p.rapidapi.com/api/?hero=${fighter.search}`

    const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_HERO_API,
          'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
      } 
    }
    fetch(url, options) 
      .then(res => res.json())
      .then(res => {setFighter(res)})
    
    }

    
  }

  const fetchFighterTwo = () => {
    console.log(fighterTwo.search)
    
    if (fighterTwo.search == undefined){
      setErrorMessage("Please Select a Fighter")
    } else {
      const url = `https://superhero-search.p.rapidapi.com/api/?hero=${fighter.search}`

    const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_HERO_API,
          'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
      } 
    }
    fetch(url, options) 
      .then(res => res.json())
      .then(res => {setFighterTwo(res)})
    
    }   
  }

  const letsFight = () => {
    let fighterOneScore = fighter.powerstats.strength + fighter.powerstats.intelligence + fighter.powerstats.power + fighter.powerstats.combat + fighter.powerstats.durability + fighter.powerstats.speed

    let fighterTwoScore = fighterTwo.powerstats.strength + fighterTwo.powerstats.intelligence + fighterTwo.powerstats.power + fighterTwo.powerstats.combat + fighterTwo.powerstats.durability + fighterTwo.powerstats.speed

    setLoadingScreen(fighting)
    setInstructions("")
    
    setTimeout(function () {
      if (fighterOneScore > fighterTwoScore){
        setWinner(fighter.name + ' Wins')
        setLoadingScreen("")
      } else {
        setWinner(fighterTwo.name + ' Wins')
        setLoadingScreen("")
      }
  }, 5000)

  }

  const refreshPage = () => {
    window.location.reload(false)
  }

  return (

    <div>
      <section className='instructions'>
        <h2 style={{color: "white"}}>{instructions}</h2>
      </section>
      <div className="BattlePage">
      
        <section className='fighterBox'>
          <input type="text" onChange={searchInput}/>
          <button onClick={fetchFighter}>Get Fighter</button>

          <h2>{fighter.name}</h2>
            <section className="fighterStatsTop">
              <img src={strength} alt="" className='icon' />
              <p>{fighter.powerstats.strength}</p>
              <img src={intelligence} alt=""className='icon' />
              <p>{fighter.powerstats.intelligence}</p>
              <img src={power} alt="" className='icon' />
              <p>{fighter.powerstats.power}</p>
            </section>
            <section className="fighterStatsBottom">
                <img src={combat} alt="" className='icon' />
                <p>{fighter.powerstats.combat}</p>
                <img src={durability} alt="" className='icon' />
                <p>{fighter.powerstats.durability}</p>
                <img src={speed} alt="" className='icon' />
                <p>{fighter.powerstats.speed}</p>
            </section>
          <img src={fighter.images.md} className="shakeImg fighterImg" alt="" />
        </section>

        <section className="middleCol">
          <section className='fighterStats'>
            <button onClick={letsFight} className='letsFightButton'>Fight</button>
            <button onClick={refreshPage}>Reset</button>
          </section>
          <section>
            <h2 style={{color: "orangered"}}>{errorMessage}</h2>
            </section>
          <section className="winnersArea">
            <h2 id='winnerText' style={{color: "white"}}>{winner}</h2>
            <img src={loadingScreen} alt="" className='loadingGif'/>
          </section>
        </section>
        
        <section  className='fighterBox'>
          <input type="text" onChange={searchInput}/>
          <button onClick={fetchFighterTwo}>Get Fighter</button>
          <h2>{fighterTwo.name}</h2>
          <section className="fighterStatsTop">
              <img src={strength} alt="" className='icon' />
              <p>{fighterTwo.powerstats.strength}</p>
              <img src={intelligence} alt=""className='icon' />
              <p>{fighterTwo.powerstats.intelligence}</p>
              <img src={power} alt="" className='icon' />
              <p>{fighterTwo.powerstats.power}</p>
            </section>
            <section className="fighterStatsBottom">
                <img src={combat} alt="" className='icon' />
                <p>{fighterTwo.powerstats.combat}</p>
                <img src={durability} alt="" className='icon' />
                <p>{fighterTwo.powerstats.durability}</p>
                <img src={speed} alt="" className='icon' />
                <p>{fighterTwo.powerstats.speed}</p>
            </section>
          <img src={fighterTwo.images.md} className="shakeImg fighterImg" alt="" />
        </section>
      </div>
      <section className="iconList" style={{color: "white"}}>
            <section className='fighterStatsTop'>
              <img src={strength} className="icon" alt="" />
              <p>Strength</p>
              <img src={intelligence} className="icon" alt="" />
              <p>Intelligence</p>
              <img src={power} className="icon" alt="" />
              <p>Power</p>
            </section>
            <section className='fighterStatsTop'>
              <img src={combat} className="icon" alt="" />
              <p>Combat</p>
              <img src={durability} className="icon" alt="" />
              <p>Durability</p>
              <img src={speed} className="icon" alt="" />
              <p>Speed</p>
            </section>
            <section className='fighterStatsBottom'>
              
            </section>
          </section>
    </div>
  )
    
}

export default GetFighters