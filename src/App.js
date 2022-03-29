import AppRoutes from './App.routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './style/globalStyle'

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
        <GlobalStyle />
      </Router>
    </>
  )
}

export default App
