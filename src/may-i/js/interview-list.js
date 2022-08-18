
window.onload = () => {

    fetch("http://127.0.0.1:8000/profile/get-apply-request-all-for-reporter/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "ff93ba51fc99186c6af379205048c33d43297711",
        }
    }).then((response) => response.json()).then((data) => {

        console.log(data.data)

        
        
        const interviewWrap = document.querySelector('#interviewWrap')
        data.data.forEach(async div=> {
            
            const interviewDiv = `<div class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/src/may-i/proposal-get.html}">
                                    <p>${div.name}</p>
                                    <p>${div.title}</p>
                                    <p class="deadline"></p>
                                    <p>${div.is_send}</p>
                                </div>`
            interviewWrap.innerHTML += interviewDiv
        })

        const deadlineArr = data.data.map(x => x.deadline)

        console.log(deadlineArr)
        // setInterval(countDeadline(deadlineArr), 1000)

    });

    
}

// 2022-08-18T17:22:56
const countDeadline = (deadlineArr) => {
    let today = new Date();
    
    deadlineArr.forEach(deadlineTag=>{
        console.log(deadlineTag.innerText.split("T")[1]);
        const yearToDay = deadlineTag.innerText.split("T")[0].split("-").map(x => Number(x));
        const timeToSec = deadlineTag.innerText.split("T")[1].split(":").map(x=>Number(x));
        
        console.log(yearToDay)
        console.log(timeToSec)
        let end = new Date(yearToDay[0],yearToDay[1],yearToDay[2],
            timeToSec[0], timeToSec[1], timeToSec[2]);
        let gap = (end.getTime() - today.getTime())/1000 //sec
        

        const days = Math.floor(gap / (1000 * 60 * 60 * 24)); // 일
        const hour = String(Math.floor((gap/ (1000 * 60 *60 )) % 24 )).padStart(2, "0"); // 시
        const minutes = String(Math.floor((gap  / (1000 * 60 )) % 60 )).padStart(2, "0"); // 분
        const second = String(Math.floor((gap / 1000 ) % 60)).padStart(2, "0"); // 초

        deadlineTag.innerText = `${days}일 ${hour}시간 ${minutes}분 ${second}초`;
        
    })
}





