//scss 
import './Profile.scss'

//img
import starImg from './img/star-img.svg'
import Img from './img/img.svg'
import designInsta from './img/designinsta-icon.svg'
import cloutexhibitionImg from './img/cloutexhibition-img.svg'
import CreativePhoto from './img/CreativePhoto-img.svg'
import GifImg from '../Profile/img/gif-icon.svg'
import statistImg from '../Profile/img/statist-icon.svg'
import smaylikImg from '../Profile/img/smaylik-icon.svg'
import oclockImg from '../Profile/img/oclock-icon.svg'
import KebabImg from './img/shashlik-img.svg'

import Commits from '../Home/media/motivat/images/commit-icon.svg'
import New from '../Home/media/motivat/images/new-icon.svg'
import Like from '../Home/media/motivat/images/like-icon.svg'
import download from '../Home/media/motivat/images/download-icon.svg'
import statistika from '../Home/media/motivat/images/statictika-icon.svg'
import Mavlonov from '../Home/img/mavlonov-img.svg'

export default function Profile() {
    return(
        <div className='profile'>
            <header className='profile__header'>
                    <h2 className='profile__home-title'>
                        Home
                    </h2>
                    <img className='profile__star-img' src={starImg} alt="" width='22px' height='21px' />
            </header>
            <div className='profile__commit'>
                <img className='profile__mavlonov-img' src={Mavlonov} alt="mavlonov img" width='50px' height='50px' />
                <div>
                <input className='profile__input' type="text" placeholder='What’s happening'/>
                <div className='profile__wrapper'>
                    <img className='profile__small-icon' src={Img} alt="images" width="20px" height='20px' />
                    <img className='profile__small-icon' src={GifImg} alt="gif-images" width="20px" height='20px' />
                    <img className='profile__small-icon' src={statistImg} alt="images" width="20px" height='20px' />
                    <img className='profile__small-icon' src={smaylikImg} alt="images" width="20px" height='20px' />
                    <img className='profile__small-icon' src={oclockImg} alt="images" width="20px" height='20px' /> 

                    <button className='profile__tweet-btn'>Tweet</button>
                </div>
               </div>
            </div>
            <div className='motivat__all-wrapper'>
                    <img className='motivat__people-img' src={designInsta} alt="img" width='60px' height='60px' />
                    <div>
                        <div className='motivat__content'>
                            <h3 className='motivat__name'>
                                Designsta
                            </h3>
                            <p className='motivat__username'>
                                @inner · 25m
                            </p>
                            <span className='motivat__dotted'>
                                ...
                            </span>
                        </div>
                        <div>
                        <p className='motivat__text motivat__second-text'>
                            Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?
                        </p>
                        </div>
                        <div className='motivat__wrapper'>   
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={Commits} alt="commit-icon" width='24px' height='24px' />
                                8
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={New} alt="commit-icon" width='24px' height='24px' />
                                5
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={Like} alt="commit-icon" width='24px' height='24px' />
                                12
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={download} alt="commit-icon" width='24px' height='24px' />
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={statistika} alt="commit-icon" width='24px' height='24px' />
                            </span>
                        </div>
                    </div>
                </div>
            <div className='motivat__all-wrapper'>
                    <img className='motivat__people-img' src={cloutexhibitionImg} alt="img" width='60px' height='60px' />
                    <div>
                        <div className='motivat__content'>
                            <h3 className='motivat__name'>
                            cloutexhibition
                            </h3>
                            <p className='motivat__username'>
                            @RajLahoti · 22m
                            </p>
                            <span className='motivat__dotted'>
                                ...
                            </span>
                        </div>
                        <div>
                        <p className='motivat__text'>
                        YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. 
                        Mentorlik davomida talaba va yangi bitiruvchilarni
                         o’sayotganini ko’rib hursand bo’ladi odam.
                        </p>
                        </div>
                        <div className='motivat__wrapper'>   
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={Commits} alt="commit-icon" width='24px' height='24px' />
                                8
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={New} alt="commit-icon" width='24px' height='24px' />
                                5
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={Like} alt="commit-icon" width='24px' height='24px' />
                                12
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={download} alt="commit-icon" width='24px' height='24px' />
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={statistika} alt="commit-icon" width='24px' height='24px' />
                            </span>
                        </div>
                    </div>
                </div>

                <div className='motivat__all-wrapper'>
                    <img className='motivat__people-img' src={CreativePhoto} alt="img" width='60px' height='60px' />
                    <div>
                        <div className='motivat__content'>
                                <h3 className='motivat__name'>
                                CreativePhoto
                                </h3>
                                <p className='motivat__username'>
                                @cloutexhibition · 1h
                                </p>
                                <span className='motivat__dotted'>
                                    ...
                                </span>
                        </div>
                        <span style={{display:'block',  marginBottom: '10px'}}>
                            Обетда.....  Кечиринглар
                        </span>
                        <img src={KebabImg} alt="kebab-img" width='500px' height='300px' style={{display:'block',  marginBottom: '20px'}} />

                        <div className='motivat__wrapper'>   
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={Commits} alt="commit-icon" width='24px' height='24px' />
                                8
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={New} alt="commit-icon" width='24px' height='24px' />
                                5
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={Like} alt="commit-icon" width='24px' height='24px' />
                                12
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={download} alt="commit-icon" width='24px' height='24px' />
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={statistika} alt="commit-icon" width='24px' height='24px' />
                            </span>
                        </div>
                    </div>
                </div>
        </div>
    )
}