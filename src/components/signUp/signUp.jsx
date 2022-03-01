import SignUpInput from "../signUpInput/signUpInput";
import { useRef } from "react";

import  useAuth  from '../../hooks/useAuth' 
//scss
import '../signUp/signUp.scss'

//img
import GoogleImages from '../../components/join/img/bg-google.svg'
// import { useState } from "react";

export default function SignUp({open, setOpen}) {
    const [setToken] = useAuth()

    const signEmail = useRef()
    const signPassword = useRef()

    const SIGN = []

    function submitLogin(evt) {
        evt.preventDefault()

        const allWrapper = {
            email: signEmail.current.value,
            password: signPassword.current.value
        }

        setToken( signEmail.current.value)
        SIGN.push(allWrapper)

        localStorage.setItem('login', JSON.stringify(SIGN))
    }

    return(
        <div className={`signUp ${open ? 'modal-open' : ''}`}>
            <button className="signUp__close-btn" onClick={() => setOpen(false)}>
                &times;
            </button>
            <div className="signUp__content">
                <div className='signUp__wrapper'>
                    <img className="signUp__images" src={GoogleImages} alt="google-images" width='31px' height='30px' />
                    <p className="signUp__text">
                        Sign up with Google
                    </p>
                </div>
                <h2 className="signUp__title">
                    Create an account
                </h2>
                <form className="signUp__form" onSubmit={submitLogin}>
                    <SignUpInput type="text" placeholder="name" required />
                    <SignUpInput type="text" placeholder="surname" required />
                    <input ref={signEmail} className="signup-input" type="email" placeholder="gmail" required />
                    <input ref={signPassword} className="signup-input" type="password" placeholder="password" required />

                  <div className="signUp__about-section">
                        <h3>
                            Date of birth
                        </h3>
                  </div>

                    <select className="signUp__month-select">
                        <option disabled selected>Month</option>
                        <option>September</option>
                        <option>Oktomber</option>
                        <option>November</option>
                        <option>December</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>Iyun</option>
                        <option>Iyul</option>
                        <option>Avgust</option>
                    </select>

                    <select className="signUp__day-select">
                        <option selected disabled>Day</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>

                    <select className="signUp__year-select">
                        <option disabled selected>
                            Year
                        </option>
                        <option>
                            1970/1980
                        </option>
                        <option>
                            1980/1990
                        </option>
                        <option>
                            1990/2000
                        </option>
                        <option>
                            2000/2010
                        </option>
                        <option>
                            2010/2020
                        </option>
                    </select>

                    <button className="signApp__login-btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}