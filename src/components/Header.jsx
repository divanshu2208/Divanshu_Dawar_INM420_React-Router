import { Link } from "react-router-dom";

export default function App() {
    return (
        <header>
            <h1><Link to="/">Divanshu</Link></h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Contacts">Contacts</Link></li>
                </ul>
            </nav>
        </header>
    );
}