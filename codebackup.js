// import { useState, useEffect } from 'react'

// function Battle() {

//   const [fighter1, setFighter] = useState("")

//   let fighterName = "joker" //Hard coding for now.

//   const url = `https://superhero-search.p.rapidapi.com/api/?hero=${fighterName}`;

//   const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '94cb9c8083mshdf11211cc271d52p191c86jsn5bf3ddd029e6',
//         'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
//     }
//   }
//   //This function is running on a loop
//   //Have tried used effect
//   // wrapping function but still is looping 
//     const handleButton = () => setFighter(fighter)
    
//     useEffect(() => {
//       fetch(url, options) 
//         .then(res => res.json())
//         .then(res => { 
//         let fighter = res
//         setFighter(fighter)
//       })
//     }, [])
      
//   console.log(fighter1)

//   return (
//     <div className="Battle">
//       <button>
//         Select Fighter
//       </button>
//     </div>
//   )

// }

// export default Battle 