import React from 'react'

const Tag = (props: any) => {
  return (
    <span className={`border ${props.borderColor} ${props.bgColor} rounded-full py-1 px-2 text-gray-900 dark:text-white font-bold text-[12px] bg-opacity-20 dark:bg-opacity-20`} >
      {props.text}
    </span >

  )
}

export default Tag