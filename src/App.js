import { Routes, Route, useLocation } from "react-router-dom"

// Layout
import Layout from "./layouts/Layout"

// Pages
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import BlogsPage from "./pages/BlogsPage"
import TopicsPage from "./pages/TopicsPage"

const App = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage location={location} />}/>
        <Route path='/create' element={<CreatePage location={location}/>}/>
        <Route path='/blogs' index element={<BlogsPage location={location} />}/>
        <Route path='/topics' index element={<TopicsPage location={location} />}/>
      </Route>
    </Routes>
  )
}

export default App