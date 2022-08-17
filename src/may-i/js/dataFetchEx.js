
window.onload = () => {

    fetch("http://127.0.0.1:8000/profile/get-apply-request-all-for-reporter/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "20f832b6c987d545cb53137e386706bee776d08f",
        }
    }).then((response) => response.json()).then((data) => {

        console.log(data.data)

        const interviewWrap = document.querySelector('#interviewWrap')
        for(div of data.data){
            const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/src/may-i/proposal-get.html}">
                                    <p>${div.name}</p>
                                    <p>${div.title}</p>
                                    <p>${div.deadline}</p>
                                    <p>${div.is_send}</p>
                                
                            </a>`
            interviewWrap.innerHTML += interviewDiv
                    
        } 


    });
 


}


const clickBtn = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {

        console.log((data))

    });

}


