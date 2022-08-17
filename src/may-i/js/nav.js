
window.addEventListener('load', () => {

    const nav = 
    `<nav class="max-w-[1000px] relative overflow-hidden flex mx-8 md:px-20 md:mx-auto justify-between bg-white">
        <link href="#">
            <Image src="./img/landing_page1_MayI_logo.svg" alt="logo" width={100} height={80} />
        </link>
    <div class="flex items-center ml-auto">
        <link href=‘#’>
            <a class="hidden md:flex text-sm md:text-lg ml-[0.6rem] md:mr-10 hover:text-indigo-500 font-bold">
                Expert
            </a>
        </link>
        <div class="flex items-center ml-auto">
            <link href=‘#’>
            <a class="hidden md:flex text-sm md:text-lg ml-[0.6rem] md:mr-10 hover:text-indigo-500 font-bold">
                Reporter
            </a>
            </link>
            <div class="flex items-center ml-auto">
                <link href=‘#’>
                <a class="hidden md:flex text-sm md:text-lg ml-[0.6rem] md:mr-10 hover:text-indigo-500 font-bold">
                    Q&A
                </a>
                </link>
                <link href="#">
                <a
                    class="font-heading text-white font-bold inline-flex items-center justify-center px-[1rem] text-sm md:text-lg py-2 md:px-6 rounded-full transform duration-200 bg-indigo-300 hover:bg-indigo-500">
                    Sign Up/In
                </a>
                </link>
            </div>
        </nav>
    `

    document.querySelector('#navDiv').innerHTML = nav;

})