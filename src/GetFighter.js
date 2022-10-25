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
  }
}

function GetFighter() {
  const [fighter, setFighter] = useState(initialfighterData)

  let fighterSerachName = "hulk"

  const url = `https://superhero-search.p.rapidapi.com/api/?hero=${fighterSerachName}`

  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_HERO_API,
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
    } 
  }

  //Does this need to be Async?
  useEffect(() => {
    fetch(url, options) 
    .then(res => res.json())
    .then(res => {setFighter(res)})
  }, [])
    
  return (
    <div className="Battle">
  
      <p>{fighter.name}</p>
      <p>Strength: {fighter.powerstats.strength}</p>
      <p>Intelligence: {fighter.powerstats.intelligence}</p>
      <p>Power: {fighter.powerstats.power}</p>
      <p>Combat: {fighter.powerstats.combat}</p>
      <p>Durability: {fighter.powerstats.durability}</p>
      <p>peed: {fighter.powerstats.speed}</p>

      <img src={fighter.images.md} alt="" />
      
    </div>
  )
    
  
  

}

export default GetFighter

/////////// Code Variation Below

// import { useState, useEffect } from 'react'

// function GetFighter() {
//   const [fighter1, setFighter] = useState("") // is this resetting each time?

//   const url = `https://superhero-search.p.rapidapi.com/api/?hero=thanos`;

//   const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '94cb9c8083mshdf11211cc271d52p191c86jsn5bf3ddd029e6',
//         'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
//     } 
//   } 

//   const fetchFighterData = () => {
//     fetch(url, options) 
//     .then(res => res.json())
//     .then(res => { 
//     let fighter = res
//     console.log(fighter) //Working
//     console.log(fighter.name) //Working
//     console.log(fighter['images']['md']) //Working
//     setFighter(fighter.name)
//     // setFighter(fighter)
//     })
//   }

//   //add handler for updating state

//   const setFighterState = () => {
//     setFighter(fetchFighterData)
//     console.log(fetchFighterData())
//     console.log(fighter1) 
//   }
  
//   return (
//     <div className="Battle">
//     <button onClick={setFighterState}>
//       Select Fighter
//     </button>

//   </div>
//   )

// }

// // export default GetFighter