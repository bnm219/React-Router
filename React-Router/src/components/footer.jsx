import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <div id="footer"><Link to="/blue">Blue</Link><Link to="/red">Red</Link><Link to="/">Home</Link></div>
    )
}