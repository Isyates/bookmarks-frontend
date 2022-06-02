import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Index from '../Pages/Index'
import Edit from '../Pages/Edit'

export default function Main () {

const [bookmarks, setBookmarks] = useState ()

const URL = "http://localhost:3001/bookmarks"

const getBookmarks = async () => {
    const data = await fetch(URL).then(res => res.json())
    setBookmarks(data)
}
const createBookmarks = async bookmark => {
    await fetch(URL, {
        method:'POST',
        headers: {
            'content-Type': 'Application/json'
        },
        body: JSON.stringify(bookmark)
    })
    getBookmarks()
}

// const updateBookmarks = async (bookmark, id) => {
//     await fetch(URL)
// }

useEffect(()=> {
    getBookmarks()
},[])
    return (
        <main>
            <Routes>
                <Route path='/' element={<Index bookmarks={bookmarks} createBookmarks={createBookmarks}/>}/>
            </Routes>
        </main>
)
}