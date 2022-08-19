
window.addEventListener('load', () => {

    const myPageSideBar = `
    
        <div class="bg-white w-48 flex p-5 space-x-3">
          <div class="flex-col justify-center">
            <div class="justify-center">
              <p class="text-center mb-4 font-bold">Reporter</p>
              <ul class="mb-8 text-sm font-medium">
                <li>
                  <a
                    class="flex items-center px-7 py-3 hover:bg-indigo-50 rounded text-black border-b-2"
                    href="#"
                  >
                    <span contenteditable="false">요청 인터뷰</span>
                  </a>
                </li>
                <li>
                  <a
                    class="flex items-center px-7 py-3 hover:bg-indigo-50 rounded text-black border-b-2"
                    href="#"
                  >
                    <span contenteditable="false">인터뷰 현황</span>
                  </a>
                </li>
                <li>
                  <a
                    class="flex items-center px-7 py-3 hover:bg-indigo-50 rounded text-black"
                    href="#"
                  >
                    <span contenteditable="false">내 프로필</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>`


        document.querySelector('#myPageSideBar').innerHTML = myPageSideBar;

})