import { Routes, Route } from "react-router-dom"

// Layout
import Layout from "./layouts/Layout"

// Pages
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import BlogsPage from "./pages/BlogsPage"
import TopicsPage from "./pages/TopicsPage"
import CreateBlogPage from "./pages/CreateBlogPage"
import CreateTopicPage from "./pages/CreateTopicPage"
import EditBlogPage from "./pages/EditBlogPage"
import EditTopicPage from "./pages/EditTopicPage"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path='/create' element={<CreatePage />}/>
        <Route path='/blogs' index element={<BlogsPage />}/>
        <Route path='/blogs/:blogId' index element={<EditBlogPage />}/>
        <Route path='/topics' index element={<TopicsPage />}/>
        <Route path='/topics/:topicId' index element={<EditTopicPage />}/>
        <Route path='/create/blog' element={<CreateBlogPage />} />
        <Route path='/create/topic' element={<CreateTopicPage />} />
      </Route>
    </Routes>
  )
}

export default App