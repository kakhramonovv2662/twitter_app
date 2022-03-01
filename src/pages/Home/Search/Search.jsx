//scss
import './Search.scss'

//img
import Images from './images/images.svg'
import GirlImages from './images/girl-img.svg'
import TeacherImages from './images/teacher-img.svg'
import SettingImages from './images/setting-icon.svg'

export default function Search() {
    return(
        <>
            <div className='search'>
                <input className='search__input' type="text" placeholder="Search Twitter" required/>
                <div className='search__wrapper'>
                    <img className='search__images' src={Images} alt="images" width='215px' height='100px' />
                    <h3 className='search__title'>
                        You might like
                    </h3>
                    <div className='search__content'>
                        <img className='search__girl-img' src={GirlImages} alt="girl-user-name" width='50px' height='50px' />
                        <span className='search__all-wrapper'>
                            <h3 className='search__name'>
                                Mushtariy
                            </h3>
                            <span className='search__username'>
                                @Mushtar565266
                            </span>
                        </span>
                        <button className='search__btn'>Follow</button>
                    </div>
                    <div className='search__content'>
                        <img className='search__girl-img' src={TeacherImages} alt="girl-user-name" width='50px' height='50px' />
                        <span className='search__all-wrapper'>
                            <h3 className='search__name'>
                                Shuhratbek
                            </h3>
                            <span className='search__username'>
                                @mrshukhrat
                            </span>
                        </span>
                        <button className='search__btn'>Follow</button>
                    </div>
                </div>
                <div className='setting'>
                    <span className='setting__wrapper'>
                        <h2 className='setting__title'>
                            Trends for you
                        </h2>
                        <img className='setting__img' src={SettingImages} alt="setting" width='20px' height='20px' />
                    </span>
                    <div className='setting__content'>
                      <div className='setting__all-wrapper'>
                        <span className='setting__items'>
                                Trending in Germany
                            </span>
                            <h3 className='setting__revo'>
                                Revolution
                            </h3>
                            <span className='setting__tweet'>
                                50.4K Tweets
                            </span>
                      </div>
                      <span className='setting__dotted'>
                          ...
                      </span>
                    </div>
                    <div className='setting__content'>
                      <div className='setting__all-wrapper'>
                        <span className='setting__items'>
                                Trending in Germany
                            </span>
                            <h3 className='setting__revo'>
                                Revolution
                            </h3>
                            <span className='setting__tweet'>
                                50.4K Tweets
                            </span>
                      </div>
                      <span className='setting__dotted'>
                          ...
                      </span>
                    </div>
                    <div className='setting__content'>
                      <div className='setting__all-wrapper'>
                        <span className='setting__items'>
                                Trending in Germany
                            </span>
                            <h3 className='setting__revo'>
                                Revolution
                            </h3>
                            <span className='setting__tweet'>
                                50.4K Tweets
                            </span>
                      </div>
                      <span className='setting__dotted'>
                          ...
                      </span>
                    </div>
                </div>
            </div>
        </>
    )
}