import React from 'react'

export default function Contact() {
  return <>
    <div className='pb-20 pt-16'>
      <div className="text-center text-[#2c3e50] ">
        <h2 className='font-bold text-[40px] relative'>CONATCT SECTION</h2>
        <div className="w-50 mx-auto stars relative py-3">
          <i className="fa-solid fa-star fs-4"></i>
        </div>
      </div>



      <form className='container w-1/2 mx-auto pt-16'>

        <div className="relative mx-auto py-8 w-full">
          <input required type="text" className="input border-0 border-b-[1px]  w-full border-[#dee2e6] " />
          <label className="label absolute -translate-y-1/2 opacity-75">userName :</label>
        </div>

        <div className="relative mx-auto py-8 w-full">
          <input required type="number" className="input border-0 border-b-[1px]  w-full border-[#dee2e6] " />
          <label className="label absolute -translate-y-1/2 opacity-75">userAge :</label>
        </div>

        <div className="relative mx-auto py-8 w-full">
          <input required type="email" className="input border-0 border-b-[1px]  w-full border-[#dee2e6] " />
          <label className="label absolute -translate-y-1/2 opacity-75">userEmail :</label>
        </div>

        <div className="relative mx-auto py-8 w-full">
          <input required type="password" className="input border-0 border-b-[1px]  w-full border-[#dee2e6] " />
          <label className="label absolute -translate-y-1/2 opacity-75">userPassword :</label>
        </div>


        <button type='submit' className='btn text-white'>send Massage</button>
      </form>









    </div>





  </>
}