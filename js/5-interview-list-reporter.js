// const BASE_URL = "http://may-i-server.o-r.kr:8000";
const BASE_URL = "https://may-i-server.herokuapp.com"


window.onload = () => {
    const token = localStorage.getItem("token");
    
    if(!token){
        alert("로그인이 필요합니다!")
        window.location.href = "./1-choice.html" ;
    } else {

        fetch(`${BASE_URL}/profile/get-apply-list-for-reporter/`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            }
        }).then((response) => response.json()).then((data) => {
            console.log(data.data)
            const interviewWrap1 = document.getElementById("interviewWrap1");
            const interviewWrap2 = document.getElementById("interviewWrap2");
            interviewWrap2.style.display = "none";

            data.data[0].forEach(async div=> {
                

                // 요청 데이터
                if (`${div.is_expired}` == 0) {
                    const interviewDiv = `<div class="${div.id} flex p-3 justify-around text-sm text-black w-full space-x-10">
                                            <p class="w-2/12 flex justify-center">${div.name}</p>
                                            <p class="${div.id} w-5/12 flex justify-center cursor-pointer text-blue-500" onclick="clickBtn(this)">${div.title}</p>
                                            <p class="deadline alive w-2/12 deadline alive flex justify-center text-red-500"><input value=${div.deadline} style="display:none;"></p>
                                            <p class="w-1/12 flex justify-center">요청</p>
                                        </div>`;
                    interviewWrap1.innerHTML += interviewDiv;

                    countDeadline();
                    setInterval(() => {
                        countDeadline();
                    }, 1000);

                } else { 
                    const interviewDiv = `<div class="flex p-3 justify-around text-sm text-black w-full space-x-10">
                                                <p class="w-3/12 flex justify-center">${div.name}</p>
                                                <p class="${div.id} w-8/12 flex justify-center cursor-pointer text-blue-500" onclick="clickBtn(this)">${div.title}</p>
                                                <p class="w-1/12 flex justify-center text-red-500">만기</p>
                                        </div>`;
                    interviewWrap2.innerHTML += interviewDiv;
                }
            });

            const responseList = {1:"수락", 2:"거절", 3:"보류"};

            data.data[1].forEach(async div=> {
                const interviewDiv = `<div class="flex p-3 justify-around text-sm text-black w-full space-x-10" href="/interview/get-interview/${div.id}}">
                                      <p class="w-3/12 flex justify-center">${div.name}</p>
                                      <p class="${div.id} w-8/12 flex justify-center cursor-pointer text-blue-500" onclick="clickBtn(this)">${div.title}</p>
                                      <p class="w-1/12 flex justify-center">${responseList[div.response]}</p>
                                </div>`;
                interviewWrap2.innerHTML += interviewDiv;
            })
      });

      const answered = () => {
        document.getElementById("interviewWrap1").style.display = "none";
        document.getElementById("interviewWrap2").style.display = "block";
      };

      const request = () => {
        document.getElementById("interviewWrap1").style.display = "block";
        document.getElementById("interviewWrap2").style.display = "none";
      };

      document.getElementById("answered").addEventListener("click", answered);
      document.getElementById("request").addEventListener("click", request);
  }
};

// 2022-08-18T17:22:56
const countDeadline = () => {
  let today = new Date();

  const deadlineTag = document.querySelectorAll(".deadline.alive");
  deadlineTag.forEach((tag, i) => {
    const deadline = tag.firstChild;
    console.log(deadline);
    const yearToDay = deadline.value
      .split("T")[0]
      .split("-")
      .map((x) => Number(x));
    const timeToSec = deadline.value
      .split("T")[1]
      .split(":")
      .map((x) => Number(x));

    let end = new Date(
      yearToDay[0],
      yearToDay[1] - 1,
      yearToDay[2],
      timeToSec[0],
      timeToSec[1],
      timeToSec[2]
    );
    let gap = end.getTime() - today.getTime(); //sec

    // 만료
    if (gap <= 0) {
      // 포스트 요청 보내고
      const dataTag = tag.previousElementSibling;

      fetch(
        `${BASE_URL}/interview/update-reply/` +
          dataTag.classList[0],
        {
          method: "PATCH", // 또는 'PUT'
        }
      )
        .then((response) => response.json())
        .then((data) => {
          alert(dataTag.innerText + "인터뷰 만료");
        })
        .catch((error) => {
          console.error("실패:", error);
        });

      // 태그 업데이트 중단
      // alive 클래스 remove
      tag.classList.remove("alive");
      tag.innerHTML = "기한 만료";
    } else {
      const days = Math.floor(gap / (1000 * 60 * 60 * 24)); // 일
      const hour = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ); // 시
      const minutes = String(Math.floor((gap / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      ); // 분
      const second = String(Math.floor((gap / 1000) % 60)).padStart(2, "0"); // 초

      let innerLine = "";
      if (days) innerLine += `D-${days}`;
      else innerLine += `${hour}h ${minutes}m ${second}s`;


      deadlineTag[
        i
      ].innerHTML = `<input value=${deadline.value} style="display:none;"></input>${innerLine}`;
    }
  })
};

const clickBtn = (obj) => {

    const id = obj.classList[0];
    console.log(id);
    window.localStorage.setItem('id', id);
    window.location.href = "./4-proposal-get.html";
}


//     console.log(id);

//     const token = localStorage.getItem("token");

//     fetch(`${BASE_URL}/interview/get-interview/${id}`, {
//         method:'GET',
//         headers:{
//             'Content-Type' : 'application/json',
//             'Authorization' : token
//         }
//     })
//     .then((response) => response.json())
//     .then((data) => {

//         window.localStorage.setItem('data', JSON.stringify(data.data));
//         window.location.href = "./4-proposal-get.html";
//     })
// }

