import { useEffect, useState } from "react";

const GenerateRandomColor = () => {
    const [color, setColor] = useState("#000");
    const [typeOfColor, setTypeOfColor] = useState("hex");

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    };

    const handleGenerateHexColor = () => {
        const hex = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
        ];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    };

    const handleRandomRgbColor = () => {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(() => {
        if(typeOfColor === 'hex') handleGenerateHexColor()
        else handleRandomRgbColor()
    },[typeOfColor])

    return (
        <div style={{ background: color, height: "100vh", width: "100%" }}>
            <button onClick={() => setTypeOfColor("rgb")}>
                Create RGB Color
            </button>
            <button onClick={() => setTypeOfColor("hex")}>
                Create Hex Color
            </button>
            <button onClick={typeOfColor === 'hex'? handleGenerateHexColor: handleRandomRgbColor}>
                Generate Random Color
            </button>
            <div style={{color: '#fff', fontSize: '40px', textAlign: "center"}}>
                {typeOfColor === "hex" ? (
                    <h2>Random HEX Color</h2>
                ) : (
                    <h2>Random RGB Color</h2>
                )}
                <h1>{color}</h1>
            </div>
        </div>
    );
};

export default GenerateRandomColor;
