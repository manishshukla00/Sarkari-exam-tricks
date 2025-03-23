import React from 'react'

const Syllabus = () => {
  return (
    <div className='border-2 border-borderColor row-span-1 col-span-1'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>Syllabus</h3>
        <ul className='list-disc list-inside pl-6'>
          <li><a className='text-blue-800' href="/">UPSSSC Forest Guard 2023 Syllabus</a></li>
          <li><a className='text-blue-800' href="/">UP Police Constable Syllabus 2024</a></li>
          <li><a className='text-blue-800' href="/">UP Police Computer Operator, Programmer Syllabus 2024</a></li>
          <li><a className='text-blue-800' href="/">UP Police SI / ASI Syllabus 2024</a></li>
          <li><a className='text-blue-800' href="/">UPSSSC Stenographer Syllabus 2023</a></li>
        </ul>
        {/* <span className='font-bold border-b-2 border-blue-700 text-blue-700 ml-20' >View More</span> */}
      </div>
    </div>
  )
}

export default Syllabus
