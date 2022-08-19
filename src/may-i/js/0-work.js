window.addEventListener("load", () => {
    const work = `  <div class="relative py-24">
    <div class="mx-auto text-center">
      <h2 class="text-xl md:text-3xl font-bold text-gray-900 sm:text-4xl sm:tracking-tight">
        <p class="font-bold mx-1 inline text-indigo-500">May I</p>를
        이렇게 이용하세요
      </h2>
    </div>
    <div class="mx-auto max-w-[1000px] flex w-full h-auto py-12">
      <div class="mx-6 w-1/2">
        <h1 class="text-lg md:text-2xl font-bold">
          원하는 전문가를 찾아 취재요청을 해봐요
        </h1>
        <div class="my-4 w-full flex text-sm md:text-lg font-medium text-gray-500">
          <span>
            응답률과 평균 응답 속도를 통해 효율적인 인터뷰 요청을 이어가요
          </span>
        </div>
      </div>
      <div class="w-1/2">
        <Image
          src="./img/work1.svg"
          width={1000}
          height={700}
          objectPosition="center"
        />
      </div>
    </div>
    <div class="mx-auto max-w-[1000px] flex w-full h-auto py-12">
      <div class="mx-6 w-1/2">
        <Image
          src="./img/work3.svg"
          width={1000}
          height={850}
          objectPosition="center"
        />
      </div>
      <div class="mx-6 w-1/2">
        <h1 class="text-lg md:text-2xl font-bold">
          May I 제안서를 보내요
        </h1>
        <div class="my-4 w-full flex text-sm md:text-lg font-medium text-gray-500">
          <span>세부내용과 기한을 담은 제안서를 전송해요</span>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-[1000px] flex w-full h-auto py-12">
      <div class="mx-6 w-1/2">
        <h1 class="text-lg md:text-2xl font-bold">
          인터뷰 목록에서 진행 상황을 살펴봐요
        </h1>
        <div class="my-4 w-full flex text-sm md:text-lg font-medium text-gray-500">
          <span>
            인터뷰 진행 상황을 확인하며 간편한 절차로 인터뷰를 마무리 할 수
            있어요
          </span>
        </div>
      </div>
      <div class="mx-6 w-1/2">
        <Image
          src="./img/work4.svg"
          width={1000}
          height={300}
          objectPosition="center"
        />
        <Image
          src="./img/work5.svg"
          width={1000}
          height={300}
          objectPosition="center"
        />
        <Image
          src="./img/work6.svg"
          width={1000}
          height={300}
          objectPosition="center"
        />
      </div>
    </div>
  </div>`;
  
    document.querySelector("#workDiv").innerHTML = work;
  });