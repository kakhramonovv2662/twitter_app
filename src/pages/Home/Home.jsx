//icon
import leftIcon from  './img/left-icon.png'

//scss
import './Home.scss'
import Tweets from './Tweets/Tweets'
import Media from './media/media'

export default function Home() {
    return(
        <>
           <header>
               <div className="container border">
                   <div className='Boburjon'>
                       <img className='Boburjon__icon' src={leftIcon} alt="left_arrow" width='25px' height='20px' />
                       <div className='Boburjon__wrapper'>
                           <h3 className='Boburjon__title'>
                            Bobur
                           </h3>
                           <span className='Boburjon__tweets'>
                            1,070 <span className='Boburjon__tweets'>Tweets</span>
                           </span>
                       </div>
                   </div>
                   <Tweets />
                   <Media />

               </div>
           </header>
        </>
    )
}