import { Routes, Route } from "react-router-dom"

// Layout
import Layout from "./layouts/Layout"

// Pages
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}/>
      </Route>
    </Routes>
  )
}

export default App