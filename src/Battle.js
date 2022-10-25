function Battle() {

  const url = `https://superhero-search.p.rapidapi.com/api/?hero=thanos`;

  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '94cb9c8083mshdf11211cc271d52p191c86jsn5bf3ddd029e6',
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
    }
}


  fetch(url, options)
  .then(res => res.json())
  .then(res => {
    let hero = res
    console.log(hero)
  })
}


export default Battle 