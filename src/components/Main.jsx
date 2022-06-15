import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Index from '../Pages/Index'
import Edit from '../Pages/Edit'
import Header from '../components/Header'
export default function Main () {

const [bookmarks, setBookmarks] = useState (null)

const URL = "https://bookmarkdbackendiy.herokuapp.com/bookmarks"

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

const updateBookmarks = async (bookmark, id) => {
    await fetch(URL + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookmark)
    })
    getBookmarks()
}

const deleteBookmarks = async id => {
    await fetch(URL + id, {method: 'DELETE'})
    getBookmarks()
  }

  

useEffect(()=> {
    getBookmarks()
},[])
    return (
        <main>
            <Header />
            <Routes>

                <Route path='/' element={<Index bookmarks={bookmarks} 
                createBookmarks={createBookmarks} deleteBookmarks={deleteBookmarks}/>}
                />
                 <Route path='/bookmarks/:id' element={<Edit
                  updateBookmarks={updateBookmarks} 
                  bookmarks={bookmarks} />} />
                </Routes>
        </main>
)
}