import './motivat.scss'
//img
import mavlonovImg from '../../img/mavlonov-img.svg'
import commitIcon from './images/commit-icon.svg'
import newIcon from './images/new-icon.svg'
import likeIcon from './images/like-icon.svg'
import downloadIcon from './images/download-icon.svg'
import statictikaIcon from './images/statictika-icon.svg'
import BigImg from './images/big-img.svg'

export default function Motivat() {
    return(
        <div>
            <div className='motivat'>
                <span className='motivat__pinned'>
                    Pinned Tweet
                </span>
                <div className='motivat__all-wrapper'>
                    <img className='motivat__people-img' src={mavlonovImg} alt="img" width='60px' height='60px' />
                    <div>
                        <div className='motivat__content'>
                            <h3 className='motivat__name'>
                                Bobur
                            </h3>
                            <p className='motivat__username'>
                                @bobur_mavlonov · Apr 1
                            </p>
                            <span className='motivat__dotted'>
                                ...
                            </span>
                        </div>
                        <div>
                        <p className='motivat__text'>
                            4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, 
                            uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, 
                            sog'lik va jismoniy holatni normallashtirishni reja qildim
                        </p>
                        </div>
                        <div className='motivat__wrapper'>   
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={commitIcon} alt="commit-icon" width='24px' height='24px' />
                                10
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={newIcon} alt="commit-icon" width='24px' height='24px' />
                                1
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={likeIcon} alt="commit-icon" width='24px' height='24px' />
                                8
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={downloadIcon} alt="commit-icon" width='24px' height='24px' />
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={statictikaIcon} alt="commit-icon" width='24px' height='24px' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='motivat__all-wrapper'>
                    <img className='motivat__people-img' src={mavlonovImg} alt="img" width='60px' height='60px' />
                    <div>
                        <div className='motivat__content'>
                            <h3 className='motivat__name'>
                                Bobur
                            </h3>
                            <p className='motivat__username'>
                                @bobur_mavlonov · Apr 1
                            </p>
                            <span className='motivat__dotted'>
                                ...
                            </span>
                        </div>
                        <div>
                        <p className='motivat__text motivat__second-text'>
                        Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 
                        Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 
                        Gap faqat biznes trenerlar haqida emas.
                        </p>
                        </div>
                        <div className='motivat__wrapper'>   
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={commitIcon} alt="commit-icon" width='24px' height='24px' />
                                8
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={newIcon} alt="commit-icon" width='24px' height='24px' />
                                5
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={likeIcon} alt="commit-icon" width='24px' height='24px' />
                                12
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={downloadIcon} alt="commit-icon" width='24px' height='24px' />
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={statictikaIcon} alt="commit-icon" width='24px' height='24px' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='motivat__all-wrapper'>
                    <img className='motivat__people-img' src={mavlonovImg} alt="img" width='60px' height='60px' />
                    <div>
                        <div className='motivat__content'>
                            <h3 className='motivat__name'>
                                Bobur
                            </h3>
                            <p className='motivat__username'>
                                @bobur_mavlonov · Apr 1
                            </p>
                            <span className='motivat__dotted'>
                                ...
                            </span>
                        </div>
                        <span style={{ display:'block', marginBottom:'20px'}}>
                            A bo'pti maskamasman
                        </span>
                        <img src={BigImg} alt="big-img" width='500px' height='350px' style={{ display:'block', marginBottom:'15px'}} />
                        <div className='motivat__wrapper'>   
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={commitIcon} alt="commit-icon" width='24px' height='24px' />
                                8
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={newIcon} alt="commit-icon" width='24px' height='24px' />
                                5
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={likeIcon} alt="commit-icon" width='24px' height='24px' />
                                12
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={downloadIcon} alt="commit-icon" width='24px' height='24px' />
                            </span>
                            <span className='motivat__item'>
                                <img className='motivat__item-images' src={statictikaIcon} alt="commit-icon" width='24px' height='24px' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}