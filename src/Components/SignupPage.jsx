import MidSection from "./MidSection"
import MyButton from "./MyButton"
import "./Signup.css"
import TitleSection from "./TitleSection"

function SignupPage() {
    return (
        <div className='signup-container'>
            <div className="card" >
                <TitleSection />
                <MidSection />
                <MyButton buttonText="Register" />
            </div>
        </div>
    )
}

export default SignupPage