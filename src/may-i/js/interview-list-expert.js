
window.onload = () => {

    const token = localStorage.getItem("token");
    if(!token){
        alert("로그인이 필요합니다!")
        window.location.href = "./1-choice.html" ;

    } else {

        fetch("http://may-i-server.o-r.kr:8000/profile/get-apply-request-all-for-expert/", {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            }
        }).then((response) => response.json()).then((data) => {

            console.log(data.data)

            const interviewWrap = document.querySelector('#interviewWrap')
            for(div of data.data){

                if(div.is_expired == 0) {
                    const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/src/may-i/proposal-get.html}">
                                        <p>${div.department}</p>
                                        <p>${div.title}</p>
                                        <p>${div.deadline}</p>
                                        <p>요청</p>
                                </a>`
                    interviewWrap.innerHTML += interviewDiv
                } else {
                    const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/src/may-i/proposal-get.html}">
                                        <p>${div.department}</p>
                                        <p>${div.title}</p>
                                        <p>${div.deadline}</p>
                                        <p>만기</p>
                                </a>`
                    interviewWrap.innerHTML += interviewDiv
                }
                
            }
        });
 
    }

}


const clickBtn = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {

        console.log((data))

    });

}


