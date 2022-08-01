const Model = ({ model, textOpacity }) => {
    return (
        <div className="absolute top-[70px] left-0">
            <div className={`pb-10 z-20 transition-opacity duration-1000 gradient gradient-animation ${textOpacity}`}>
                {/* <h1 className={`text-[${200 / (model.length / 3)}px] md:text-[${200 / (model.length / 5)}px]`}> */}
                <h1 className="text-9xl">
                    <strong>{model}</strong>
                </h1>
            </div>
        </div>
    );
};


export default Model;
