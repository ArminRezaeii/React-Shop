export default function SwiperButton(props) {
    return <div className='w-[50%] h-full flex items-center justify-center gap-x-4 mx-auto'>
        <svg onClick={() => props.swiperRef.current.slidePrev()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => props.swiperRef.current.slideNext()} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
    </div>
}