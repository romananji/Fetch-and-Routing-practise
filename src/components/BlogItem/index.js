// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {id, title, author, topic, imageUrl, avatarUrl} = itemDetails
  return (
    <Link className="linked-blog-item" to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img src={imageUrl} className="blog-image" alt={`item${id}`} />
        <div className="blog-item-info">
          <p>{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} className="avatar-image" alt={`avatar${id}`} />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
