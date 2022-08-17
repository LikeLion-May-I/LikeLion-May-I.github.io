
window.onload = () => {

  fetch("http://may-i-server.o-r.kr:8000/interview/get-interview/15 ", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "5a6fd5a0f759438916a2739a34940abc372c31fb",
      }
  }).then((response) => response.json()).then((data) => {

      console.log(data.data) 

      //전문가일때는 보낸이/리포터이름, 일반일일때는 받는이/전문가이름
      if (data.data.is_report == 0) {
          document.querySelector('#recipientOrsender').innerHTML += `<p class="font-semibold py-2">보낸이</p>`
          document.querySelector('#name').innerHTML += `<p class="w-full text-base font-normal outline-none text-black py-2 px-4">${data.data.reporter_user}</p>`

      } else {
          document.querySelector('#recipientOrsender').innerHTML += `<p class="font-semibold py-2">받는이</p>`
          document.querySelector('#name').innerHTML += `<p class="w-full text-base font-normal outline-none text-black py-2 px-4">${data.data.expert_name}</p>`
      }
      //임시저장(is_send == 0)일 땐 버튼 O + input태그, 요청 상태일 땐 버튼 X + p 태그
      if (data.data.is_send == 1) {
        document.querySelector('#title').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.title}</p>`
        //document.querySelector('#department').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.department}</p>`
        document.querySelector('#purpose').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.purpose}</p>`
        //형식 어떻게 하냐아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
        document.querySelector('#amount').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.amount}</p>`
        document.querySelector('#body').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.body}</p>`
        document.querySelector('#file').innerHTML += `<a class="w-full px-4 text-base font-normal outline-none text-black py-2" href="${data.data.file}" target="_blank"></p>`
        document.querySelector('#url').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.url}</p>`
      } 
      else {
        //button
        document.querySelector('#button').innerHTML += `<button class="border p-2 w-28 rounded-full text-black" onclick="temporaryStorage(${data.data.id})">임시저장</button>
        <button class="border bg-violet-300 p-2 w-28 rounded-full text-black" onclick="sendInterview(${data.data.id})">전송</button>`

        document.querySelector('#title').innerHTML += `<input
        class="w-full text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input py-2 px-4"
        type="text"
        placeholder="${data.data.title}"
      />`
        //document.querySelector('#department').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.department}</p>`
        document.querySelector('#purpose').innerHTML += `<input
        class="w-full px-4 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg py-2"
        type="text"
        placeholder="${data.data.purpose}"
      />`
        //형식 어떻게 하냐아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
        document.querySelector('#amount').innerHTML += `<input
        class="w-full px-4 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg py-2"
        type="text"
        placeholder="${data.data.amount}"
      />`
        document.querySelector('#body').innerHTML += `<textarea
        class="block w-full p-6 text-base text-coolGray-900 font-normal outline-none border border-coolGray-200 rounded-lg resize-none h-80 py-2"
        placeholder="${data.data.body}"
      ></textarea>`
        document.querySelector('#file').innerHTML += `<a class="w-full px-4 text-base font-normal outline-none text-black py-2" href="${data.data.file}" target="_blank"></p>`
        document.querySelector('#url').innerHTML += `<input
        class="w-full px-4 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg py-2"
        type="text"
        placeholder="${data.data.url}"
      />`
      }
          
      
  });



}
//임시저장 post 함수
// const temporaryStorage = (interviewId) => {

//   const data = { 
//     id: interviewId,
//     title: $('#title').value,
//     method: $('#method').value,
//     purpose: $('#purpose').value,
//     body: $('#body').value,
//     amount: $('#amount').value,
//     // file: $('#file').value,
//     url: $('#url').value,
//     deadline: $('#deadline').value
//    };

//   fetch("/interview/update-interview/" + interviewId, {
//     method: 'POST', // 또는 'PUT'
//     headers: {
//     'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//     console.log('성공:', data);

//     })
//     .catch((error) => {
//     console.error('실패:', error);
    
//     });
// }

const sendInterview = (interviewId) => {

  var now = new Date();

  const data = { 
    send_date: now,
    check_date:null,
    response:null,
    hold_reason:null
   };

  fetch(`http://may-i-server.o-r.kr:8000/interview/send-interview/${interviewId}`, {
  method: 'POST', // 또는 'PUT'
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  })
  // .then((response) => response.json())
  .then((data) => {
  console.log('성공:', data);

  })
  .catch((error) => {
  console.error('실패:', error);
  });
}




