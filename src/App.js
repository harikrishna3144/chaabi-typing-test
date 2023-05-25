
import Source from './components/Source'
import Scope from './components/Scope'
import Generator from './components/Generator'
import Threshold from './components/Threshold'
import Lesson from './components/Lesson'
import WordText from './components/WordText'
import UserType from './components/UserType'
import FooterSection from './components/FooterSection'
import TopContainer from './components/TopContainer'
import './App.css'


const App = () => ( 
  <>
<div className='app-container'>
  <div>
    <TopContainer/>
  </div>
  <div className='container'>
    
  <Source/>
  <Scope/>
  <Generator/>
  <Threshold/>
 
  
  <Lesson/>
  <div className='word-text-container'>
  <WordText/>

  </div>
  <UserType/>

  </div>
  <div className='footer-container'>
  <FooterSection/>

  </div>
  </div>
  
  </>

  )

export default App;
