import { useState } from 'react'
import BlogList from './BlogList';

function Home() {

    const [blogList, setBlogList] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

    const handleDelete = (id) => {
        const newBlogs = blogList.filter((blog) => blog.id !== id)
        setBlogList(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogList={blogList} title="All blogs" handleDelete={handleDelete} />
           </div>
    )
}

export default Home
