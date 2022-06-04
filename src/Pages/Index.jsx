import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Index ({bookmarks, createBookmarks, updateBookmarks}) {

    const [form, setForm] = useState ({
        title: '',
        url: ''
    })

    const handleChange = evt => {
        setForm({
            ...form,
            [evt.target.title]: evt.target.value
        })
    }
        const handleSubmit = evt => {
            evt.preventDefault();
            createBookmarks(form);
            setForm({
                title: "",
                url: ""
            })
        }
        const loaded = () => bookmarks.map (bookmarks => (
            <div key={bookmarks._id}
            className="bookmark">
                <a href={`${bookmarks.url}`}><h1>{bookmarks.title}</h1></a>
                <button onClick>delete</button>

                <Link to={`/bookmarks/${bookmarks._id}`}><button>edit</button></Link>
                

            </div>
        ))
    
    const loading = () => <h1>Loading...</h1>

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    title="title"
                    placeholder="title"
                    value={form.title}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    title="url"
                    placeholder="url"
                    value={form.url}
                    onChange={handleChange}
                />
                <button type="submit">Add bookmark</button>
            </form>
            {bookmarks ? loaded() : loading()}
        </section>
    )
}