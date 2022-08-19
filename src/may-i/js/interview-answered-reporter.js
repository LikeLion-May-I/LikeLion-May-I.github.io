
window.onload = () => {

    fetch("http://may-i-server.o-r.kr:8000/profile/get-apply-answered-all-for-reporter/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "20f832b6c987d545cb53137e386706bee776d08f",
        }
    }).then((response) => response.json()).then((data) => {

        console.log(data.data) 
        const interviewWrap = document.querySelector('#interviewWrap')
        for(div of data.data){
            if(`${div.response}` == 1){
                const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/interview/get-interview/${div.id}}">
                                    <p>${div.department}</p>
                                    <p>${div.title}</p>
                                    <p>수락</p>
                            </a>`
                interviewWrap.innerHTML += interviewDiv
            }
            else if(`${div.response}` == 2) {
                const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/interview/get-interview/${div.id}}">
                <p>${div.department}</p>
                <p>${div.title}</p>
                <p>거절</p>
                </a>`
                interviewWrap.innerHTML += interviewDiv
            }
            else if(`${div.response}` == 3) {
                const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/interview/get-interview/${div.id}}">
                <p>${div.department}</p>
                <p>${div.title}</p>
                <p>보류</p>
                </a>`
                interviewWrap.innerHTML += interviewDiv
            }
            
            if(`${div.is_expired}` == 1) {
                const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/interview/get-interview/${div.id}}">
                <p>${div.name}</p>
                <p>${div.title}</p>
                <p>만료</p>
                </a>`
                interviewWrap.innerHTML += interviewDiv
            }

        }


    });
 


}


const clickBtn = () => {

    fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {

        console.log((data))

    });

}


