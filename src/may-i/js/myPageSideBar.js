
window.addEventListener('load', () => {

    const myPageSideBar = `
    
        <div class="bg-white w-36">
          <p class="p-4 font-bold">Reporter</p>
          <div class="flex-col">
            <ul class="mb-8 text-sm font-medium">
              <li>
                <a
                  class="flex items-center pl-3 py-3 hover:bg-indigo-50 rounded text-black pr-4 border-b-2"
                  href="#"
                >
                  <span contenteditable="false">요청 인터뷰</span>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center pl-3 py-3 pr-4 hover:bg-indigo-50 rounded text-black border-b-2"
                  href="#"
                >
                  <span contenteditable="false">인터뷰 현황</span>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center pl-3 py-3 pr-4 hover:bg-indigo-50 rounded text-black"
                  href="#"
                >
                  <span contenteditable="false">내 프로필</span>
                </a>
              </li>
            </ul>
          </div>
        </div>`


        document.querySelector('#myPageSideBar').innerHTML = myPageSideBar;

})