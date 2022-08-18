window.onload = () => {
  const cardList =  document.querySelectorAll('.card');
  cardList.forEach((card, index) => {
    card.addEventListener('click', ()=>{
        console.log("asdf")
        window.location.href = "./2-profile-list.html" ;
    })
  })

}