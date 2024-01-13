import React from 'react'

function ProceedButton() {
  return (
    <div className=' w-[180px] h-[40px] bg-[#f00] cursor-pointer proceedBtn relative flex justify-center items-center'>
      <div className=' absolute w-full h-full bg-lime-color inset-0 btnWrapper'></div>
      <p className=' text-center absolute z-10 text-xl font-medium uppercase font-outline-1'>Proceed</p>
    </div>
  )
}

export default ProceedButton
