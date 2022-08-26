window.addEventListener("load", () => {
    const stats = ` <div class="max-w-[1000px] h-auto mx-auto py-12">
    <div class="mx-auto text-center">
  <h2 class="text-xl md:text-3xl font-bold text-gray-900 sm:text-4xl sm:tracking-tight">
        <p class="font-bold mx-1 inline text-indigo-500">May I</p>는
        이렇게 활동해요
      </h2>
    </div>
  
    <div class="mt-10 relative max-w-[1000px] mx-auto px-8">
      <div class="max-w-4xl mx-8 md:mx-20">
        <div class="block md:flex rounded-lg bg-white shadow-2xl">
          
            <div class="md:w-1/3 border-b border-gray-100 px-3 py-4 md:p-10 flex flex-col items-center">
              <Image src=./img/stats1.svg width={200} height={200} />
              <p class="mt-3 text-3xl md:text-3xl tracking-tight font-bold text-indigo-500">
                832명
              </p>
              <p class="mt-2 text-md md:text-lg leading-6 font-medium text-gray-500">
                신뢰할 수 있는 전문가
              </p>
            </div>
            <div class="md:w-1/3 border-b border-gray-100 px-3 py-4 md:p-10 flex flex-col items-center">
              <Image src=./img/stats2.svg width={200} height={200} />
              <p class="mt-3 text-3xl md:text-3xl tracking-tight font-bold text-indigo-500">
                78명
              </p>
              <p class="mt-2 text-md md:text-lg leading-6 font-medium text-gray-500">
                하루 평균 매칭
              </p>
            </div>
            <div class="md:w-1/3 border-b border-gray-100 px-3 py-4 md:p-10 flex flex-col items-center">
              <Image src=./img/stats3.svg width={200} height={200} />
              <p class="mt-3 text-3xl md:text-3xl tracking-tight font-bold text-indigo-500">
                96%
              </p>
              <p class="mt-2 text-md md:text-lg leading-6 font-medium text-gray-500">
                요청 응답률
              </p>
            </div>
        </div>
      </div>
    </div>
  </div>`;
  
    document.querySelector("#statsDiv").innerHTML = stats;
  });