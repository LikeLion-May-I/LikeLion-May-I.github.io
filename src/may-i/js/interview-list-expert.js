const BASE_URL = "http://may-i-server.o-r.kr:8000"

window.onload = () => {

  const token = localStorage.getItem("token");
    if(!token){
        alert("로그인이 필요합니다!")
        window.location.href = "./1-choice.html" ;
    } else {
      fetch(`${BASE_URL}/profile/get-apply-list-for-expert/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          }
      }).then((response) => response.json()).then((data) => {

          console.log(data.data)

          const interviewWrap1 = document.getElementById("interviewWrap1")
          const interviewWrap2 = document.getElementById("interviewWrap2")
          interviewWrap2.style.display = "none";

          for(div of data.data[0]){
              if(`${div.is_expired}` == 0) {
                  //요청 인터뷰
                  const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="./proposal-get.html}">
                                      <p>${div.department}</p>
                                      <p>${div.title}</p>
                                      <p>${div.deadline}</p>
                                      <p>요청</p>
                              </a>`
                  interviewWrap1.innerHTML += interviewDiv
              } 
          }

          for(div of data.data[1]){
              if(`${div.response}` == 1){
                  const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/interview/get-interview/${div.id}}">
                                      <p>${div.department}</p>
                                      <p>${div.title}</p>
                                      <p>수락</p>
                              </a>`
                  interviewWrap2.innerHTML += interviewDiv
              }
              else if(`${div.response}` == 2) {
                  const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/interview/get-interview/${div.id}}">
                  <p>${div.department}</p>
                  <p>${div.title}</p>
                  <p>거절</p>
                  </a>`
                  interviewWrap2.innerHTML += interviewDiv
              }
              else if(`${div.response}` == 3) {
                  const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/interview/get-interview/${div.id}}">
                  <p>${div.department}</p>
                  <p>${div.title}</p>
                  <p>보류</p>
                  </a>`
                  interviewWrap2.innerHTML += interviewDiv
              }

              if(`${div.is_expired}` == 1) {
                  const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/interview/get-interview/${div.id}}">
                  <p>${div.name}</p>
                  <p>${div.title}</p>
                  <p>만료</p>
                  </a>`
                  interviewWrap2.innerHTML += interviewDiv
              }

          }

          const answered = () => {
              document.getElementById("interviewWrap1").style.display = "none";
              document.getElementById("interviewWrap2").style.display = "block";
          }

          const request = () => {
              document.getElementById("interviewWrap1").style.display = "block";
              document.getElementById("interviewWrap2").style.display = "none";
          }

          document.getElementById('answered').addEventListener("click", answered) 
          document.getElementById('request').addEventListener("click", request)

      });
    

    }


}


