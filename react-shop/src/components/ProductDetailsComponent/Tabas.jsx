import React, { useState } from 'react';
import backgroundImage from "../../assets/images/PageNameBackgorundColor.png"
import { Tabs, Tab, createTheme, Box, ThemeProvider, Rating } from '@mui/material';
const theme = createTheme({
    palette: {
        secondary: {
            main: '#384AEB',
        },
    }
})


function App(props) {
    const [value, setValue] = useState(0)
    const [avrage, setAvrage] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className='lg:w-[50%] w-[90%] mx-auto mt-20'>
            <ThemeProvider theme={theme}>
                <Box sx={{ width: "100%", border: "1px solid #EEEEEE", padding: "30px" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"

                        styleOverrides={{
                            indicator: {
                                backgroundColor: 'blue',
                            },
                        }}
                    >
                        <Tab label="Description" />
                        <Tab label="Specification" />
                        <Tab label="Item Three" />
                    </Tabs>

                    {value === 0 && <div className='mt-10 text-textColor'>{props.data.description}</div>}
                    {value === 1 && <div className='mt-10 w-full'>
                        <table class=" w-full bg-white border border-gray-300">

                            <tr>
                                <td class="py-2 px-4 border">Width</td>
                                <td class="py-2 px-4 border">{props.data.specification.width}</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border">Height</td>
                                <td class="py-2 px-4 border">{props.data.specification.height}</td>
                            </tr>

                            <tr>
                                <td class="py-2 px-4 border">Weight</td>
                                <td class="py-2 px-4 border">{props.data.specification.weight}</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border">Quality checking</td>
                                <td class="py-2 px-4 border">{props.data.specification.qualitychecking}</td>
                            </tr>

                            <tr>
                                <td class="py-2 px-4 border">Each Box contains</td>
                                <td class="py-2 px-4 border">{props.data.specification.eachboxcontains}</td>
                            </tr>
                        </table>
                    </div>}
                    {value === 2 && <div className='mt-10 w-full flex flex-col '>
                        <div className='lg:w-[50%] w-[100%] mx-auto mb-10 flex justify-between '>
                            <div style={{ backgroundImage: `url(${backgroundImage})` }} className='flex w-[40%] text-center gap-y-3 flex-col p-[20px]'>
                                <span className='text-2xl '>Overall</span>
                                <span className='text-mainColor text-4xl'>{(props.data.review.reduce((x, pro) => x + pro.rate, 0) / props.data.review.length).toFixed(1)}</span>
                                <span className='text-textColor3 text-base'>({props.data.review.length} Reviews)</span>
                            </div>
                            <div className='lg:w-[50%] w-[100%] items-center flex flex-col'>
                                <span className='font-bold mb-2 text-lg'>Based on 3 Reviews</span>
                                {props.data.review.map((reviews) => {
                                    return <div className=' flex w-full items-center justify-evenly'>
                                        <span>{reviews.rate}</span>
                                        <div>
                                            <Rating
                                                name="size-small"
                                                size="small"
                                                value={reviews.rate}
                                                readOnly
                                                precision={0.5}
                                            />
                                        </div>
                                    </div>

                                })}
                            </div>
                        </div>



                        <div className='w-[50%] mx-auto flex flex-col  gap-y-5 '>
                            {props.data.review.map((reviews) => {
                                return <div className='w-full  flex flex-col gap-y-1'>
                                    <div className='w-full h-[20%] gap-x-2 items-center  flex'>
                                        <div className='rounded-[50%] bg-black w-[70px] h-[70px]'>
                                            <img src={reviews.image} />
                                        </div>
                                        <div className='w-[30%] h-[70%] flex flex-col  '>
                                            <span>{reviews.name}</span>
                                            <div>
                                                <Rating
                                                    name="size-small"
                                                    size="small"
                                                    value={reviews.rate}
                                                    readOnly
                                                    precision={0.5}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <span>{reviews.comment}</span>
                                </div>


                            })}
                        </div>
                    </div>}
                </Box>
            </ThemeProvider>
        </div>

    )
}

export default App;
