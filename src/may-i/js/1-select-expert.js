window.onload = () => {
  const cardList =  document.querySelectorAll('.card');
  cardList.forEach((card, index) => {
    card.addEventListener('click', ()=>{
        window.location.href = "./2-profile-list.html" ;
    })
  })

}