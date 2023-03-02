const fetchUser = () => {
  const user = JSON.parse(window.localStorage.getItem('BlogAuthor'))
  return user
}

const setUserLocally = (userAndToken) => {
  window.localStorage.setItem('BlogAuthor', JSON.stringify(userAndToken))
}

export { fetchUser, setUserLocally }