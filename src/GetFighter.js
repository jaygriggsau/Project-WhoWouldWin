import { useState, useEffect } from 'react'

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

function GetFighter() {
  const [fighter, setFighter] = useState(initialfighterData)
  
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
    
  return (
    <div className="BattlePage">
    
      <input type="text" onChange={searchInput}/>
      <button onClick={fetchFighter}>Get Fighter</button>
    
      <p>{fighter.name}</p>
      <p>Strength: {fighter.powerstats.strength}</p>
      <p>Intelligence: {fighter.powerstats.intelligence}</p>
      <p>Power: {fighter.powerstats.power}</p>
      <p>Combat: {fighter.powerstats.combat}</p>
      <p>Durability: {fighter.powerstats.durability}</p>
      <p>Speed: {fighter.powerstats.speed}</p>

      <img src={fighter.images.md} alt="" />
      
    </div>
  )
    
  
  

}

export default GetFighter
