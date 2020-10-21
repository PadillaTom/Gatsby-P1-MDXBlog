import React from 'react'
import Post from './Post'
import Banner from '../Banner'

const Posts = ({ posts, title }) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        {/* Posts Column */}
        <article>
          {posts.map(post => {
            return <Post key={post.id} {...post}></Post>
          })}
        </article>
        {/* Banner Column */}
        <article>
          <Banner></Banner>
        </article>
      </div>
    </section>
  )
}

export default Posts
