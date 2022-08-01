import { useEffect, useState } from "react";
import "./App.css";
import Brand from "./components/Brand";
import Model from "./components/Model";
import Image from "./components/Image";

function App() {
    const rootURL = "https://jse-211.herokuapp.com";
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [image, setImage] = useState("");
    const [imageTransform, setImageTransform] = useState("");
    const [imageOpacity, setImageOpacity] = useState("");
    const [textOpacity, setTextOpacity] = useState("");

    useEffect(() => {
        getRandom();
        setInterval(getRandom, 10000);
    }, []);

    const getRandom = async () => {
        setTextOpacity("opacity-0 duration-500");
        setImageOpacity("opacity-0 delay-500 duration-500");

        const res = await fetch(rootURL + "/api/cars");
        const data = await res.json();

        setTimeout(() => {
            setBrand(data.brand);
            setModel(data.model);
            setImage(`${rootURL}/images/cars/${data.image}`);
            setImageTransform("scale-100");
            setTimeout(() => {
                setImageOpacity("opacity-100 delay-1000 duration-1000");
                setTextOpacity("opacity-100 duration-[2000ms]");
                setImageTransform("scale-110 duration-[20000ms]");
            }, 500);
        }, 1000);
    };


    const onClick = () => {
        getRandom();
    };

    
    return (
        <div>
            <div className="absolute top-0 left-0 w-screen h-screen gradient gradient-animation-bg"></div>

            <div className="relative mx-auto w-full md:w-2/3">
                <div className="absolute top-10 right-10 group z-40 md:right-0">
                    <span className="absolute right-8 h-1 w-10 rounded-full bg-sky-400 opacity-75 group-hover:animate-ping"></span>
                    <button onClick={onClick} className="bg-white px-5 py-2 rounded-full border font-bold shadow">
                        Рандом
                    </button>
                </div>

                <div className="relative flex w-full h-screen justify-center items-center">
                    <Brand brand={brand} textOpacity={textOpacity} />
                    <Model model={model} textOpacity={textOpacity} />
                    <Image image={image} model={model} imageTransform={imageTransform} imageOpacity={imageOpacity} />
                </div>
            </div>
        </div>
    );
}

export default App;
