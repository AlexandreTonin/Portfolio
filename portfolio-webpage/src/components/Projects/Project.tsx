import Tag from "../Tag/Tag";

const Project = (props: any) => {

    return (
        <div className="py-8 lg:mb-0 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] p-4 dark:p-0 rounded-md dark:shadow-none">
            <div className="relative mb-6 overflow-hidden h-52 lg:h-64 rounded-lg shadow dark:shadow-black/20" >
                <img src={props.imgUrl} alt={props.altText} className="object-cover w-full lg:h-64 h-52" />

                <a target="_blank" href={props.projectLink}>
                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]">
                    </div>
                </a>
            </div>
            <h5 className="mb-4 text-xl font-bold">{props.ProjectTitle}</h5>
            <div className="mb-4 flex items-center text-sm font-medium lg:justify-start">
                {props.frontend ? <Tag text="Front-End" borderColor="border-sky-400" bgColor="bg-sky-400" /> : null}
                {props.backend ? <Tag text="Back-End" borderColor="border-orange-400" bgColor="bg-orange-400" /> : null}
                {props.fullstack ? <Tag text="FullStack" borderColor="border-red-400" bgColor="bg-red-400" /> : null}
                <span className="ml-4">{props.completo ? <Tag text="Completo" borderColor="border-green-400" bgColor="bg-green-400" /> : <Tag text="Em desenvolvimento" borderColor="border-yellow-400" bgColor="bg-yellow-400" />}</span>
            </div>
            <p className="text-neutral-500 dark:text-neutral-300">
                {props.description}
            </p>
        </div>
    )
}

export default Project
