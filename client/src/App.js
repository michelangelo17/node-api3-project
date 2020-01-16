import React, { useEffect } from 'react'
import { getPosts } from './redux/thunks'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state)
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <>
      <h1>All Posts</h1>
      {posts.map((post, i) => (
        <div key={i}>
          <p>{post.text}</p>
        </div>
      ))}
    </>
  )
}

export default App
