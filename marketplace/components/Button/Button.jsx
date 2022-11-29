import React from 'react'

const Button = ({btnName, handleClick, icon, classStyle}) => {
  return (
	<div className='box'>
		<button className={`bg-blue-300 py-3 px-4 rounded-[1rem] text-base border border-blue-300 transition-all ease-in duration-200 shadow-md hover:shadow-gray-400 cursor-pointer text-white hover:bg-slate-900 hover:text-blue-300 ${classStyle}`}>{icon} {btnName}</button>
	</div>
  )
}

export default Button;
