import SignUpInput from "../signUpInput/signUpInput";

import  useAuth  from '../../hooks/useAuth' 
//scss
import '../AppleSignUp/AppleSign.scss'

//img
import AppleImages from '../../components/join/img/bg-apple.svg'
import { useRef } from "react";
// import { useState } from "react";

export default function AppleSignUp({Opens, SetOpens}) {
    // const locolData = localStorage.getItem('login')
    // const data = JSON.parse(locolData)

    const [setToken] = useAuth()


    const emailInput = useRef()
    const emailPassword = useRef()

    const SIGN = []

    function submitForms(evt) {
        evt.preventDefault()

        const allWrapper = {
            email: emailInput.current.value,
            password: emailPassword.current.value
        }

        SIGN.push(allWrapper)

        setToken(emailInput.current.value)

        localStorage.setItem('login', JSON.stringify(SIGN))
    }

    return(
        <div className={`AppleSignUp ${Opens ? 'apple-open' : ''}`}>
            <button className="AppleSignUp__close-btn" onClick={() => SetOpens(false)}>
                &times;
            </button>
            <div className="AppleSignUp__content">
                <div className='AppleSignUp__wrapper'>
                    <img className="AppleSignUp__images" src={AppleImages} alt="google-images" width='31px' height='30px' />
                    <p className="AppleSignUp__text">
                        Sign up with Apple
                    </p>
                </div>
                <h2 className="AppleSignUp__title">
                    Create an account
                </h2>
                <form className="AppleSignUp__form" onSubmit={submitForms}>
                    <SignUpInput type="text" placeholder="name" required/>
                    <SignUpInput type="text" placeholder="surname" required/>
                    <input ref={emailInput} className="signup-input" type="email" placeholder="gmail" required/>
                    <input ref={emailPassword} className="signup-input" type="password" placeholder="password" required/>

                  <div className="AppleSignUp__about-section">
                        <h3>
                            Date of birth
                        </h3>
                  </div>

                    <select className="AppleSignUp__month-select">
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

                    <select className="AppleSignUp__day-select">
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

                    <select className="AppleSignUp__year-select">
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
