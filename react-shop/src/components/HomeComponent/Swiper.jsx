import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useSelector } from 'react-redux';
import { products } from '../../store/features/data';
import { Pagination } from 'swiper/modules';
import { useRef } from 'react';
import SwiperButton from './SwiperButton';
import { Link } from 'react-router-dom';
function SwiperProduct() {
    const data = useSelector(products).slice(0, 5)
    const swiperRef = useRef()
    return (<>
        <Swiper loop={true} modules={[Navigation, Pagination]}
            onSwiper={(swiper) => {
                swiperRef.current = swiper
            }}
            spaceBetween={20} breakpoints={{

                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },


            }} className="w-full h-full flex items-center justify-center">
            {data.map((product) => {
                return <SwiperSlide>
                    <div key={product.id} class="lg:w-[100%]  items-center md:w-[100%]  w-[100%]  h-[430px]  group flex flex-col">
                        <div class="  relative overflow-y-hidden ">
                            <img src={product.image} />
                            <div
                                class="absolute  w-[100%] group-hover:top-[70%] ease-in duration-200 top-[100%]  items-center justify-center  bg-opacity h-[30%] flex flex-row gap-3 ">
                                <Link to={`/productdetails/${product.id}`}>
                                    <div
                                        class="w-8 h-8 flex justify-center items-center transition-all opacity-50 hover:opacity-100 cursor-pointer bg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white"
                                            class="w-5 text-blue-400 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </div>
                                </Link>

                                <div
                                    class="w-8 h-8 flex justify-center items-center transition-all opacity-50 hover:opacity-100 cursor-pointer bg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="white" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </div>
                                <div
                                    class="w-8 h-8 flex justify-center items-center transition-all opacity-50 hover:opacity-100 cursor-pointer bg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="white" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <div class="w-[100%] h-[45%] gap-y-2 flex flex-col  justify-center items-center">
                            <div class="  w-[100%] flex flex-col items-center justify-center gap-y-2">
                                <span class="text-textColor text-base">{product.brand}</span>
                                <Link to={`/productdetails/${product.id}`}> <span
                                    class="text-black  text-lg font-bold transition   duration-200 group-hover:text-mainColor">{product.name}</span></Link>
                                <span class="text-textColor text-base">${product.price}</span>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            })}
            <SwiperButton swiperRef={swiperRef} />
        </Swiper >




    </>)




}
export default SwiperProduct