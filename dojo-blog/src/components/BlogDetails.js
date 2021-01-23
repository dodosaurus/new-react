import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js'
import BlogSummary from './BlogSummary.js'

function BlogDetails(props) {

    const { id } = useParams();
    const { data, isLoading, error } = useFetch("http://localhost:8000/blogs/" + id);
    
    return (
        <div className="blog-details">
            {data && <BlogSummary title={data.title} body={data.body} author={data.author} id={data.id} />}
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading ... </div>}
        </div>

    );

    }
    export default BlogDetails
