import { Routes, Route } from "react-router-dom"

// Layout
import Layout from "./layouts/Layout"

// Pages
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import BlogsPage from "./pages/BlogsPage"
import TopicsPage from "./pages/TopicsPage"
import BlogFormPage from "./pages/BlogFormPage"
import TopicFormPage from "./pages/TopicFormPage"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path='/create' element={<CreatePage />}/>
        <Route path='/blogs' index element={<BlogsPage />}/>
        <Route path='/topics' index element={<TopicsPage />}/>
        <Route path='/create/blog' element={<BlogFormPage />} />
        <Route path='/create/topic' element={<TopicFormPage />} />
      </Route>
    </Routes>
  )
}

export default App