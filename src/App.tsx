import Form from "./components/form/Form"
import Button from "./components/ui/Button"
import Logo from "./components/ui/Logo"
import WatchVideoBtn from "./components/ui/WatchVideoBtn"
import Footer from "./layout/Footer"
import NavigationBar from "./layout/NavigationBar"
import HeroSection from "./pages/Home/HeroSection"


function App() {

  return (
    <>
    <NavigationBar/>
    <HeroSection/>
      {/* <Button value="Login"/>
      <WatchVideoBtn value='Watch Video'/>
      <Form cols={20} rows={8}/> */}
    </>
  )
}

export default App
