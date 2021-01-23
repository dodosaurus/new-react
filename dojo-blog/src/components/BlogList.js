import React from 'react'
import { Link } from 'react-router-dom'

function BlogList({ blogList, title }) {
    console.log(blogList)
    return (
        <div className="container">
            <h2>{title}</h2>
            {blogList.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <Link to={'/blogs/' + blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </Link>
                </div>
            ))}
        </div>
        
    )
}

export default BlogList
