// Write your JS code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      topic: each.topic,
      author: each.author,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
    }))
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    console.log(blogsData)
    return (
      <div className="blog-data-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="blue" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(each => <BlogItem itemDetails={each} key={each.id} />)
        )}
      </div>
    )
  }
}
export default BlogList
