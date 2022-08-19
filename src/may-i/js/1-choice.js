const baseUrl = "http://may-i-server.o-r.kr:8000"


window.onload = () => {

  console.log("event")
    const cardList =  document.querySelectorAll('.card');
    cardList.forEach((card) => {
      card.addEventListener('click', (e)=>{
        
        console.log("event")
        // 숨겨놓은 id, pw 가져오기
        // 로그인 post 요청
        // set 토큰 해놓기
        //
        console.log(e.currentTarget)
        const hiddenValue = e.currentTarget.firstElementChild.value.split(" ");
        const loginActionUrl = `${baseUrl}/profile/login/`
        fetch(loginActionUrl, {
            headers: {
              "Content-Type": "application/json"
            },
            method: 'POST', // 또는 'PUT'
            body: JSON.stringify({
                "username": hiddenValue[0],
                "password": hiddenValue[1]
            })
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            
            let part = Number(hiddenValue[2]) ?  "리포터" : "전문가" 
            alert(`${data.profile_name} ${part}님으로 로그인 성공!`);
            localStorage.setItem("token", data.token);
            localStorage.setItem("profile_name", data.profile_name);
            localStorage.setItem("is_report", Number(hiddenValue[2]));
            
            if(Number(hiddenValue[2])){
              window.location.href = "./2-profile-list.html" 
            } else {
              window.location.href = "./5-interview-list-expert.html" 
            }
    
          })
          .catch((error) => {
            console.error('실패:', error);
          });
    
        
      })
    })
  
  }