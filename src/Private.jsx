//images
import logoImg from './components/join/img/bg-logo.svg'
import HomePage from './Private-img/home-page.svg'
import ExplorePage from './Private-img/Explore-page.svg'
import NotificationsPage from './Private-img/Notifications-page.svg'
import MessagesPage from './Private-img/Messages-page.svg'
import BookmarksPage from './Private-img/Bookmarks-page.svg'
import ListsPage from './Private-img/Lists-page.svg'
import ProfilePage from './Private-img/Profile-page.svg'
import MorePage from './Private-img/More-page.svg'
import BoburBrat from './Private-img/Bobur-brat.svg'

//scss
import './Private.scss'

import { NavLink } from 'react-router-dom'

export default function Private({children}) {
    return(
      <>
        <div className='container'>
        <div className='twitter'>
           <div className='twitter__content'>
                <img className='twitter__logo' src={logoImg} alt="" width='40px' height='33px' />
                <ul className='twitter__list'>
                    <li className='twitter__item'>
                        <NavLink to="/profile" className={(props) => props.isActive ? 'activeLink' :  'twitter__img-link'}>
                            <img className='twitter__pages-img' src={ProfilePage} alt="Home Page" width='20' height='20' />
                            Profile
                        </NavLink>
                    </li>
                    <li className='twitter__item'>
                        <NavLink to='/explore' className={(props) => props.isActive ? 'activeLink' :  'twitter__img-link'}>
                            <img className='twitter__pages-img' src={ExplorePage} alt="Home Page" width='20' height='20' />
                            Explore
                        </NavLink>
                    </li>
                    <li className='twitter__item'>
                        <NavLink to='/notifications' className={(props) => props.isActive ? 'activeLink' :  'twitter__img-link'}>
                            <img className='twitter__pages-img' src={NotificationsPage} alt="Home Page" width='20' height='20' />
                            Notifications
                        </NavLink>
                    </li>
                    <li className='twitter__item'>
                        <NavLink to='/messages' className={(props) => props.isActive ? 'activeLink' :  'twitter__img-link'}>
                            <img className='twitter__pages-img' src={MessagesPage} alt="Home Page" width='20' height='20' />
                            Messages
                        </NavLink>
                    </li>
                    <li className='twitter__item'>
                        <NavLink to='/bookmarks' className={(props) => props.isActive ? 'activeLink' :  'twitter__img-link'}>
                            <img className='twitter__pages-img' src={BookmarksPage} alt="Home Page" width='20' height='20' />
                           Bookmarks
                        </NavLink>
                    </li>
                    <li className='twitter__item'>
                        <NavLink to='/lists' className={(props) => props.isActive ? 'activeLink' :  'twitter__img-link'}>
                            <img className='twitter__pages-img' src={ListsPage} alt="Home Page" width='20' height='20' />
                           Lists
                        </NavLink>
                    </li>
                    <li className='twitter__item'>
                        <NavLink className={(props) => props.isActive ? 'activeLink' :  'twitter__img-link'} to="/home">
                            <img className='twitter__pages-img' src={HomePage} alt="Home Page" width='20' height='20' />
                           Home
                        </NavLink>
                    </li>
                    <li className='twitter__item'>
                        <NavLink to='/more' className={(props) => props.isActive ? 'activeLink' :  'twitter__img-link'}>
                            <img className='twitter__pages-img' src={MorePage} alt="Home Page" width='20' height='20' />
                           More
                        </NavLink>
                    </li>
                </ul>
                <button className='twitter__btn'>Tweet</button>
                <div className='twitter__about-child'>
                    <img src={BoburBrat} alt="" width='50px' height='50px' />
                    <div className='twitter__wrapper'>
                        <h3 className='twitter__name'>
                            Bobur
                        </h3>
                        <p className='twitter__username'>
                            @bobur_mavlonov
                        </p>
                    </div>
                    <span className='twitter__dotted'>
                        ...
                    </span>
                </div>
            </div>
           </div>
        </div>
        {children}
      </>
    )
}