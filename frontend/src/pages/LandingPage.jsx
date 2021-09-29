import Intro from "../components/Intro"
import Navbar from "../components/Navbar"
import TrustedBy from "../components/TrustedBy"
import "./landingPage.scss"

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Intro/>
            <TrustedBy/>
        </div>
    )
}

export default LandingPage
