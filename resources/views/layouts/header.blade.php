<nav id="header" class="fixed w-full z-30 top-0 text-white">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div class="pl-4 flex items-center">
            <a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#">
                <img src="http://w3.poltekip.ac.id/image/logo.0dd8ff8.png" alt="Logo" class="z-[9999] h-24 w-auto">
            </a>
        </div>
        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content">
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
                {{-- <li class="mr-3">
          <a class="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
        </li> --}}
                {{-- <li class="mr-3">
          <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
        </li> --}}
            </ul>
            <button id="navAction" class="text-gray-800 z-[9999]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="h-12 w-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>
</nav>
<!--Hero-->
<div class="swiper mySwiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <a href=#><img class="w-full h-screen bg-gray-800"
                    src="https://new.poltekip.ac.id/storage/4XsGoP9gnE092PzHz7QIawjtVDLWpzG2jwf33MZN.jpg" alt="image" /></a>
        </div>
        <div class="swiper-slide">
            <a href=#><img class="w-full h-screen bg-gray-800"
                    src="https://new.poltekip.ac.id/storage/EzHkpyZ2DZakr6nPRpNKfRYhGuIfOXtZTza6E9gn.jpg" alt="image" /></a>
        </div>
        <div class="swiper-slide">
            <a href=#><img class="w-full h-screen bg-gray-800"
                    src="https://new.poltekip.ac.id/storage/wTCMBnVGZOflvdFnnwAZ3LQ2M8ZH4SQ0OvDx4wgO.jpg" alt="image" /></a>
        </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>