import './App.css'
import DarkMode from './components/DarkMode'
import Weather from './components/Weather'

// const [ isLoading, setIsLoading ] = useState
// (true)
// setTimeout(() => {
//   setIsLoading(false)


function App() {
  return (
    <>
    {/* { isLoading && <Loader/> } */}
    <Weather/>
    <DarkMode/>
   
    </>
  )
}

export default App