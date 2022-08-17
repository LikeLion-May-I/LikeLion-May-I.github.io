const baseUrl = "http://may-i-server.o-r.kr:8000"

window.onload = () => {

    fetch("http://may-i-server.o-r.kr:8000/profile/get-profile-one/5", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
    }).then((response) => response.json()).then((data) => {
        console.log(data.data)

        var reply_rate = data.data.reply_rate;

        if(reply_rate < 0){
            reply_rate = "정보 없음";
        }else{
            reply_rate = reply_rate + "%";
        }

        var reply_time = data.data.reply_time;
        
        if(reply_time <0){
            reply_time = "정보 없음";
        }else{
            if (reply_time > 60){
                reply_time = String(int(reply_time / 60) + 1) + "시간 이내 응답";
            }else if (reply_time < 30){
                reply_time = "30분 이내 응답";
            }else{
                reply_time = "1시간 이내 응답"
            }
        }

        const profileWrap = document.querySelector('#profile');

        const profileDiv = `<div class="w-full flex px-6 justify-center">
        <div class="bg-white rounded-10 shadow-2xl flex">
          <div class="flex-col flex-wrap w-72 p-4">
            <div class="flex justify-center p-8">
              <Image 
                  src=${baseUrl}${data.data.img}
                  alt=""
                  width={150}
                  height={150}
              />
              </div>
            <h3 class="font-heading font-medium text-xl text-black text-center">${data.data.name}</h3>
            <p class="mb-7 text-lg text-black text-center">${data.data.department}</p>
            <div class="flex justify-center" id="tagWrap">
            </div>
          </div>
  
          <div class="flex-col p-10">
            <div class="w-full">
              <div class="bg-white rounded border p-4 mb-5">
                <div class="flex text-black justify-between">
                  <p class="font-semibold">학력</p>
                  <p>${data.data.background}</p>
                </div>
                <div class="flex text-black justify-between">
                  <p class="font-semibold">이메일</p>
                  <p>professor@cau.ac.kr</p>
                </div>
                <div class="flex justify-between text-black">
                  <p class="font-semibold">사무실</p>
                  <p>${data.data.office}</p>
                </div>
                <div class="flex justify-between">
                  <p class="font-semibold">연락처</p>
                  <p class="text-black">${data.data.phone}</p>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="bg-white rounded border mb-5 p-4">
                <h3 class="mb-5 font-heading font-bold text-black">이전 인터뷰 기록</h3>
                <div class="flex justify-between text-base space-x-4">
                  <p class="text-gray-900">“지속 가능한 블록체인 생태계에 대한 고찰”</p>
                  <p class="text-gray-900">2022/04/05</p>
                </div>
                <div class="flex justify-between text-base space-x-4">
                  <p class="text-gray-900">“중앙대 블록체인서비스연구센터, 블록체인 기반 연구 시작”</p>
                  <p class="text-gray-900">2021/12/11</p>
                </div>
              </div>
            </div>
            <button class="bg-indigo-300 w-full rounded-full mb-5 p-3 font-semibold" onclick="clickBtn()">취재 요청하기</button>
            <div class="flex justify-evenly text-base">
              <Image
                  src="https://static.shuffle.dev/uploads/files/9c/9c9ade69edd44a529fec17278e5819cee4339b5a/mode-comment-FILL0-wght400-GRAD0-opsz48-5.svg"
                  alt=""
                  width={20}
                  height={18}
              />
              <p>응답률 ${reply_rate}</p>
              <Image
                  src="https://static.shuffle.dev/uploads/files/9c/9c9ade69edd44a529fec17278e5819cee4339b5a/schedule-FILL0-wght400-GRAD0-opsz48-5.svg"
                  alt=""
                  width={20}
                  height={18}
              />
              <p>평균 ${reply_time}</p>
              <Image
                  src="https://static.shuffle.dev/uploads/files/9c/9c9ade69edd44a529fec17278e5819cee4339b5a/history-FILL0-wght400-GRAD0-opsz48-5.svg"
                  alt=""
                  width={20}
                  height={18}
              />
              <p>최근 ${data.data.last_login} 이내 활동</p>
            </div>
          </div>
        </div>
      </div>`

      profileWrap.innerHTML += profileDiv

      const hashArr = data.data.tag.split(' ');
      hashArr.forEach(hash=>{
        console.log(hashArr);
        const selector = `#tagWrap`
        const hashTag = `<p class="text-black border rounded-full text-center text-base w-20">${hash}</p>`
        document.querySelector(selector).innerHTML += hashTag
      });

    });

}

const clickBtn = () => {
    fetch(`${baseUrl}/interview/create-interview/5`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization' : "5a6fd5a0f759438916a2739a34940abc372c31fb",
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('성공:', data);
        confirm("인터뷰를 요청하시겠습니까?");
        window.localStorage.setItem('data', JSON.stringify(data.data));
        window.location.href = "./proposal-create.html";  
      })
        .catch((error) => {
        console.error('실패:', error);
        });
}