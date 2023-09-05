import React,{useState} from "react"
import "./Header.css"

interface HeaderProps {
    onColorChange: (color: string) => void;
}


export const Header: React.FC<HeaderProps> = ({onColorChange}) => {
    
    const [textColor, setTextColor] = useState<string>('#FFFFFF')
    
    const handleColorText = () => {
        setTextColor('#000000')
    }
    return (
        <header>
            <ul>
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
            </ul>
        </header>
    )
}