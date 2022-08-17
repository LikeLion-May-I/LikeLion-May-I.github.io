
window.onload = () => {

    fetch("http://127.0.0.1:8000/interview/get-interview/6", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "20f832b6c987d545cb53137e386706bee776d08f",
        }
    }).then((response) => response.json()).then((data) => {

        console.log(data.data) 
        
        if (data.data.is_report == 0) {
            document.querySelector('#recipientOrsender').innerHTML += `<p class="font-semibold py-2">보낸이</p>`
            document.querySelector('#expert_name').innerHTML += `<p class="w-full text-base font-normal outline-none text-black py-2 px-4">${data.data.reporter_user}</p>`

        } else {
            document.querySelector('#recipientOrsender').innerHTML += `<p class="font-semibold py-2">받는이</p>`
            document.querySelector('#expert_name').innerHTML += `<p class="w-full text-base font-normal outline-none text-black py-2 px-4">${data.data.expert_name}</p>`
        }
            
        document.querySelector('#title').innerHTML += `<input class="w-full text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input py-2 px-4" type="text" placeholder="${data.data.title}"/>`
        document.querySelector('#department').innerHTML += `<p class="w-full px-4 text-base font-normal outline-none text-black py-2">${data.data.department}</p>`
        document.querySelector('#purpose').innerHTML += `<input class="w-full px-4 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg py-2" type="text" placeholder="${data.data.purpose}"/>`
        //형식 어떻게 하냐아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
        document.querySelector('#amount').innerHTML += `<input
        class="w-full px-4 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg py-2" type="text" placeholder="${data.data.amount}"/>`
        document.querySelector('#body').innerHTML += `<textarea
        class="block w-full p-6 text-base text-coolGray-900 font-normal outline-none border border-coolGray-200 rounded-lg resize-none h-80 py-2" placeholder="${data.data.body}"></textarea>`
        document.querySelector('#url').innerHTML += `<input class="w-full px-4 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg py-2" type="text" placeholder="${data.data.url}"/>`
    });
 


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

        console.log((data))

    });

}


