const Image = ({ image, model, imageTransform, imageOpacity }) => {
    return (
        <div className={`z-30 transition-opacity ${imageOpacity}`}>
            <img
                src={image}
                alt={`Фото ${model}`}
                className={`max-h-[400px] transition-transform transform-gpu ease-linear lg:max-h-[500px] xl:max-h-[600px] ${imageTransform}`}
            />
        </div>
    );
};


export default Image;
