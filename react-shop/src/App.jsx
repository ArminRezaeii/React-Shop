import logo from './logo.svg';
import './App.css'
import { Link, Outlet } from 'react-router-dom';
import backgroundImage from "./assets/images/background-image2.png"
import backgroundImage2 from "./assets/images/background-image.png"
function App() {
  return (<>
    <nav className="w-max-[100%]  h-[89px]">

      <div className="w-[59.9%]  justify-between h-[100%]  mx-auto flex flex-row">

        <div className="flex justify-center items-center"><img src="/assets/images/logo.png" alt="" /></div>
        <div className="w-[85%] items-center justify-evenly flex flex-row">

          <div className="w-[378px]  lg:flex ml-6 hidden justify-center items-center">
            <ul className="flex gap-x-14">
              <Link to="/home"><li className="hover:text-mainColor transition ease-linear cursor-pointer">Home</li></Link>
              <Link to="/shop"><li className="hover:text-mainColor transition ease-linear cursor-pointer">Shop</li></Link>
              <li className="hover:text-mainColor transition ease-linear cursor-pointer">Blog</li>
              <li className="hover:text-mainColor transition ease-linear cursor-pointer">Content</li>
            </ul>
          </div>

          <div className=" w-[276px] lg:flex  h-[47px] justify-between hidden items-center">

            <div className="w-[40%]  flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <div className="  items-center gap-x-1 flex w-14">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

              </div>
            </div>

            <div>
              <button
                className="border  hover:border-blue transition ease-linear border-eee bg-white rounded-[30px] w-[151px] h-[47px]">Buy
                Now</button>
            </div>
          </div>
        </div>
      </div>


    </nav>
    <Outlet />




    <div style={{ backgroundImage: `url(${backgroundImage2})` }}
      class="h-[357.59px] w-[100%] bg-no-repeat bg-cover bg-center   mt-40 ">
      <div
        class="sm:w-[58.3%] sm:h-[100%] h-[267px] w-[95%] sm:py-[85px] sm:px-[300px] flex items-center justify-center bg-white shadow-boxSHodw mx-auto">
        <div class="w-[1090px] flex flex-col h-[187px] items-center  gap-12">
          <div class=" flex items-center flex-col gap-4">
            <span class="text-textColor2 sm:text-4xl text-2xl text font-bold ">GET UPDATE FROM
              ANYWHERE</span>
            <span class="text-base text-textColor2 leading-6">Bearing Void gathering light light his
              eavening unto
              dont afraid</span>
          </div>
          <div class="flex flex-row gap-8">
            <input
              class=" border border-eee placeholder:text-base focus:outline-none sm:w-[380px] sm:h-[50px] w-[193px] h-[41px] py-[6px] pl-[12px]  rounded-[30px] placeholder:text-textColor4"
              type="text" placeholder="Your Email Address" />
            <button
              class="border  hover:bg-inherit transition ease-linear  hover:text-black border-blue text-white bg-primary rounded-[30px] sm:w-[173px] w-[146px] h-[41px] sm:h-[47px]">Subscribe
              Now</button>
          </div>
        </div>
      </div>

    </div>
    <footer style={{ backgroundImage: `url(${backgroundImage})` }} class="w-[100%] bg-slate-600 mx-auto">
      <div class="w-[20%] h-[50px] "></div>
      <div class="w-[59.9%] flex-wrap justify-center gap-24  flex flex-row  mx-auto ">
        <div class="w-[285px] gap-3  flex flex-col">
          <span class="text-4xl font-bold text-white">Our Mission</span>
          <span class="text-textColor5 text-base">So seed seed green that winged cattle in. Gathering thing made
            fly you're no divided deep moved us
            lan Gathering thing us land years living.</span>
          <span class="text-textColor5 text-base">So seed seed green that winged cattle in. Gathering thing made
            fly you're no divided deep
            moved</span>
        </div>
        <div class="w-[190px] items-center flex flex-col  h-[292px]">
          <spn class="text-white text-lg">Quick Links</spn>
          <ul class="mt-4 flex flex-col gap-4">
            <l class="text-textColor text-base cursor-pointer hover:text-mainColor transition duration-200 ">
              Home</l>
            <li class="text-textColor text-base cursor-pointer hover:text-mainColor transition duration-200 ">
              Shop</li>
            <li class="text-textColor text-base cursor-pointer hover:text-mainColor transition duration-200 ">
              Blog</li>
            <li class="text-textColor text-base cursor-pointer hover:text-mainColor transition duration-200 ">
              Product</li>
            <li class="text-textColor text-base cursor-pointer hover:text-mainColor transition duration-200 ">
              Brand</li>
            <li class="text-textColor text-base cursor-pointer hover:text-mainColor transition duration-200 ">
              contact</li>
          </ul>
        </div>

        <div class="w-[255px] flex flex-col justify-between h-[291px]">
          <span class="text-white font-bold">Contact Us</span>
          <div class="w-[240px] h-[239px] flex flex-col  justify-between ">
            <div class="w-100% flex justify-between flex-row h-[30%]">
              <div class="w-[28px] h-[28px] rounded-[50%] flex items-center justify-center bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="white" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div class="flex  flex-col">
                <span class="text-white font-bold text-base"> Head Office</span>
                <span class="text-textColor5">123, Main Street, Your City</span>
              </div>
            </div>
            <div class="w-100% flex justify-between flex-row h-[30%]">
              <div class="w-[28px] h-[28px] rounded-[50%] flex items-center justify-center bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="white" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div class="flex flex-col">
                <span class="text-white font-bold text-base"> Head Office</span>
                <span class="text-textColor5">123, Main Street, Your City</span>
              </div>
            </div>
            <div class="w-100% flex justify-between flex-row h-[30%]">
              <div class="w-[28px] h-[28px] rounded-[50%] flex items-center justify-center bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="white" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div class="flex  flex-col">
                <span class="text-white font-bold text-base"> Head Office</span>
                <span class="text-textColor5">123, Main Street, Your City</span>
              </div>
            </div>

          </div>
        </div>
      </div>



    </footer>





  </>)
}

export default App;
