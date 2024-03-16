import { ArrowArcLeft, CheckCircle, XCircle } from 'phosphor-react'
import React, { useState } from 'react'
import img1 from '../assets/earth.png'; // Import your default profile picture

function History() {
    const [show, setShow] = useState(false)

    const histories = [
        { title: "Old mobile phone", subtitle: "iPhone 12", date: "17th March", approved: true },
        { title: "Broken laptop", subtitle: "MacBook Pro", date: "16th March", approved: false },
        { title: "Mouse", subtitle: "Hp", date: "19th February", approved: true },
        { title: "Tech accessories", subtitle: "AirPods Pro", date: "20th January", approved: false }
    ];
    

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

                    <div className='bg-dark w-100 p-5 m-3 rounded-3xl' style={{ minHeight: "92vh" }}>
                        {
                            histories?.map((item, idx) => <div key={idx} className='border rounded-3xl p-4 my-3 d-flex justify-content-between align-items-center'>
                                <img src={"https://picsum.photos/200/200?id=" + idx} width={100} className='rounded-3xl' />

                                <div className='flex-fill m-3 text-white'>
                                    <h3 className='h3'>{item.title}</h3>
                                    <h4 className='h5 opacity-50'>{item.subtitle}</h4>
                                    <h4 className='opacity-50'>{item.date}</h4>
                                </div>

                                {item.approved ? <CheckCircle className='text-success' size={50} />
                                    : <XCircle className='text-danger' size={50} />}
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History