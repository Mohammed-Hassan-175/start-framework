import React from 'react'

export default function Footer() {
  return <>

    <div className='container mx-auto py-24 bg-[#2c3e50]  bottom-0 right-0 left-0 '>

      <div className='card-group flex text-white '>

        <div className='card-1 w-1/3 text-center'>
          <h3 className='text-3xl font-medium mb-2'>LOCATION</h3>
          <p className='mb-4'>2215 John Daniel Drive</p>
          <p className='mb-4'>Clark, MO 65243</p>
        </div>


        <div className='card-2 w-1/3 text-center'>
          <div className='card-2-inner'>
            <h3 className='text-3xl font-medium mb-2'>AROUND THE WEB</h3>
            <div className='card-2-icons'>
              <i className='fa-brands fa-facebook mx-1 icon'></i>
              <i className='fa-brands fa-twitter mx-1 icon"'></i>
              <i className='fa-brands fa-linkedin-in mx-1 icon'></i>
              <i className='fa-solid fa-globe mx-1 icon'></i>
            </div>
          </div>
        </div>

        <div className='card-3 w-1/3 text-center'>
          <div className='card-3-inner'>
            <h3 className='text-3xl font-medium mb-2'>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created <br /> by Route</p>
          </div>
        </div>

      </div>

    </div>
      <div className='text-center py-6 text-white bg-[#1a252f]  bottom-0 right-0 left-0'>
        <p>Copyright © Your Website 2021</p>
      </div>



  </>
}
