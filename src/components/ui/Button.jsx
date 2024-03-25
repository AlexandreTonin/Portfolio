export default function Button(props) {
    return (
        <button className="text-white border px-4 rounded py-2 border-lightGray hover:text-black hover:bg-white transition font-medium">
            {props.text}
        </button>
    )    
};
