import React from 'react'

const TimelineTwoItem = (props: any) => {
    return (
        <div className="flex flex-col py-8 lg:py-0 sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] before:bg-sky-600 before:dark:bg-sky-400 lg:border-none border-b border-gray-800">
            <h3 className="text-xl lg:font-semibold">{props.role} - {props.company}</h3>
            <time className="text-xs uppercase dark:text-gray-400 mt-2">{props.time}</time>
            <p className="mt-3">{props.description}</p>
        </div>
    )
}

export default TimelineTwoItem