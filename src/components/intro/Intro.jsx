
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./intro.scss";
// import { init } from "ityped";
// import { useEffect } from "react";

export default function Intro() {
    // const textRef = useRef();

    // useEffect(() => {
    //     init(textRef.current, {
    //       showCursor: true,
    //       backDelay: 1500,
    //       backSpeed:60,
    //       strings: ["Developer", "Designer", "Content Creator"],
    //     });
    //   }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ayberk GOCER</h1>
                    <h3>
                        Freelance <span>React.JS Developer</span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDownIcon />
                </a>
            </div>
        </div>
    );
}