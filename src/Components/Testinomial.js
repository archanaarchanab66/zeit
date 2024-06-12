import React from 'react'
import plane from '../assests/paper-plane.png'
import women from '../assests/women.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
/*import { Autoplay, Pagination, Navigation } from 'swiper/modules';*/
import { FreeMode, Pagination} from 'swiper/modules';



const Testinomial = () => {
  
  return (
    <div className='mb-12'>
      <h1 className='mb-4 font-serif text-6xl font-medium text-center'>What People Say About Us</h1>
      <h3 className='mb-6 font-serif text-xl text-center text-gray-600'>This part of testimonials helps to know about our process and services which are delivered that speaks for itself</h3>
      <div>
        <>
      <Swiper 
        slidesPerView={3}
        spaceBetween={70}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
        <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
    <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
        <path
            d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
        </path>
    </svg>
    <blockquote class="relative">
        <p class="text-lg tracking-tight text-slate-900 font-serif">
            Awesome idea. Can't wait to see how this turns out!
        </p>
    </blockquote>
    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6 font-serif">
        <div>
            <div class="font-display text-base text-slate-900">Exmaple name</div>
            <div class="mt-1 text-sm text-slate-500">Job designation</div>
        </div>
        <div class="overflow-hidden rounded-full bg-slate-50">
            <img alt="" src="https://i.pravatar.cc/300" class="h-14 w-14 object-cover" loading="lazy" width="56" height="56"/>
        </div>
    </figcaption>
</figure>
        </SwiperSlide>
        <SwiperSlide >
        <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
    <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
        <path
            d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
        </path>
    </svg>
    <blockquote class="relative">
        <p class="text-lg tracking-tight text-slate-900 font-serif">
            Awesome idea. Can't wait to see how this turns out!
        </p>
    </blockquote>
    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6 font-serif">
        <div>
            <div class="font-display text-base text-slate-900">Exmaple name</div>
            <div class="mt-1 text-sm text-slate-500">Job designation</div>
        </div>
        <div class="overflow-hidden rounded-full bg-slate-50">
            <img alt="" src="https://i.pravatar.cc/300" class="h-14 w-14 object-cover" loading="lazy" width="56" height="56"/>
        </div>
    </figcaption>
</figure>
        </SwiperSlide>
       
        <SwiperSlide >
        <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 font-serif">
    <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
        <path
            d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
        </path>
    </svg>
    <blockquote class="relative">
        <p class="text-lg tracking-tight text-slate-900">
            Awesome idea. Can't wait to see how this turns out!
        </p>
    </blockquote>
    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
        <div>
            <div class="font-display text-base text-slate-900">Exmaple name</div>
            <div class="mt-1 text-sm text-slate-500">Job designation</div>
        </div>
        <div class="overflow-hidden rounded-full bg-slate-50">
            <img alt="" src="https://i.pravatar.cc/300" class="h-14 w-14 object-cover" loading="lazy" width="56" height="56"/>
        </div>
    </figcaption>
</figure>
        </SwiperSlide>
       
        <SwiperSlide >
        <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 font-serif">
    <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
        <path
            d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
        </path>
    </svg>
    <blockquote class="relative">
        <p class="text-lg tracking-tight text-slate-900">
            Awesome idea. Can't wait to see how this turns out!
        </p>
    </blockquote>
    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
        <div>
            <div class="font-display text-base text-slate-900">Exmaple name</div>
            <div class="mt-1 text-sm text-slate-500">Job designation</div>
        </div>
        <div class="overflow-hidden rounded-full bg-slate-50">
            <img alt="" src="https://i.pravatar.cc/300" class="h-14 w-14 object-cover" loading="lazy" width="56" height="56"/>
        </div>
    </figcaption>
</figure>
        </SwiperSlide>
       
        <SwiperSlide >
        <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 font-serif">
    <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
        <path
            d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
        </path>
    </svg>
    <blockquote class="relative">
        <p class="text-lg tracking-tight text-slate-900">
            Awesome idea. Can't wait to see how this turns out!
        </p>
    </blockquote>
    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
        <div>
            <div class="font-display text-base text-slate-900">Exmaple name</div>
            <div class="mt-1 text-sm text-slate-500">Job designation</div>
        </div>
        <div class="overflow-hidden rounded-full bg-slate-50">
            <img alt="" src="https://i.pravatar.cc/300" class="h-14 w-14 object-cover" loading="lazy" width="56" height="56"/>
        </div>
    </figcaption>
</figure>
        </SwiperSlide>
       
      </Swiper>
    </>
        

    </div>
    </div>
  )
}

export default Testinomial