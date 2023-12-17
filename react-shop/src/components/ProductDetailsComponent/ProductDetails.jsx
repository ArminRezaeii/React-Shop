import { useEffect, useState } from "react"
import backgroundImage from "../../assets/images/PageNameBackgorundColor.png"
import { useSelector } from "react-redux"
import { useLoaderData } from "react-router-dom"
import { products } from "../../store/features/data"
import Tabss from "./Tabas"
export function loader(data) {
    return data.params.id
}
function ProductDetails() {
    const [quantity, SetQuantity] = useState(1)
    const loader = useLoaderData()
    const product = useSelector(products)
    const [data, Setdata] = useState([])
    useEffect(() => {
        const find = product.find((pro) => pro.id == loader)
        Setdata(find)

    }, [product])

    return (<>
        <div style={{ backgroundImage: `url(${backgroundImage})` }}
            class="w-[100%] h-[410px]  flex items-center justify-center">
            <div class="w-[50%] h-[100%] gap-y-3 flex flex-col items-center justify-center">
                <span class=" font-bold text-3xl">Shop Single</span>
                <span class="text-textColor">Home-Shop Single</span>
            </div>
        </div>



        <div
            class="md:max-w-[1140px] w-[90%]  items-center mt-20 flex flex-col px-5 mx-auto md:flex md:flex-row justify-between ">
            <div class="md:w-[50%] w-[100%]">
                <img src={data.image} class="lg:w-full w-full  h-auto" />
            </div>

            <div class="md:w-[40%] w-full h-[600px] flex items-center ">
                <div class="w-[100%] gap-y-3   h-[88%] flex flex-col">
                    <span class="text-2xl font-bold">{data.name}</span>
                    <span class="text-mainColor text-2xl">${data.price}</span>
                    <div class="flex gap-y-1 flex-col">
                        <div class=" flex gap-x-2 flex-row text-textColor">
                            <span class="text-textColor">Category:</span>
                            {data.categories?.map(cat => <span class="text-textColor">{cat}</span>)}

                        </div>
                        <div class=" flex gap-x-2  flex-row">
                            <span class="text-textColor">Brand:</span>
                            <span class="text-textColor">{data.brand}</span>
                        </div>
                    </div>
                    <div class="w-[100%] h-[1px] "></div>
                    <div class="text-textColor">
                        {data.introduction}
                    </div>
                    <div class=" lg:w-[90%] w-[100%] justify-between items-center bg-white flex h-[51px]">
                        <div class="lg:w-[40%] w-[50%] flex h-[100%] justify-between items-center bg-white">
                            <span>Quantity:</span>
                            <input type="text" value={quantity} onChange={(e) => SetQuantity(e.target.value)} class=" pl-3 border-eee border bg-inherit w-[79px] h-[29px]" />
                        </div>
                        <button
                            class="border  hover:bg-inherit transition ease-linear  hover:text-black border-blue text-white bg-primary rounded-[30px] sm:w-[173px] w-[146px] h-[41px] sm:h-[47px]">Add
                            to Cart</button>
                    </div>

                </div>
            </div>
        </div>
        <Tabss data={data} />

    </>)
}
export default ProductDetails