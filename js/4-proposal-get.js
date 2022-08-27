// const BASE_URL = "http://may-i-server.o-r.kr:8000";
const BASE_URL = "https://may-i-server.herokuapp.com"


window.onload = () => {

  var interviewId = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  console.log(interviewId);

  if(!token) {
    alert("로그인이 필요합니다!");
    window.location.href="./1-choice.html";
  } else {
    
    fetch(`${BASE_URL}/interview/get-interview/${interviewId}`, {
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        "Authorization" : token
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);

      //전문가일때(is_report==0)는 보낸이/리포터이름, 일반일일때(is_report==1)는 받는이/전문가이름
      if (data.data.is_report == 0) {
        document.querySelector(
          "#recipientOrsender"
        ).innerHTML += `<p class="font-semibold justify-end flex pr-2 py-5">보낸이</p>`;
        document.querySelector(
          "#name"
        ).innerHTML += `<p class="w-full text-base font-normal outline-none text-black justify-start px-4 py-3">${data.data.reporter_user}</p>`;
        document.querySelector("#button").innerHTML += `
          <button class="border p-2 w-28 rounded-full text-black" value="2" onclick="checkedInterview(${data.data.id}, 2)">거절</button>
          <button class="border p-2 w-28 rounded-full text-black" value="3" onclick="checkedInterview(${data.data.id}, 3)">보류</button>
          <button class="border bg-violet-300 p-2 w-28 rounded-full text-black value="1" onclick="checkedInterview(${data.data.id}, 1)">수락</button>`;
      } else {
        document.querySelector(
          "#recipientOrsender"
        ).innerHTML += `<p class="font-semibold justify-end flex pr-2 py-5">받는이</p>`;
        document.querySelector(
          "#name"
        ).innerHTML += `<p class="w-full text-base font-normal outline-none text-black justify-start px-4 py-3">${data.data.expert_name}</p>`;
      }

      document.querySelector(
        "#title"
      ).innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-3">${data.data.title}</p>`;
      //document.querySelector('#department').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.department}</p>`
      document.querySelector(
        "#purpose"
      ).innerHTML += `<p class="w-full px-3 text-base font-normal outline-none text-black justify-start py-2">${data.data.purpose}</p>`;
      if (`${data.data.method}` == 1) {
        document.querySelector(
          "#method"
        ).innerHTML += `<p class="w-full px-3 text-base font-normal outline-none text-black py-2">대면</p>`;
      } else if (`${data.data.method}` == 2) {
        document.querySelector(
          "#method"
        ).innerHTML += `<p class="w-full px-3 text-base font-normal outline-none text-black py-2">서면</p>`;
      } else {
        document.querySelector(
          "#method"
        ).innerHTML += `<p class="w-full px-3 text-base font-normal outline-none text-black py-2">전화</p>`;
      }
      document.querySelector(
        "#amount"
      ).innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.amount}</p>`;
      document.querySelector(
        "#body"
      ).innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.body}</p>`;
      if(data.data.file){
        document.querySelector(
          "#file"
        ).innerHTML += `<a class="w-full px-4 text-base font-normal outline-none text-black py-2" href="${BASE_URL}${data.data.file}">파일 확인하기</a>`;
      }
      
      document.querySelector(
        "#url"
      ).innerHTML += `<a class="w-full px-4 text-base font-normal outline-none text-black py-2" href="${data.data.url}">${data.data.url}</a>`;
      document.querySelector(
        "#deadline"
      ).innerHTML += `<p class="deadline alive text-base font-normal outline-none text-black px-3 py-3"><input value=${data.data.deadline} style="display:none;"></p>`;

      countDeadline();
      setInterval(() => {
        countDeadline();
      }, 1000);
    });
  }
};

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
      if (days) innerLine += `${days}d `;
      else if (hour != "00") innerLine += `${hour}d `;

      innerLine += `${minutes}m ${second}s`;

      deadlineTag[
        i
      ].innerHTML = `<input value=${deadline.value} style="display:none;"></input>${innerLine}`;
    }
  });
};
// const sendInterview = (interviewId) => {

//   var now = new Date();

//   const data = {
//     send_date: now,
//     check_date:null,
//     response:null,
//     hold_reason:null
//    };

//   fetch(`http://may-i-server.o-r.kr:8000/interview/send-interview/${interviewId}`, {
//   method: 'POST', // 또는 'PUT'
//   headers: {
//   'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
//   })
//   // .then((response) => response.json())
//   .then((data) => {
//   console.log('성공:', data);

//   })
//   .catch((error) => {
//   console.error('실패:', error);
//   });
// }

const checkedInterview = (interviewId, buttonValue) => {

  const valueHash = {1 : "수락", 2: "거절", 3:"보류"}

  var result = confirm(`정말로 ${valueHash} 하시겠습니까?`);
  if (result) {

    fetch(
      `${BASE_URL}/interview/checked-interview/${interviewId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          response: buttonValue,
          hold_reason: "",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        alert("완료되었습니다"); 
        console.log("성공:", json);
        window.location.href =
            "./5-interview-list-expert.html";

      })

      .catch((error) => {
        console.error("실패:", error);
      });

  }
};

