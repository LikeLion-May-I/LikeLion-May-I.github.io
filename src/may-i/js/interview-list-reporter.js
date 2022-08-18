
window.onload = () => {

    fetch("http://may-i-server.o-r.kr:8000/profile/get-apply-request-all-for-reporter/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "5a6fd5a0f759438916a2739a34940abc372c31fb",
        }
    }).then((response) => response.json()).then((data) => {

        console.log(data.data)

        const interviewWrap = document.querySelector('#interviewWrap')
        for(div of data.data){

            const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/src/may-i/proposal-get.html}">
                                    <p>${div.department}</p>
                                    <p>${div.title}</p>
                                    <p>${div.deadline}</p>
                                    <p>${div.is_send}</p>

                                </a>`
            interviewWrap.innerHTML += interviewDiv
        } 

    });
}






