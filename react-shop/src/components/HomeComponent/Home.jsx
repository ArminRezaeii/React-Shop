import { useSelector } from "react-redux"
import backgroundIMage from "../../assets/images/asdsadsadsadsadsad.png"
import backgroundIMage2 from "../../assets/images/parallax-bg.png.webp"
import Prodcuts from "./Products"
import SwiperProduct from "./Swiper"

function Home() {
    return <main>

        <div style={{ backgroundImage: `url(${backgroundIMage})` }}
            class="w-[100%]   h-[758.92px] bg-center   items-end  justify-center flex bg-no-repeat  ">

            <div class="lg:w-[1110px]  md:w-[690px]   sm:w-[510px]  flex justify-between items-center h-[90%]">
                <div class=" w-[40%] hidden lg:block md:block sm:block bg h-[100%] bg-repeat bg-center bg-cover">
                    <img src={process.env.PUBLIC_URL + "/assets/images/hero-banner.png.webp"} />
                </div>
                <div class="gap-6 w-[100%] ml-5 lg:w-[52%] md:w-[52%] sm:w-[52%] flex flex-col  ">
                    <span class="text-textColor3 text-3xl">Shop is fun</span>
                    <span class="text-5xl text-textColor2">BROWSE OUR<br /> PREMIUM PRODUCT</span>
                    <span class="text-textColor text-base">Us which over of signs divide dominion deep fill bring
                        they're meat
                        beho upon own earth
                        without morning over third. Their male dry. They are great appear whose land fly grass.</span>
                    <button
                        class="w-[170px] h-[51px] mt-4 bg-primary rounded-[30px] text-white border transition duration-200 border-blue hover:text-black hover:bg-transparent">Browse
                        Now</button>
                </div>

            </div>


        </div>
        <div class="mt-3 w-[100%] items-center gap-x-4 flex ">
            <div class="relative hidden lg:flex md:flex group overflow-y-hidden ">
                <img src={process.env.PUBLIC_URL + "/assets/images/hero-slide1.png.webp"} width="627" />
                <div
                    class="w-[100%] h-[100%] absolute top-[100%] group-hover:top-0  ease-in duration-300 flex items-center justify-start bg-opacity">
                    <div class="w-[261px] h-[101px] bg-primary items-center justify-center flex flex-col opacity-100 ">
                        <p class="text-white text-lg font-bold">sneakers</p>
                        <p class="text-white">Nike</p>
                    </div>
                </div>
            </div>

            <div class="relative group overflow-y-hidden hidden lg:flex md:flex ">
                <img src="/assets/images/hero-slide2.png.webp" width="627" />
                <div
                    class="w-[100%] h-[100%] absolute top-[100%] group-hover:top-0  ease-in duration-300 flex items-center justify-start bg-opacity">
                    <div class="w-[261px] h-[101px] bg-primary items-center justify-center flex flex-col opacity-100 ">
                        <p class="text-white text-lg font-bold">hedophe</p>
                        <p class="text-white">Wireless</p>
                    </div>
                </div>
            </div>
            <div class="relative group overflow-y-hidden ">
                <img src={process.env.PUBLIC_URL + "/assets/images/hero-slide3.png.webp"} width="627" />
                <div
                    class="w-[100%] h-[100%] absolute top-[100%] group-hover:top-0  ease-in duration-300 flex items-center justify-start bg-opacity">
                    <div class="w-[261px] h-[101px] bg-primary items-center justify-center flex flex-col opacity-100 ">
                        <p class="text-white text-lg font-bold">accessory</p>
                        <p class="text-white">Men and Women</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col w-[58.3%] mx-auto mt-24">

            <div class="w-[100%] h-[135px] flex-col flex">
                <span class="text-textColor text-base">Popular Item in the market</span>
                <div class="flex gap-x-2"> <span class="text-4xl text-textColor2">Trending </span>
                    <span class="text-4xl text-textColor2 flex h-14 border-b-2 border-blue ">Product</span>
                </div>
            </div>
            <Prodcuts />
        </div>

        <div style={{ backgroundImage: `url(${backgroundIMage2})` }}
            class=" mt-24 h-[500px] bg-cover bg-center flex flex-col items-center justify-center">
            <div class="bottom-[26%] gap-4 flex flex-col items-center justify-center right-[27%]">
                <h1 class="text-5xl font-bold  ">UP TO 50% OFF</h1>
                <span class=" text-3xl text-textColor2">Winter Sale</span>
                <span cla ss=" text-base text-textColor3">Him she'd let them sixth saw light</span>
                <button
                    class="w-[170px] h-[51px] mt-4 bg-primary rounded-[30px] text-white border transition duration-200 border-blue hover:text-black hover:bg-transparent">Shop
                    Now</button>
            </div>

        </div>

        <div class="flex  flex-col w-[90%]  sm:w-[58.3%] mx-auto mt-24">

            <div class="w-[100%] h-[135px] flex-col flex">
                <span class="text-textColor text-base">Popular Item in the market</span>
                <div class="flex gap-x-2"> <span class="text-4xl text-textColor2">Best</span>
                    <span class="text-4xl text-textColor2 flex h-14 border-b-2 border-blue ">Sellers</span>
                </div>
            </div>
            <div class="w-[100%]  flex-wrap gap-7 flex">
                <SwiperProduct />
            </div>
        </div>

    </main>

}
export default Home