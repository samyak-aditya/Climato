import { ArrowArcLeft, Camera } from 'phosphor-react'
import React, { useState } from 'react'
import Card from '../component/card';
import trash from '../assets/earth (4).png'

function OrderForm() {
    const [show, setShow] = useState(false)

    return (
        <div className='d-flex'>



            <div className='p-3 w-100'>

                <div className='text-white d-flex bg-dark rounded-3xl justify-content-between px-3 mb-3 mx-2' style={{ height: "8vh" }}>

                    <button className='d-flex align-items-center' onClick={() => setShow(prev => !prev)}>
                        {!show ? <img src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png" width={50} />
                            : <ArrowArcLeft size={50} />}
                    </button>

                    <div className='h3 align-self-center m-0 p-0'>
                        Climato
                    </div>

                    <div className='d-flex align-items-center'>
                        <img src="https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-467.jpg" width={50} className='rounded-circle' />
                    </div>
                </div>


                <div className='d-flex'>


                    {show && <div className='bg-dark m-3 text-white h4 d-flex flex-column rounded-3xl'>

                        <div className='my-auto p-5'>Learn</div>
                        <div className='my-auto p-5'>Ecozones</div>
                        <div className='my-auto p-5'>Dashboard</div>
                        <div className='my-auto p-5'>Leaderboards</div>
                        <div className='my-auto p-5'>Rewards</div>
                        <div className='my-auto p-5'>Settings</div>
                    </div>}

                    <div className='bg-dark w-100 p-5 m-3 rounded-3xl d-flex flex-wrap' style={{ minHeight: "92vh" }}>
                        <form className='d-flex w-100'>
                            <div>
                                <label for="file">
                                    <Camera className='text-white border p-5 rounded-3xl' size={500} />
                                </label>
                                <input id='file' type='file' hidden />
                            </div>

                            <div className='flex-fill w-100 m-3 d-flex flex-column align-items-center'>
                                <input placeholder='Product Name' className='w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3' />
                                <select placeholder='Category' className='w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3'>
                                    <option selected disabled className='text-dark'>Select Category</option>
                                    <option value={"category 1"} className='text-dark'>Category 1</option>
                                    <option value={"category 2"} className='text-dark'>Category 2</option>
                                    <option value={"category 3"} className='text-dark'>Category 3</option>
                                    <option value={"category 4"} className='text-dark'>Category 4</option>
                                    <option value={"category 5"} className='text-dark'>Category 5</option>
                                    <option value={"category 6"} className='text-dark'>Category 6</option>
                                </select>
                                <select placeholder='Collection' className='w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3'>
                                    <option selected disabled className='text-dark'>Select Collection Type</option>
                                    <option value={"Collection 1"} className='text-dark'>Collection 1</option>
                                    <option value={"Collection 2"} className='text-dark'>Collection 2</option>
                                    <option value={"Collection 3"} className='text-dark'>Collection 3</option>
                                    <option value={"Collection 4"} className='text-dark'>Collection 4</option>
                                    <option value={"Collection 5"} className='text-dark'>Collection 5</option>
                                    <option value={"Collection 6"} className='text-dark'>Collection 6</option>
                                </select>
                                <input placeholder='Ask price' className='w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3' />
                                <input placeholder='Pincode' className='w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3' />
                                <select placeholder='Collection' className='w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3'>
                                    <option selected disabled className='text-dark'>Select Type of Pickup</option>
                                    <option value={"Collection 1"} className='text-dark'>Pickup</option>
                                    <option value={"Collection 2"} className='text-dark'>Self Drop</option>
                                </select>
                                <button className='text-white border w-25 p-2 rounded-3xl'>Create Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderForm