import { BrowserRouter } from "react-router-dom"
import UnauthenticatedApp from './UnauthenticatedApp'

function App() {
  return (
    <BrowserRouter>
      {/* {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />} */}
        {<UnauthenticatedApp />}
    </BrowserRouter>
  )
}

export default App
