
window.onload = () => {

  fetch("http://may-i-server.o-r.kr:8000/interview/get-interview/15 ", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "b93590dad6fe00de55a7088efa39c42dd12cf6ee",
      }
  }).then((response) => response.json()).then((data) => {

      console.log(data.data) 

      //전문가일때(is_report==0)는 보낸이/리포터이름, 일반일일때(is_report==1)는 받는이/전문가이름
      if (data.data.is_report == 0) {
          document.querySelector('#recipientOrsender').innerHTML += `<p class="font-semibold py-2">보낸이</p>`
          document.querySelector('#name').innerHTML += `<p class="w-full text-base font-normal outline-none text-black py-2 px-4">${data.data.reporter_user}</p>`
          document.querySelector('#button').innerHTML += `
          <button class="border p-2 w-28 rounded-full text-black" value="2" onclick="checkedInterview(${data.data.id}, 2)">거절</button>
          <button class="border p-2 w-28 rounded-full text-black" value="3" onclick="checkedInterview(${data.data.id}, 3)">보류</button>
          <button class="border bg-violet-300 p-2 w-28 rounded-full text-black value="1" onclick="checkedInterview(${data.data.id}, 1)">수락</button>`
  

      } else {
          document.querySelector('#recipientOrsender').innerHTML += `<p class="font-semibold py-2">받는이</p>`
          document.querySelector('#name').innerHTML += `<p class="w-full text-base font-normal outline-none text-black py-2 px-4">${data.data.expert_name}</p>`
      }

      document.querySelector('#title').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.title}</p>`
      //document.querySelector('#department').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.department}</p>`
      document.querySelector('#purpose').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.purpose}</p>`
      if(`${data.data.method}` == 1 ){
        document.querySelector('#method').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">대면</p>`
      } else if (`${data.data.method}` == 2) {
        document.querySelector('#method').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">서면</p>`
      } else {
        document.querySelector('#method').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">전화</p>`
      }
      document.querySelector('#amount').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.amount}</p>`
      document.querySelector('#body').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.body}</p>`
      document.querySelector('#file').innerHTML += `<a class="w-full px-4 text-base font-normal outline-none text-black py-2" href="${data.data.file}" target="_blank"></p>`
      document.querySelector('#url').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.url}</p>`
          
      
  });



}


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
  fetch(`http://may-i-server.o-r.kr:8000/interview/checked-interview/${interviewId}`, {
  method: 'PATCH',
  body: JSON.stringify({
    response: buttonValue,
    hold_reason: "",
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log('성공:', json);
    })

    .catch((error) => {
    console.error('실패:', error);
    });
  
}




