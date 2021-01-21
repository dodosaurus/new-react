import React from 'react'

function BlogList({ blogList, title }) {
    return (
        <div className="container">
            <h2>{title}</h2>
            {blogList.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default BlogList

