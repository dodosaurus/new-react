import BlogList from './BlogList';
import useFetch from '../hooks/useFetch';

function Home() {
    const { data: blogList, isLoading, error } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading ... </div>}
            {blogList && <BlogList blogList={blogList} title="All blogs" />}
        </div>
    )
}

export default Home
