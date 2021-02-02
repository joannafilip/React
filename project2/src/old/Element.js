function Element(props) {
    const x1 ="w-1/2 lg:w-1/6 md:w-1/4 bg-red-100 text-center";
    return (
            <div className={x1}>{props.text}</div>

    )
}

export default Element;