import { useSelector } from "react-redux"
import backgorundImage from "../../assets/images/PageNameBackgorundColor.png"
import { products } from "../../store/features/data"
import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"

function Shop() {
    const product = useSelector(products)
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])
    const [searchparams, setSearchparams] = useSearchParams()
    const [filter, setFilter] = useState({
        sort: "",
        categories: [],
        search: "",
        brands: [],
    })
    const [data, setdata] = useState([])
    useEffect(() => {
        setCategories([...new Set(product.flatMap(product => product.categories))])
        setBrands([...new Set(product.flatMap(product => product.brand))])
        const procutFilter = product.slice().sort((a, b) => filter.sort == "Highest to Lowest" ? b.price - a.price : filter.sort == "Lowest to Highest" ? a.price - b.price : "").filter((product) =>
            (filter.categories.length == 0 || product.categories.some(cat => filter.categories.includes(cat))) && (filter.brands.length == 0 || filter.brands.includes(product.brand)) && (filter.search.length == 0 || product.name.toLowerCase().startsWith(filter.search.toLocaleLowerCase())))
        setdata(procutFilter)
    }, [filter, searchparams])

    return <main>

        <div class="w-[70%] flex flex-col  mt-20 lg:flex-row md:flex-row mx-auto">

            <div class="lg:w-[22%] md:w-[22%] w-[100%]   flex flex-col gap-y-8 mx-auto">
                <div style={{ backgroundImage: `url(${backgorundImage})` }}
                    class="w-[100%]   items-center flex flex-col justify-center">
                    <div class="w-[100%]  h-[50px]  flex items-center justify-center bg-primary">
                        <span class="text-lg  text-white">Browse Categories</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-2 mb-2" >
                        {categories.map((cat, index) => (
                            <div key={index} className="mb-[0.125rem] gap-y-4 items-center text-center flex min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    id={`category_checkbox_${index}`}
                                    onChange={(e) => {
                                        let categories = searchparams.getAll('category');
                                        categories = categories.join(',').split(',');

                                        if (e.target.checked) {
                                            const newCategory = [...categories, cat]
                                            searchparams.set("category", newCategory.join(','))
                                        } else {
                                            const updatedCategories = categories.filter(item => item !== cat)
                                            if (updatedCategories.length > 1) {
                                                searchparams.set("category", updatedCategories.join(','))
                                            } else {
                                                searchparams.delete("category");
                                            }
                                        }
                                        setSearchparams(searchparams)
                                    }
                                    }
                                />

                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor={`category_checkbox_${index}`}
                                >
                                    {cat}
                                </label>
                            </div>
                        ))}
                    </div>


                </div>

                <div class="w-[100%] items-center flex flex-col justify-center">
                    <div style={{ backgroundImage: `url(${backgorundImage})` }}
                        class="w-[100%] flex  flex-col items-center justify-center border-b border-eee">
                        <div class="w-[100%] h-[50px] flex items-center justify-center bg-primary">
                            <span class="text-lg text-white">Product Filters</span>
                        </div>
                        <p class="mb-3 mt-3">Brands</p>
                        <div className="flex flex-col gap-2">
                            {brands.map((brand, id) => (
                                <div key={id} className="mb-[0.125rem] items-center text-center flex min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                        type="checkbox"
                                        id={`brand_checkbox_${id}`}
                                        onClick={(e) => {
                                            let brands = searchparams.getAll('brands')
                                            brands = brands.join(',').split(',')

                                            if (e.target.checked) {
                                                const newBrands = [...brands, brand]
                                                searchparams.set("brands", newBrands.join(','))
                                            } else {
                                                const updatedBrands = brands.filter(item => item !== brand)
                                                if (updatedBrands.length > 1) {
                                                    searchparams.set("brands", updatedBrands.join(','))
                                                } else {
                                                    searchparams.delete("brands")
                                                }
                                            }
                                            setSearchparams(searchparams)
                                        }}
                                    />
                                    <label
                                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                        htmlFor={`brand_checkbox_${id}`}
                                    >
                                        {brand}
                                    </label>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div style={{ backgroundImage: `url(${backgorundImage})` }}
                        class="w-[100%] flex flex-col items-center justify-center border-b  border-eee">
                        <p class="mb-3 mt-3">Price</p>

                    </div>
                </div>
            </div>
            <div class="lg:w-[74%] md:w-[74%] w-[100%]  flex flex-col">
                <div style={{ backgroundImage: `url(${backgorundImage})` }}
                    class="w-[100%] items-center justify-between flex flex-row lg:flex-nowrap flex-wrap  px-4  lg:h-[58px] h-[95px] ">
                    <div class="flex gap-4 items-center">
                        <select onChange={(e) => {
                            const selectedSort = e.target.value
                            if (selectedSort === "Default sorting") {
                                searchparams.delete("sort")
                            } else {
                                // Set the selected sorting option
                                searchparams.set("sort", selectedSort);
                            }
                            setSearchparams(searchparams);
                        }} class="lg:w-40 md:w-40  px-2 md:px-4 py-2">
                            <option>Default sorting</option>
                            <option>Highest to Lowest</option>
                            <option>Lowest to Highest</option>
                        </select>

                    </div>

                    <div class="flex items-center lg:w-[30%]  bg-white h-[38px]">
                        <input type="text" onChange={(e) => {
                            setFilter((prev) => {
                                return {
                                    ...prev,
                                    search: e.target.value
                                }
                            })
                        }} class="border-none px-3 outline-none bg-inherit w-[90%]"
                            placeholder="Search" />
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                    </div>


                </div>
                <div class="w-[100%] mt-6  flex-wrap items-center justify-between  gap-7 flex">
                    {data.map((product) => {
                        return <div key={product.id} class="lg:w-[29%]  items-center md:w-[45%]  w-[100%]  h-[430px]  group flex flex-col">
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

                    })}
                </div>

            </div>

        </div>


    </main>






}
export default Shop