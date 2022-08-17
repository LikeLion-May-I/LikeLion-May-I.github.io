
window.onload = () => {

    fetch("http://may-i-server.o-r.kr:8000/profile/get-apply-answered-all-for-expert/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "b93590dad6fe00de55a7088efa39c42dd12cf6ee",
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

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {

        console.log((data))

    });

}


