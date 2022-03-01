

//scss
import { useRef } from 'react'
import useAuth from '../../hooks/useAuth'
import '../signApp/signApp.scss'
// import SignUpInput from '../signUpInput/signUpInput'

export default function SignApp({sign, setSign}) {
    const [setToken] = useAuth()

    const signGmail = useRef()
    const signPassword = useRef()
    const localData = localStorage.getItem('login')
    // const localSignData = localStorage.getItem('signLogin')
    const data = JSON.parse(localData)
    // const signData = JSON.parse(localSignData)

    function submitForm(evt) {
        evt.preventDefault()
    
        data.forEach((data) => {
        
            if(data.email === signGmail.current.value && data.password === signPassword.current.value) {
                setToken(data)
            }else {
                alert('this user is not available, please register')
            }
        })

        // signData.forEach((sign) => {
            
        //     if(sign.email === signGmail.current.value && sign.password === signPassword.current.value) {
        //         alert('qalaysan bolakay')
        //     }
        // })
    }

    return(
       <div className={`signApp ${sign ? 'signOpen' : ''}`}>
            <button className="AppleSignUp__close-btn" onClick={() => setSign(false)}>
                &times;
            </button>
            <div className='signApp__content'>
            <h2 className='signApp__title'>
                Log in to Twitter
            </h2>
            <form className='signApp__form' onSubmit={submitForm}>
                <input ref={signGmail} className="signup-input" type="email" placeholder="Phone number, email address" required />
                <input ref={signPassword} className="signup-input" type="password" placeholder="Password" required />

                <button className='signApp__login-btn'>Login</button>
            </form>
        </div>
       </div>
    )
}