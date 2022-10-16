// first, access the ramen db, using fetch 
// 
//


fetch('db.json')
.then((resp) => resp.json())
.then((data) => bestRamen(data.ramens))

          
function bestRamen(ramenData){
    const best = ramenData.filter((topRamen) => topRamen.rating === 7)
    console.log(best)
   }

// ramenData.filter((topRamen) => topRamen.rating === 10)