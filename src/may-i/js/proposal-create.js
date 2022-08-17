
window.onload = () => {

  const createData = localStorage.getItem("data");
  //  여기서 local storage 에 저장한 받는이 전문가 id 값 가져오기
  // let expertName = "김명명";
  // let experUserId = 1;
  // let interviewId = String(2);
  let expertName = createData["expert_name"]
  let experUserId = createData["expert_id"]
  let interviewId = String(createData["id"]);
  
  // experUserId = localStorage.getItem("experUserId");

  
  // experUserId = localStorage.getItem("experUserId");

  document.querySelector('#expert_name').innerHTML += `<p class="w-full text-base font-normal outline-none text-black py-2 px-4">${expertName}</p>`

  const formActionUrl = "http://127.0.0.1:8000/interview/update-interview/" + interviewId
  
  // submit 할경우 인터뷰 업데이트
  const updateInterviewForm = querySelector('#updateInterviewForm').innerHTML += `<p class="w-full text-base font-normal outline-none text-black py-2 px-4">${expertName}</p>`
  updateInterviewForm.setAttribute('action',formActionUrl);

  // send 할 경우 expertUserId 이어붙이고 fetch
}

const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // 또는 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
  console.log('성공:', data);
})
.catch((error) => {
  console.error('실패:', error);
});



const clickBtn = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {

        console.log(data)

    });

}

const changeFileName = (obj) => {


  document.querySelector('#fileName').innerHTML = obj.files[0].name

}


