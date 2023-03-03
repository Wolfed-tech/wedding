import Header from './components/Header'
import LocationSection from './components/LocationSection'
import MainSection from './components/MainSection'
import ProgrammSection from './components/ProgrammSection'
import QuizSection from './components/QuizSection'
import WishesSection from './components/WishesSection'
import './App.css'
import { Nav } from './components/Header/Header'

function App() {

  return (
    <div className='app_wrapper'>
      <div className='container mx-auto xs:px-2 md:px-4'>
        <Header />
        <MainSection />
        <ProgrammSection />
        <LocationSection />
        <QuizSection />
        <WishesSection />
      </div>
    </div>
  )
}

export default App
