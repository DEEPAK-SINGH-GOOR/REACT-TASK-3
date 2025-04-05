import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from './redux/Action'
import { deleteBlogs, fetchBlogs } from './redux/blogs/Action'
import Card from './components/Card'


const App = () => {
  const { blogs, isLoading } = useSelector((store) => store.blog)
  console.log(blogs);

  const dispatch = useDispatch()
  const inc = () => {
    dispatch(increase(10))
  }
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])
  const onDelete = (id) => {
    dispatch(deleteBlogs(id))
  }
  return (
    <div>
      {
        isLoading ? <h1>Loading........</h1> :
          blogs.map((blog, index) => <Card  {...blog} index={index} onDelete={onDelete} />)
      }
    </div>
  )
}

export default App