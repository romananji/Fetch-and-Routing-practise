// Write your JS code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {blogsItemDate: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      author: data.author,
      content: data.content,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
    }
    this.setState({blogsItemDate: updatedData, isLoading: false})
  }

  render() {
    const {blogsItemDate, isLoading} = this.state
    const {title, author, content, imageUrl, avatarUrl} = blogsItemDate
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="blue" height={50} width={50} />
        ) : (
          <div className="blog-item-details-container">
            <h2 className="title-heading">{title}</h2>
            <div className="author-infoo">
              <img src={avatarUrl} alt={author} className="avatar-pic" />
              <p>{author}</p>
            </div>
            <img src={imageUrl} className="blog-item-image" alt={title} />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
