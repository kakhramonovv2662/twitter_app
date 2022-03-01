//scss
import '../signUpInput/signUpInput.scss'

export default function SignUpInput({type, placeholder, required}) {

    return(
        <>
            <input className="signup-input" type={type} placeholder={placeholder} required={required} />
        </>
    )
}