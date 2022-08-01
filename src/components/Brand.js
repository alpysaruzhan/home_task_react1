const Brand = ({ brand, textOpacity }) => {
    return (
        <div className="absolute top-10 left-0">
            <div className={`pb-10 z-20 transition-opacity duration-1000 gradient gradient-animation ${textOpacity}`}>
                <h2 className="text-5xl">{brand}</h2>
            </div>
        </div>
    );
};


export default Brand;
