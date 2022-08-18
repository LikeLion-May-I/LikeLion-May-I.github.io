
const baseUrl = "http://may-i-server.o-r.kr:8000"

window.onload = () => {

    fetch("http://may-i-server.o-r.kr:8000/profile/get-profile-all/5", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
    }).then((response) => response.json()).then((data) => {
        console.log(data.data)
        
        const profileAllWrap = document.querySelector("#profile")
        data.data.forEach((div, index) => {
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
            
            const aTagUrl = "/profile/get-profile-one/"+String(div.id)
            const profileDiv = `<a class="w-full lg:w-1/3" href= ${baseUrl}/profile/get-profile-one/${div.id}>
                                    <div class="bg-white shadow-2xl rounded-2xl p-5">
                                        <img class="flex mb-5 w-8 justify-end" src="https://static.shuffle.dev/uploads/files/9c/9c9ade69edd44a529fec17278e5819cee4339b5a/verified-user-FILL0-wght400-GRAD0-opsz48-1.svg" alt=""><div class="flex items-center mb-4">
                                        <img class="h-16 w-16 rounded-full object-cover" src=${baseUrl}${div.img} alt=""><div class="pl-4">
                                        <p class="text-xl font-bold md:w-1/3">${div.name}</p>
                                        <p class="text-gray-800">${div.department}</p>
                                        </div>
                                        </div>
                                        <div class="flex justify-around" id="tagWrap${index}"></div>
                                        <div class="flex space-x-2">
                                            <img src="https://static.shuffle.dev/uploads/files/9c/9c9ade69edd44a529fec17278e5819cee4339b5a/mode-comment-FILL0-wght400-GRAD0-opsz48-5.svg" alt="" class="w-6"><p>${reply_rate}</p>
                                            <img src="https://static.shuffle.dev/uploads/files/9c/9c9ade69edd44a529fec17278e5819cee4339b5a/schedule-FILL0-wght400-GRAD0-opsz48-5.svg" alt="" class="w-6"><p>${reply_time}</p>
                                            <img src="https://static.shuffle.dev/uploads/files/9c/9c9ade69edd44a529fec17278e5819cee4339b5a/history-FILL0-wght400-GRAD0-opsz48-5.svg" alt="" class="w-8"><p>최근${div.last_login}일 이내</p>
                                        </div>
                                    </div>
                                </div>`

            // <p class="leading-loose mb-5 border-2 rounded-full text-center text-black w-24">${div.tag}</p>
            

            profileAllWrap.innerHTML += profileDiv
            
            console.log(div.tag)

            const hashArr = div.tag.split(' ');
            hashArr.forEach(hash=>{
                const selector = `#tagWrap${index}`
                const hashTag =`<p class="leading-loose mb-5 border-2 rounded-full text-center text-black w-24">${hash}</p>`
                document.querySelector(selector).innerHTML += hashTag
            });

        })

    });

}