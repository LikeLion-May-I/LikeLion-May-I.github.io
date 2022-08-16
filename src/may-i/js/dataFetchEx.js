

window.onload = () => {

    fetch("http://127.0.0.1:8000/profile/get-apply-answered-all-for-expert/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "94a82e52d055ab749d7f6eeb3f41eda3abaa7f90",
        }
    }).then((response) => response.json()).then((data) => {

        console.log(data.data) 
        const interviewWrap = document.querySelector('#interviewWrap')
        for(div of data.data){
            const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/interview/get-interview/2}">
                                    <p>${div.department}</p>
                                    <p>${div.title}</p>
                                    <p>${div.response}</p>
                                    <pclass="pl-5">${div.id}</p>
                                    
                            </a>`
            interviewWrap.innerHTML += interviewDiv
                    
        } 


    });
 


}


const clickBtn = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {

        console.log((data))

    });

}


