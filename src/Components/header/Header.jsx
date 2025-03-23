import React from 'react'
import logo from '../../images/logo.png';

const Header = () => {
  return (

    <header className=' bg-customRed  relative h-48 flex p-5'>
      <div><img src={logo} alt="" /></div>
      <div className='ml-auto mr-auto relative'>
        <div className='text-white mt-10'><h1 className='text-balance text-5xl font-bold'>SARKARI RESULT</h1>
          <span className='m-20 border-b-2 border-dotted '> <a href="https://www.sarkariresult.com"><i class="fa-solid fa-magnifying-glass"></i> WWW.SARKARIRESULT.COM</a></span>
        </div>
      </div>
    </header>

  )
}

export default Header
