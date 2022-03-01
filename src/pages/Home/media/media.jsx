import { NavLink } from "react-router-dom";

//scss
import '../media/media.scss'

export default function Media() {
    return(
        <>
        <div className="media">
            <ul className="media__list">
                <li className="media__item">
                    <NavLink to='/profile/tweets' className={(active) => active.isActive ? 'activeLinks' : 'media__link'}>
                        Tweets
                    </NavLink>
                </li>
                <li className="media__item">
                    <NavLink to='/profile/replies' className={(active) => active.isActive ? 'activeLinks' : 'media__link'}>
                    Tweets & replies
                    </NavLink>
                </li>
                <li className="media__item">
                    <NavLink to='/profile/medias' className={(active) => active.isActive ? 'activeLinks' : 'media__link'}>
                    Media
                    </NavLink>
                </li>
                <li className="media__item">
                    <NavLink to='/profile/likes' className={(active) => active.isActive ? 'activeLinks' : 'media__link'}>
                    Likes
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}