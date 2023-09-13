import React,{useState} from "react"
import "./Header.css"
import { useMediaQuery } from "react-responsive";

interface HeaderProps {
    onColorChange: (color: string) => void;
}


export const Header: React.FC<HeaderProps> = ({onColorChange}) => {
    
    const [textColor, setTextColor] = useState<string>('#FFFFFF')
    const [currentColorIndex, setCurrentColorIndex] = useState<number>(0)
    const colors:string[] = ['#FFF198', '#6FA990', '#84ADD2', '#CFA1F2']

    // Define Media Query
    
    const isMobile = useMediaQuery({
        query: "(max-device-width: 768px)",
    });
    

    const handleColorText = () => {
        setTextColor('#000000')
    }

    const handleBtnColor = () => {
        setCurrentColorIndex((currentColorIndex + 1) % colors.length);
        onColorChange(colors[currentColorIndex])
    };  

    console.log(colors[currentColorIndex], currentColorIndex);


    return (
        <>
        { isMobile ? (
            <div onClick={() => {
                handleBtnColor()
                handleColorText()
            }}
                className='btnChange-Color'>
                <p>Change Colors</p>
            </div>
        ) : (
            <header className="header">
            <ul className="ul-header">
                <div className="first-colorDiv">
                    <li style={{ color: textColor}} 
                    onClick={() => {
                        onColorChange('#FFF198')
                        handleColorText();
                        }}>
                            Yellow
                    </li>
                    <li style={{ color: textColor}} 
                        onClick={() => {
                        onColorChange('#6FA990')
                        handleColorText();
                        }}>
                            Green
                    </li>
                </div>
                <div className="second-colorDiv">
                    <li style={{ color: textColor}}
                        onClick={() => {
                        onColorChange('#84ADD2')
                        handleColorText();
                        }}>
                            Blue
                    </li>
                    <li style={{ color: textColor}} 
                        onClick={() => {
                        onColorChange('#CFA1F2')
                        handleColorText();
                        }}>
                            Purple
                    </li>
                </div>
            </ul>
        </header>
        )}
        </>
    )
}