const baseUrl = "http://may-i-server.o-r.kr:8000"
const createData = JSON.parse(localStorage.getItem('data'))

window.onload = () => {
  
  //  여기서 local storage 에 저장한 받는이 전문가 id 값 가져오기

  let expertName = createData["expert_name"]

  // 포스트 버튼 달 때
  let experUserId = createData["expert_id"]
  

  document.querySelector('#expert_name').innerHTML += `<p class="w-full text-base font-normal outline-none text-black py-2 px-4">${expertName}</p>`

}



const changeFileName = (obj) => {
  document.querySelector('#fileName').innerHTML = obj.files[0].name
}


const formFetching = () => {
  const updateInterviewForm = document.updateInterviewForm;
  
  let interviewId = String(createData["id"]);

  // experUserId = localStorage.getItem("experUserId");
  
  const formActionUrl = `${baseUrl}/interview/update-interview/` + interviewId

  console.log(formActionUrl)
  if(!updateInterviewForm.method.value){
    alert("인터뷰 방식을 선택해 주세요!");
  } else{

      let formData = new FormData(updateInterviewForm)

      fetch(formActionUrl, {
        method: 'POST', // 또는 'PUT'
        body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
        alert("임시저장 성공!");

      })
      .catch((error) => {
        console.error('실패:', error);
      });

  }

}