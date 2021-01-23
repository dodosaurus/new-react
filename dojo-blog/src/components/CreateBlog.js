import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function CreateBlog() {

    const authorSelectItems = {
        M: 'mario',
        J: 'joshi'
    }

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState(authorSelectItems.M);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method : 'POST',
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            console.log('new blog added')
            //history.go(-1);
            history.push('/');
        })

    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value={authorSelectItems.M}>Mario</option>
                    <option value={authorSelectItems.J}>Joshi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    )
}

export default CreateBlog
