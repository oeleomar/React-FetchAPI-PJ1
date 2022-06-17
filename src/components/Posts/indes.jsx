import './styles.css'

import { PostCart } from '../PostCard'

export const Posts = ({posts}) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCart
      key={post.id}
      title={post.title}
      body={post.body}
      cover={post.cover}
    />
    ))}
  </div>
)