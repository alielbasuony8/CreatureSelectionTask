import React from 'react'

function ProceedButton({proceed}) {
  
  return (
    <div className=' w-[180px] h-[40px] bg-[#f00] cursor-pointer proceedBtn relative flex justify-center items-center mt-4 sm:mt-8' onClick={proceed}>
      <div className=' absolute w-full h-full bg-lime-color inset-0 btnWrapper'></div>
      <p className=' text-center absolute z-10 text-xl font-medium uppercase font-outline-1'>Proceed</p>
    </div>
  )
}

export default ProceedButton
