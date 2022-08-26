window.addEventListener("load", () => {
  const nav = `<nav class="max-w-[1000px] relative overflow-hidden flex mx-8 md:px-20 md:mx-auto justify-between p-5 bg-white">
        <link href="">
        <Image
            style="cursor: pointer"
            id="homeTab"
            src="./img/landing_page1_MayI_logo.svg"
            alt="logo"
            width={100}
            height={80}
        />
        </link>
        <div class="flex items-center ml-auto">
    <link href=‘#’>
            <a id="expertTap" style="cursor: pointer" class="hidden md:flex text-sm md:text-lg ml-[0.6rem] md:mr-10 hover:text-indigo-500 font-bold">
                Expert
            </a>
            </link>
        <div class="flex items-center ml-auto">
    <link href=‘#’>
            <a id="selectTap" style="cursor: pointer" class="hidden md:flex text-sm md:text-lg ml-[0.6rem] md:mr-10 hover:text-indigo-500 font-bold">
                Select
            </a>
            </link>

        <link href="/login">
            <a href="./1-choice.html" id="loginBtn" class="font-heading text-white font-bold inline-flex items-center justify-center px-[1rem] text-sm md:text-lg py-2 md:px-6 rounded-full transform duration-200 bg-indigo-300 hover:bg-indigo-500">
            Sign Up/In
            </a>
        </link>
        </div>
    </nav>
    `;

  document.querySelector("#navDiv").innerHTML = nav;

  const homeTab =  document.querySelector('#homeTab');
  const expertTap = document.querySelector('#expertTap');
  const selectTap =  document.querySelector('#selectTap');

  homeTab.addEventListener('click', () => {
    window.location.href = "./index.html" ;
  });

  expertTap.addEventListener('click', () => {
    window.location.href = "./1-select-expert.html";  
  })
  selectTap.addEventListener('click', () => {
    window.location.href = "./1-choice.html" ;
  });


  //토큰 있으면 sign in 버튼 바꾸기
  const token = localStorage.getItem("token");
  const is_report = localStorage.getItem("is_report");

  if(token){
    const loginBtn =  document.querySelector('#loginBtn');
    loginBtn.innerText = localStorage.getItem("profile_name") + "님";
  }

  if(is_report == 1){
    loginBtn.href = "./5-interview-list-reporter.html"; 
  }else{
    loginBtn.href =  "./5-interview-list-expert.html"; 
  }
});