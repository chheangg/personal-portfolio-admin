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
import LoginFormPage from "./pages/LoginFormPage"

// Services
import topicService from "./services/topicService"
import blogService from "./services/blogService"
import authService from "./services/authService"

// Helper
import { fetchUser, setUserLocally } from "./utilities/helper"
import { useEffect, useState } from "react"

const App = () => {
  const [user, setUser] = useState(null)
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    const userAndToken = fetchUser()
    console.log(userAndToken)
    if (userAndToken) {
      setUser(userAndToken.user)
      blogService.setToken(userAndToken.token)
      topicService.setToken(userAndToken.token)
    }
  }, [])

  const loginHandler = async (event) => {
    event.preventDefault()
    
    const { username, password } = event.target

    try {
      const userAndToken = await authService.login({
        username: username.value,
        password: password.value
      })

      console.log(userAndToken)
      setUser(userAndToken.user)
      blogService.setToken(userAndToken.token)
      topicService.setToken(userAndToken.token)
      setUserLocally(userAndToken)
    } catch (err) {
      setLoginError(err.response.data.message)
    }
  }

  if (!user) {
    return (
      <Routes>
        <Route path='/' element={<LoginFormPage onLogin={loginHandler} />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path='create' element={<CreatePage />}/>
        <Route path='blogs' element={<BlogsPage />}/>
        <Route path='blogs/:blogId' element={<EditBlogPage />}/>
        <Route path='topics' element={<TopicsPage />}/>
        <Route path='topics/:topicId' element={<EditTopicPage />}/>
        <Route path='create/blog' element={<CreateBlogPage />} />
        <Route path='create/topic' element={<CreateTopicPage />} />
      </Route>
    </Routes>
  )
}

export default App