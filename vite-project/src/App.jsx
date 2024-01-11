import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogInForm from './components/LogInForm/LogInForm'
import SignUpForm from './components/SignUpForm/SignUpForm'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <LogInForm />
        {/* <SignUpForm /> */}
      </div>
  )
}

export default App
