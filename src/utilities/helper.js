const fetchUser = () => {
  const user = JSON.parse(window.localStorage.getItem('BlogAuthor'))
  return user
}

const setUserLocally = (userAndToken) => {
  window.localStorage.setItem('BlogAuthor', JSON.stringify(userAndToken))
}

const signUserOut = (setUser) => {
  setUser(null)
  window.localStorage.clear('BlogAuthor')
}

export { fetchUser, setUserLocally, signUserOut }