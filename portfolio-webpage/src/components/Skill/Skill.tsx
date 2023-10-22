import { Tooltip } from '@chakra-ui/react'
import React from 'react'

const Skill = (props: any) => {
    return (
        <Tooltip label={props.tooltipLabel} fontSize='md' className='dark:bg-sky-400 bg-sky-600 font-black text-gray-600 dark:text-white px-2 rounded-full dark:bg-opacity-20 bg-opacity-20 border lg:border-sky-400 border-sky-600'>
            <div className='bg-opacity-20 border rounded p-4 border-gray-300 bg-gray-200 dark:border-gray-800 dark:bg-gray-800 dark:bg-opacity-20 cursor-pointer'>
                <img height="30" width="40" src={props.imgUrl} />
            </div>
        </Tooltip>
    )
}

export default Skill
