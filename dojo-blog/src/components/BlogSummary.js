import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function BlogSummary({title, body, author, id}) {
    
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleClick = () => {

        fetch('http://localhost:8000/blogs/' + id, {
            method : 'DELETE',
            headers : { "Content-Type" : "application/json" },
        }).then(() => {
            setIsPending(false);
            console.log('blog deleted')
            //history.go(-1);
            history.push('/');
        })

    }

    return (
        <article>
            <h2>{title}</h2>
            <p>Written by {author}</p>
            <div>{body}</div>
            {!isPending && <button onClick={handleClick}>Delete this blog</button>}
            {isPending && <button disabled>Deleting the blog...</button>}
        </article>
    )
}

export default BlogSummary
