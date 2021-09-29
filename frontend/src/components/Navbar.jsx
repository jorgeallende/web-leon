import "./navbar.scss"
import Logo from "../assets/Logo.png"

const Navbar = () => {
    return (
        <div className="navbar">

            <div className="left">
                <span>Home</span>
                <span>Blog</span>
                <span>Horarios</span>
                <span>Preços</span>
            </div>

            <div className="middle">
                <img src={Logo} alt="" />
            </div>

            <div className="right">
                <button className="btEntrar">Entrar</button>
            </div>

        </div>
    )
}

export default Navbar
