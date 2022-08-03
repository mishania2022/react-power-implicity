import { Navbar } from './components/Navbar/Navbar'
import { Slider } from './components/Slider/Slider'
import "./index.scss";

export const App = () => {
  return (
    <div className='cover'>
      <Navbar/>
      <Slider/>
    </div>
  )
}
