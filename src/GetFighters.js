import { useState, useEffect } from 'react'
import speed from './Images/speed.png'
import combat from './Images/combat.png'
import durability from './Images/durability.png'
import intelligence from './Images/intelligence.png'
import strength from './Images/strength.png'
import power from './Images/power.png'


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
  search: "hulk"
}

function GetFighters() {
  const [fighter, setFighter] = useState(initialfighterData)
  const [fighterTwo, setFighterTwo] = useState(initialfighterData)
  const [winner, setWinner]=useState("")
  
  const searchInput = event => {
    const newContent = event.target.value
    console.log(newContent)
    fighter.search = newContent
  }
  
  const fetchFighter = () => {
    console.log(fighter.search)

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

  const fetchFighterTwo = () => {
    console.log(fighterTwo.search)

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

  const letsFight = () => {
    let fighterOneScore = fighter.powerstats.strength + fighter.powerstats.intelligence + fighter.powerstats.power + fighter.powerstats.combat + fighter.powerstats.durability + fighter.powerstats.speed

    let fighterTwoScore = fighterTwo.powerstats.strength + fighterTwo.powerstats.intelligence + fighterTwo.powerstats.power + fighterTwo.powerstats.combat + fighterTwo.powerstats.durability + fighterTwo.powerstats.speed

    if (fighterOneScore > fighterTwoScore){
      console.log(fighter.name)
      setWinner(fighter.name)
    } else {
      console.log(fighterTwo.name)
      setWinner(fighterTwo.name)
    }
  }
    
  return (
    <div className="BattlePage">
      <section className='fighterBox'>
        <input type="text" onChange={searchInput}/>
        <button onClick={fetchFighter}>Get Fighter</button>
        {/* only show if defined */}
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

        <img src={fighter.images.md} className="shakeImg" alt="" />
      </section>
      <section >
        <button onClick={letsFight} className='letsFightButton'>Fight</button>
        <p>{winner}</p>
      </section>
      <section  className='fighterBox'>
        <input type="text" onChange={searchInput}/>
        <button onClick={fetchFighterTwo}>Get Fighter</button>
        {/* only show if defined */}
        <h2>{fighterTwo.name}</h2>

        <p>Strength: {fighterTwo.powerstats.strength}</p>
        <p>Intelligence: {fighterTwo.powerstats.intelligence}</p>
        <p>Power: {fighterTwo.powerstats.power}</p>
        <p>Combat: {fighterTwo.powerstats.combat}</p>
        <p>Durability: {fighterTwo.powerstats.durability}</p>
        <p>Speed: {fighterTwo.powerstats.speed}</p>

        <img src={fighterTwo.images.md} className="shakeImg" alt="" />
      </section>
      
      
    </div>
  )
    
  
  

}

export default GetFighters
