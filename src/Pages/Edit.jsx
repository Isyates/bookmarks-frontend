import { useParams, useNavigate} from "react-router-dom"
import { useState } from "react"

export default function Edit({ bookmarks, updateBookmarks }) {

    const { id } = useParams()
    let navigate = useNavigate()

    const bookmark = bookmarks.find(bookmark => bookmark._id === id)

    const [ editForm, setEditForm ] = useState(bookmark)
    console.log(bookmark)
    const handleChange = (event) => {
        setEditForm((prevState) => ({
            ...prevState,
            [event.target.title]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateBookmarks(editForm, id)
        navigate('/')
    }
    console.log(editForm)
    return (
    <div>
        <h1>{bookmark.title}</h1>

        <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    title="title"
                    placeholder="title"
                    value={editForm.title}
                    onChange={handleChange}
                     />

            <input
                    type="text"
                    title="url"
                    placeholder="url"
                    value={editForm.url}
                    onChange={handleChange}
                     />
                    <button type="submit">edit bookmark</button>
        </form>
    </div>
    )
}