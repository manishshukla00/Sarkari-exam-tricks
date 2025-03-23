import React from 'react'

const CertificateVerification = () => {
  return (
    <div className='border-2 border-borderColor row-span-1 col-span-1  '>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>Certificate Verification</h3>
        <ul className='list-disc list-inside pl-6'>
          <li><a className='text-blue-800' href="/">NTA UGC NET December 2023 E Certificate</a></li>
          <li><a className='text-blue-800' href="/">UPSSSC PET 2023 Certificate</a></li>
          <li><a className='text-blue-800' href="/">Voter ID Online Form 2024, E EPIC Download</a></li>
          <li><a className='text-blue-800' href="/">Aadhar Pan Card Link Online or Check Status 2023</a></li>
          <li><a className='text-blue-800' href="/">NTA UGC NET June 2020 E Certificate</a></li>
        </ul>
        {/* <span className='font-bold border-b-2 border-blue-700 text-blue-700' >View More</span> */}
      </div>
    </div>
  )
}

export default CertificateVerification
