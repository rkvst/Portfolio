import React from 'react'

function Contact() {
    const config = {
        email:"vimalkannan8138@gmail.com",
        phone:"+91 9361366721"
    }
    return (
        <div>
            <section id='contact' className='flex flex-col px-5 py-32 bg-primary text-white'>
                <div className=' flex flex-col items-center text-center'>
                    <h1 className='text-4xl border-b-4 w-[150px] border-[#15163f] font-bold mb-5'>Contact</h1>
                    <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
                    <p className='py-2'><span className='font-bold'>Email :</span>&nbsp;{config.email}</p>
                    <p className='py-2'><span className='font-bold'>Phone :</span>&nbsp;{config.phone}</p>
                </div>
            </section>
        </div>
    )
}

export default Contact
