//scss
import './Tweets.scss'

//img
import bgImg from '../img/bg-img.svg'
import PeopleImg from '../img/mavlonov-img.svg'
import LocationIcon from '../img/location-icon.svg'
import TelegrammIcon from '../img/t-me-icon.svg'
import BornIcon from '../img/born-icon.svg'
import DataIcon from '../img/data-icon.svg'

export default function Tweets() {
    return(
        <div className="container">
            <div className='tweets'>
               <div>
                    <img className='tweets__bg-img' src={bgImg} alt="bg-img" width='630px' height='210px' />
                    <div className='tweets__about'>
                        <img className='tweets__people-img' src={PeopleImg} alt="" width='110px' height='110px' />

                            <button className='tweets__edit-btn'>Edit profile</button>
                    </div>
               </div>
               <div className='tweets__wrappers'>
                   <h3 className='tweets__name'>
                    Bobur
                   </h3>
                   <span className='tweets__username'>
                     @bobur_mavlonov
                   </span>
                   <p className='tweets__working'>
                        UX&UI designer at <span className='tweets__jobs'>@abutechuz</span>
                   </p>
                   <ul className='tweets__list'>
                       <li className='tweets__item'>
                           <img className='tweets__icons' src={LocationIcon} alt="location icon" width='18px' height='20px' />
                           <span className='tweets__icons-about'>
                             Mashag'daman
                           </span>
                       </li>
                       <li className='tweets__item'>
                           <img className='tweets__icons' src={TelegrammIcon} alt="location icon" width='18px' height='20px' />
                           <span className='tweets__icons-about tweets__tme'>
                            t.me/boburjon_mavlonov
                           </span>
                       </li>
                       <li className='tweets__item'>
                           <img className='tweets__icons' src={BornIcon} alt="location icon" width='18px' height='20px' />
                           <span className='tweets__icons-about'>
                           Born November 24, 2000
                           </span>
                       </li>
                       <li className='tweets__item'>
                           <img className='tweets__icons' src={DataIcon} alt="location icon" width='18px' height='20px' />
                           <span className='tweets__icons-about'>
                           Joined May 2020
                           </span>
                       </li>
                   </ul>
                  <div className='tweets__follow'>
                    <span className='tweets__following'>
                        <span className='tweets__following-num'>
                            67
                        </span>
                        Following
                    </span>
                    <span className='tweets__following'>
                        <span className='tweets__following-num'>
                            47
                        </span>
                            Followers
                    </span>
                  </div>
               </div>
            </div>
        </div>
    )
}