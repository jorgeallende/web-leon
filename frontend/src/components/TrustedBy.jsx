import "./trustedBy.scss"
import Adidas from "../assets/Adidas.png"
import Puma from "../assets/Puma.png"
import Netshoes from "../assets/Netshoes.png"
import Nike from "../assets/Nike.png"

const TrustedBy = () => {
    return (
        <div className="trustedBy">
            <img src={Nike} alt="" />
            <img src={Adidas} alt="" />
            <img src={Puma} alt="" />
            <img src={Netshoes} alt="" />
        </div>
    )
}

export default TrustedBy
