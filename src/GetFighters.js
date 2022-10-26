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
        <p>{fighter.name}</p>
        <p>Strength: {fighter.powerstats.strength}</p>
        <p>Intelligence: {fighter.powerstats.intelligence}</p>
        <p>Power: {fighter.powerstats.power}</p>
        <p>Combat: {fighter.powerstats.combat}</p>
        <p>Durability: {fighter.powerstats.durability}</p>
        <p>Speed: {fighter.powerstats.speed}</p>

        <img src={fighter.images.md} alt="" />
      </section>
      <section>
        <button onClick={letsFight}>Fight</button>
        <p>{winner}</p>
      </section>
      <section  className='fighterBox'>
        <input type="text" onChange={searchInput}/>
        <button onClick={fetchFighterTwo}>Get Fighter</button>
        {/* only show if defined */}
        <p>{fighterTwo.name}</p>
        <p>Strength: {fighterTwo.powerstats.strength}</p>
        <p>Intelligence: {fighterTwo.powerstats.intelligence}</p>
        <p>Power: {fighterTwo.powerstats.power}</p>
        <p>Combat: {fighterTwo.powerstats.combat}</p>
        <p>Durability: {fighterTwo.powerstats.durability}</p>
        <p>Speed: {fighterTwo.powerstats.speed}</p>

        <img src={fighterTwo.images.md} alt="" />
      </section>
      
      
    </div>
  )
    
  
  

}

export default GetFighters
