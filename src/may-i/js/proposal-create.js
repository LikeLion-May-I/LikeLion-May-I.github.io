const BASE_URL = "http://may-i-server.o-r.kr:8000"
const createData = JSON.parse(localStorage.getItem('data'))

window.onload = () => {
  
  //  여기서 local storage 에 저장한 받는이 전문가 id 값 가져오기
  let expertName = createData["expert_name"]

  // 포스트 버튼 달 때
  document.querySelector('#expert_name').innerHTML += `<p class="w-full text-base font-normal outline-none text-black py-2 px-4">${expertName}</p>`

  // input date 현재시간 이후로
  let dateElement = document.querySelector('#dateValue');
  let date = new Date(new Date().getTime()+(1000*60*60*24) - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, -5);
  dateElement.value = date;
  dateElement.setAttribute("min", date);

}



const changeFileName = (obj) => {
  document.querySelector('#fileName').innerHTML = obj.files[0].name
}


const formFetching = () => {
  const updateInterviewForm = document.updateInterviewForm;
  
  let interviewId = String(createData["id"]);

  // experUserId = localStorage.getItem("experUserId");
  
  const formActionUrl = `${BASE_URL}/interview/update-interview/` + interviewId

  if(!updateInterviewForm.method.value) {
    alert("인터뷰 방식을 입력해주세요!");
    return false;
  }
  // else if (!updateInterviewForm.title.value) alert("제목을 입력해주세요!");
  // else if (!updateInterviewForm.body.value) alert("본문을 입력해주세요!");
  // else if (!updateInterviewForm.deadline.value) alert("본문을 입력해주세요!");
  
  else{

      let formData = new FormData(updateInterviewForm)
      
      fetch(formActionUrl, {
        method: 'POST', // 또는 'PUT'
        body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
        let saveOnTag = document.querySelector("#saveOn");
        saveOnTag.innerHTML = "저장 완료"

      })
      .catch((error) => {
        console.error('실패:', error);
      });

  }

}

const clickSend = () => {
  let saveOnTag = document.querySelector("#saveOn");

  if(saveOnTag.innerHTML == "저장 완료"){
  
  // // const experUserId = createData["expert_id"]
  const token = localStorage.getItem("token");
  const interviewId = String(createData["id"]);
  console.log(interviewId)
  fetch(`${BASE_URL}/interview/send-interview/` + interviewId, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        alert("인터뷰 요청 완료!");
        window.location.href = "./5-interview-list-reporter.html"

    })
    .catch((error) => {
        console.error('실패:', error);
    });
  } else {
    alert("임시저장을 먼저 진행해주세요!");
  }

}