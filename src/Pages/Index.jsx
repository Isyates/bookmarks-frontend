import {useState} from 'react'
import Show from '../components/Show'
import styled from 'styled-components'

const StyledBtn = styled.button`
background-color: green;
border: black2px;
border-radius: 8px;
margin: 2px;
color: white;
padding: 2px 15px ;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: px;

`
const StyledStn = styled.section`

background: url(https://cdn.pixabay.com/photo/2017/07/22/11/09/social-media-2528410_960_720.jpg);
`
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
        <StyledStn>
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
                <StyledBtn type="submit">Add bookmark</StyledBtn>
            </form>
            {bookmarks ? loaded() : loading()}
        </StyledStn>
    )
}