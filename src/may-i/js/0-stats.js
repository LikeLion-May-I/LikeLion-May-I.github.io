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
          {stats.map((stat) => (
            <div class="md:w-1/3 border-b border-gray-100 px-3 py-4 md:p-10 text-center">
              <Image src={stat.src} width={200} height={200} />
              <p class="mt-3 text-3xl md:text-5xl tracking-tight font-bold text-indigo-500">
                {stat.number}
              </p>
              <p class="mt-2 text-md md:text-lg leading-6 font-medium text-gray-500">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>`;
  
    document.querySelector("#statsDiv").innerHTML = stats;
  });