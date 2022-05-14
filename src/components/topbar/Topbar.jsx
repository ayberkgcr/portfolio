import "./topbar.scss";
import { Mail } from "@mui/icons-material"
import GitHubIcon from '@mui/icons-material/GitHub';

export default function contact({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">1M.</a>
                    <div className="itemContainer">
                        <GitHubIcon className="icon" />
                        <span>github.com/ayberkgcr</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>gocerayberk@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}