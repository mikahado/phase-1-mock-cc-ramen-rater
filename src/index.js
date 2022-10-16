
fetch('http://localhost:3000/ramens')
.then((resp) => resp.json())
.then((data) => data.map((ramen) => {  //I put the map iterator HERE instead, to keep all the ramen details linked together
    showRamen(ramen)                    //then call the function below, which I renamed to showRamen()
} ))

function showRamen(ramenData) {
    //1) create img tag 2) assign image from db to tag 3) then append it to DOM under 'ramen-menu'
    const menuImg = document.createElement('img')
    menuImg.src = ramenData.image
    document.getElementById('ramen-menu').append(menuImg)

    //makes the menu-photos clickable, then tells them where to go on the DOM
    menuImg.addEventListener('click', () => {

    //below, you do the same thing for each ramen detail (image, rating, comment): 1) select the html tag, 2) append it to DOM

    const mainImg = document.querySelector('.detail-image') 
    mainImg.src = ramenData.image;

    const ramenRating = document.getElementById('rating-display')
    ramenRating.textContent = ramenData.rating

    const ramenComment = document.getElementById('comment-display')
    ramenComment.textContent = ramenData.comment
    })
}

