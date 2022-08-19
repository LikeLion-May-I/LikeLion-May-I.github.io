window.onload = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("로그인이 필요합니다!");
    window.location.href = "./1-choice.html";
  } else {
    fetch(
      "http://may-i-server.o-r.kr:8000/profile/get-apply-list-for-reporter/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "7d1f8745f728e7135041cd8ef8acceb908598006",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        const interviewWrap = document.querySelector("#interviewWrap");
        data.data.forEach(async (div) => {
          const interviewDiv = `<div class="flex p-3 justify-around text-base text-black w-full space-x-10" href="./proposal-get.html}">
                                        <p>${div.name}</p>
                                        <p class=${div.id}>${div.title}</p>
                                        <p class="deadline alive"><input value=${div.deadline} style="display:none;"></p>
                                        <p>요청</p>
                                    </div>`;
          interviewWrap.innerHTML += interviewDiv;
        });

        countDeadline();
        setInterval(() => {
          countDeadline();
        }, 1000);
      });
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
        "http://may-i-server.o-r.kr:8000/interview/update-reply/" +
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
