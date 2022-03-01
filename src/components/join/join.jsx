import {useState} from 'react'
import SignApp from '../signApp/signApp'

import SignUp from '../signUp/signUp'
import AppleSignUp from '../AppleSignUp/AppleSign'

//img
import BgImg from './img/bg-img-tw.svg'
import BgLogo from './img/bg-logo.svg'
import GoogleImg from './img/bg-google.svg'
import AppleImg from './img/bg-apple.svg'

//scss
import '../join/join.scss'

export default function Join() {
    const [open, setOpen] = useState(false)
    const [opens, setOpens] = useState(false)
    const [sign, setSign] = useState(false)

    return(
        <>
            <section className='container'>
               <div className='wrapper'>
               <img src={BgImg} alt="bg-img" width='700' height='750' />
                <div className='wrapper__content'>
                    <img className='wrapper__logo' src={BgLogo} alt="logo" width='50px' height='40px' />
                    <h2 className='wrapper__first-title'>
                        Happening now
                    </h2>
                    <h3 className='wrapper__second-title'>
                        Join Twitter today
                    </h3>

                      <div>
                        <button className='btn' onClick={() => setOpen(true)}>
                            <img className='btn__img' src={GoogleImg} alt="images-icon" width='30px' height='30px'  />
                            Sign up with Google
                        </button>
                        <SignUp open={open} setOpen={setOpen} />
                        <button className='apple-btn' onClick={() => setOpens(true)}>
                            <img className='apple-btn__img' src={AppleImg} alt="images-icon" width='30px' height='30px'  />
                            Sign up with Apple
                        </button>
                        <AppleSignUp Opens={opens} SetOpens={setOpens} />
                            <button className='wrapper__sign-btn' onClick={() => setSign(true)}>
                                Sign up with phone or email
                            </button>
                            <SignApp sign={sign} setSign={setSign} />
                      </div>


                     <div>
                        <p className='wrapper__text-about'>
                        By singing up you agree to the 

                        <span>
                            <a className='wrapper__links' href="https://en.wikipedia.org/wiki/Terms_of_service">
                                Terms of Service
                            </a>
                        </span> 
                        and 
                        <span>
                            <a className='wrapper__links' href="https://www.privacypolicies.com/blog/privacy-policy-template/">
                                Privacy Policy
                            </a>
                        </span>, 
                        including 
                        <span>
                            <a className='wrapper__links' href="https://www.kaspersky.com/resource-center/definitions/cookies">
                                Cookie Use
                            </a>
                        </span>.
                        </p>
                        <p>
                            Already have an account? 
                            <span>
                                <a className='wrapper__links' href="/">
                                    Log in
                                </a>
                            </span>
                        </p>
                     </div>
                </div>
               </div>
               <nav className='nav'>
                   <ul className='nav__list'>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://en.wikipedia.org/wiki/Twitter">
                                About
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://qna.habr.com/q/17591">
                                Help Center
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://www.docracy.com/120/twitter-terms-of-service">
                                Terms of Service
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://www.courts.ca.gov/opinions/links/S230051-LINK14.PDF">
                                Privacy Policy
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://www.cardinalhealth.com/en/support/cookie-policy.html">
                                Cookie Policy
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://tinuiti.com/blog/paid-social/what-are-twitter-ads/">
                                Ads info
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://habr.com/ru/post/60434/">
                                Blog
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://downdetector.com/status/twitter/">
                                Status
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://www.powr.io/twitter-feed-%D0%B4%D0%BB%D1%8F-carrd-%D0%BA%D0%B0%D0%BA-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BD%D0%B0-%D0%B2%D0%B0%D1%88-%D1%81%D0%B0%D0%B9%D1%82">
                                Carrres
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://webarchive.library.unt.edu/web/20190429224248/https://about.twitter.com/en_us/company/brand-resources.html">
                                Brand Resources
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://adespresso.com/blog/twitter-advertising-a-complete-guide/">
                                Advertsing
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://sproutsocial.com/twitter-marketing/">
                                Marketing
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://sproutsocial.com/insights/how-to-start-twitter-account/">
                                Twitter for Business
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://dev.to/sumedhpatkar/beginners-guide-how-to-apply-for-a-twitter-developer-account-1kh7">
                                Developers
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="https://twittertoolsbook.com/twitter-directories/">
                                Directory
                           </a>
                       </li>
                       <li className='nav__item'>
                           <a className='nav__link' href="http://netsmate.com/nastraivaem-twitter">
                                Settings
                           </a>
                       </li>
                       <li className='nav__item'>
                            <a className='nav__link' href="/">
                                © 2021 Twitter, Inc.
                           </a>
                       </li>
                   </ul>
               </nav>
            </section>
        </>
    )
}