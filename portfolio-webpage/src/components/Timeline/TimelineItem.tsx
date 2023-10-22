import React from 'react'
import Tag from '../Tag/Tag'

const TimelineItem = (props: any) => {
    return (
        <div className={`${props.className} lg:border-none border-b border-gray-800 py-8 flex justify-between items-center w-full`}>
            <div className="order-1 lg:w-5/12"></div>

            <div className="order-1 lg:w-5/12 py-4 lg:space-y-4">
                <p className="mb-3 text-base text-sky-600 dark:text-sky-400 transition"><a href={props.url} target='_blank' className='hover:text-sky-900 dark:hover:text-sky-700'>{props.title} {props.date}</a> {props.andamento ? <Tag text="Em andamento" borderColor="border-orange-400" bgColor="bg-orange-400" /> : <Tag text="Completo" borderColor="border-green-400" bgColor="bg-green-400" />}</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl text-gray-900 dark:text-gray-100">{props.course}</h4>
                <p className="text-sm md:text-base leading-snug text-gray-900 dark:text-gray-50 text-opacity-100">
                    {props.description}
                </p>
                {props.certified ?
                    <div className='mt-4'>
                        <a href={props.certifiedUrl} target='_blank'> <Tag text="Ver certificado" borderColor="border-sky-600 dark:border-sky-400" bgColor="bg-sky-600 dark:bg-sky-400 hover:bg-opacity-50 transition" /> </a>
                    </div> : null}
            </div>
        </div>
    )
}

export default TimelineItem
