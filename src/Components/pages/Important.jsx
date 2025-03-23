import React from 'react'

const Important = () => {
  return (
    <div className='border-2 border-borderColor row-span-1 col-span-1'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>Important</h3>
        <ul className='list-disc list-inside pl-6'>
          <li><a className='text-blue-800' href="/">UP Scholarship Online Form 2024</a></li>
          <li><a className='text-blue-800' href="/">SSC OTR Online Form 2024</a></li>
          <li><a className='text-blue-800' href="/">Sahara Refund Portal Online Registration 2023</a></li>
          <li><a className='text-blue-800' href="/">UP Family ID Ek Parivar Ek Pahchan Online Registration 2023</a></li>
          <li><a className='text-blue-800' href="/">UPPSC One Time Registration OTR Online Form 2023</a></li>
        </ul>
        {/* <span className='font-bold border-b-2 border-blue-700 text-blue-700' >View More</span> */}
      </div>
    </div>
  )
}

export default Important
