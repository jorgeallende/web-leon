import "./intro.scss"
import Hero from "../assets/Hero.png"


const Intro = () => {
    return (
        <div className="intro">
            <div className="left">
                <div className="textBox">
                    <h1>Cuide da sua saúde</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus sem, tempus dictum rutrum eu, malesuada sed libero</span>
                    <button>Experimente grátis</button>
                </div>
            </div>
            <div className="right">
                <img src={Hero} alt="" />
            </div>
        </div>
    )
}

export default Intro
