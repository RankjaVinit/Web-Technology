import Login from "./Conponents/Login/Login"
import Profile from "./Conponents/Profile/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {



  return (
    <UserContextProvider>
      <h1>useContext Eg :-</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
