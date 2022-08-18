const baseUrl = "http://may-i-server.o-r.kr:8000"

window.onload = () => {
    
    const id = JSON.parse(localStorage.getItem('data')).id

    console.log(id);

    fetch("http://may-i-server.o-r.kr:8000/profile/get-profile-one/"+id, {
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

        const loadedLastlogin = new Date(data.data.last_login);
            const today = new Date()

            const timedelta = today.getTime() - loadedLastlogin.getTime();
            
            const timedeltaform = Math.floor(Math.abs(timedelta / (1000 * 60 * 60 * 24)));
            console.log(timedeltaform);


            if (timedeltaform > 24){
                last_login = Math.floor(timedelta / 24) + "일";
            }else{
                last_login = timedeltaform + "시간";
            }

        const profileWrap = document.querySelector('#profile');

        const profileDiv = `<div class="flex flex-wrap justify-center">
        <div class="w-1/2 py-10">
        <div class="bg-white rounded-2xl shadow-2xl flex p-5 space-x-3">
          <div class="flex-col justify-center">
          <div class="flex justify-center mb-7">
            <img src=${baseUrl}${data.data.img} alt="" width="150" />
          </div>
          <div class="mb-3">
            <h3 class="font-semibold text-black text-center">
              ${data.data.name}
            </h3>
            <p class="mb-7 text-sm text-black text-center w-44">
              ${data.data.department}
            </p>
          </div>
            <div class="flex" id="tagWrap">
            </div>
          </div>
  
          <div class="flex-col">
            <div class="w-full">
              <div class="bg-white rounded border p-4 mb-2">
                <div class="flex text-sm text-black justify-between">
                  <p class="font-semibold">학력</p>
                  <p>${data.data.background}</p>
                </div>
                <div class="flex text-sm text-black justify-between">
                  <p class="font-semibold">이메일</p>
                  <p>professor@cau.ac.kr</p>
                </div>
                <div class="flex text-sm text-black justify-between">
                  <p class="font-semibold">사무실</p>
                  <p>${data.data.office}</p>
                </div>
                <div class="flex text-sm justify-between">
                  <p class="font-semibold">연락처</p>
                  <p class="text-black">${data.data.phone}</p>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="bg-white rounded border mb-2 p-4">
                <h3 class="mb-2 font-semibold text-sm text-black">이전 인터뷰 기록</h3>
                <div class="flex justify-between text-sm space-x-2">
                  <p class="text-gray-900">“지속 가능한 블록체인 생태계에 대한 고찰”</p>
                  <p class="text-gray-900">2022/04/05</p>
                </div>
                <div class="flex justify-between text-sm space-x-2">
                  <p class="text-gray-900">“중앙대 블록체인서비스연구센터, 블록체인 기반 연구 시작”</p>
                  <p class="text-gray-900">2021/12/11</p>
                </div>
              </div>
            </div>
            
            <div class="flex justify-evenly mb-2 text-sm">
              <img
                src="/src/may-i/img/comment.svg"
                alt=""
                width="15"
              />
              <p>응답률 ${reply_rate}</p>
              <img
                src="/src/may-i/img/response-time.svg"
                alt=""
                width="17"              
              />
              <p>평균 ${reply_time}</p>
              <img
                src="/src/may-i/img/history.svg"
                alt=""
                width="17"
              />
              <p>최근 ${last_login} 이내 활동</p>
            </div>
            <div class="flex justify-end">
            <button
              class="text-white bg-indigo-300 w-28 text-center rounded-full p-2 font-semibold text-sm"
              onclick="clickBtn()"
            >
              취재 요청하기
            </button>
          </div>
          </div>`

      profileWrap.innerHTML += profileDiv

      const hashArr = data.data.tag.split(' ');
      hashArr.forEach(hash=>{
        console.log(hashArr);
        const selector = `#tagWrap`
        const hashTag = `<p class="text-black border rounded-full text-center text-xs w-16 p-1 ml-1.5">${hash}</p>`
        document.querySelector(selector).innerHTML += hashTag
      });

    });

}

const clickBtn = () => {

  if(confirm("인터뷰를 요청하시겠습니까?")){
    const id = JSON.parse(localStorage.getItem('data')).id

    fetch(`${baseUrl}/interview/create-interview/${id}`,{
      method:'POST',
      headers:{
          'Content-Type': 'application/json',
          'Authorization' : "5a6fd5a0f759438916a2739a34940abc372c31fb",
      }
    })
    .then((response) => response.json())
    .then((data) => {
        window.localStorage.setItem('data', JSON.stringify(data.data));
        window.location.href = "./4-proposal-create.html";  
      })
        .catch((error) => {
        console.error('실패:', error);
        });
  } 
    
}