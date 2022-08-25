
const BASE_URL = "https://may-i-server.herokuapp.com"
// const BASE_URL = "http://may-i-server.o-r.kr:8000"
// const BASE_URL = "http://127.0.0.1:8000"


window.onload = () => {

    fetch(`${BASE_URL}/profile/get-profile-all/5`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
    }).then((response) => response.json()).then((data) => {
        
        const profileAllWrap = document.querySelector("#profile")
        data.data.filter(x => !x.is_report).forEach((div, index) => {
            var reply_rate = div.reply_rate;


            if(reply_rate < 0){
                reply_rate = "정보 없음";
            }else{
                reply_rate = reply_rate + "%";
            }

            var reply_time = div.reply_time;
            
            if(reply_time <0){
                reply_time = "정보 없음";
            }else{
                if (reply_time > 60){
                    reply_time = String(int(reply_time / 60) + 1) + "시간 이내";
                }else if (reply_time < 30){
                    reply_time = "30분 이내";
                }else{
                    reply_time = "1시간 이내"
                }
            }

            const loadedLastlogin = new Date(div.last_login);
            const today = new Date()

            const timedelta = today.getTime() - loadedLastlogin.getTime();
            
            const timedeltaform = Math.floor(Math.abs(timedelta / (1000 * 60 * 60 ))) + 1;
            console.log(timedeltaform);


            if (timedeltaform > 24){
                last_login = Math.floor(timedeltaform / 24) + "일";
                console.log(last_login);
            }else{
                last_login = timedeltaform + "시간";
            }

            console.log(last_login);

            // const formattedTime = `${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`

            // console.log(formattedTime);
            
            const aTagUrl = "/profile/get-profile-one/"+String(div.id)
            const profileDiv = `
                                <div class="${div.id} w-18 py-10" onclick="clickBtn(this)">
                                    <div class="bg-white shadow-2xl rounded-2xl p-4" style="cursor:pointer">
                                        <div class="flex mb-3 justify-end">
                                            <img src="http://static.shuffle.dev/uploads/files/9c/9c9ade69edd44a529fec17278e5819cee4339b5a/verified-user-FILL0-wght400-GRAD0-opsz48-1.svg" alt=""/>
                                        </div>
                                        <div class="flex items-center mb-4">
                                            <div class="rounded-full object-cover">
                                                <img 
                                                    src=${baseUrl}${div.img}
                                                    alt=""
                                                    width="90"
                                                    height="90"
                                                />
                                            </div>
                                            <div class="pl-4">
                                                <p class="font-bold">${div.name}</p>
                                                <p class="text-gray-700 w-48">${div.department}</p>
                                            </div>
                                        </div>
                                        <div class="flex w-80" id="tagWrap${index}">
                                        </div>
                                        <div class="flex justify-evenly space-x-2">
                                            <img 
                                                src="./img/comment.svg"
                                                alt=""
                                                width="20"
                                                height="18"
                                            />
                                            <p>${reply_rate}</p>
                                            <img
                                                src="./img/response-time.svg"
                                                alt=""
                                                width="20"
                                                height="18"
                                            />
                                            <p>${reply_time}</p>
                                            <img 
                                                src="./img/history.svg"
                                                alt=""
                                                width="20"
                                                height="18"
                                            />
                                            <p>최근 ${last_login} 이내</p>
                                        </div>
                                    </div>
                                </div>`
                        
                            
            // <p class="leading-loose mb-5 border-2 rounded-full text-center text-black w-24">${div.tag}</p>

            profileAllWrap.innerHTML += profileDiv
            
            console.log(div.tag)

            const hashArr = div.tag.split(' ');
            hashArr.slice(0,5).forEach(hash=>{
                const selector = `#tagWrap${index}`
                const hashTag =`<p class="leading-loose mb-5 border-2 rounded-full text-center text-black w-24 ml-1.5">${hash}</p>`
                document.querySelector(selector).innerHTML += hashTag
            });

        })

    });

}

const clickBtn = (obj) => {
    const id = obj.classList[0];

    console.log(id);

    fetch(`${BASE_URL}/profile/get-profile-one/${id}`, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then((response) => response.json())
    .then((data) => {
        window.localStorage.setItem('data', JSON.stringify(data.data));
        window.location.href = "./3-profile-detail.html";
    })


}