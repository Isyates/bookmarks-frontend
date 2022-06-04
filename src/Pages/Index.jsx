import {useState} from 'react'
import Show from '../components/Show'

export default function Index ({bookmarks, createBookmarks, updateBookmarks, deleteBookmarks}) {

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

       

        const loaded = () => bookmarks.map (bookmark => (
            <Show key={bookmark._id} bookmark={bookmark} deleteBookmarks={deleteBookmarks}/>
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