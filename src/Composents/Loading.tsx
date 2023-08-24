
import React, {useState, useEffect, FunctionComponent} from "react"


interface LoadingBarProps{
    duration?: number,
    isComplete: () => void,
}

export const LoadingBar: FunctionComponent <LoadingBarProps> = ({duration = 5, isComplete}) => {
    let [progress, setProgress] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
            const newProgress = prevProgress + 1;
            if(newProgress >= 100){
                isComplete();
                clearInterval(interval)   
            }
            return newProgress > 100 ? 100 : newProgress;

            });
        }, (duration * 100) / 100);
        

    }, [duration]);



            return(
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-white mb-10">{progress}%</p>
            <div className=" bg-gray-bar w-48 h-1 absolute">
                <div style={{width: `${progress}%` }} className="bg-complete-bar w-100 h-1 relative z-1"></div>
            </div>
        </div>
    )
    
}