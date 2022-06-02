import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Index ({bookmark, createBookmark}) {

    const [form, setForm] = useState ({
        title: '',
        url: ''
    })
    return (<p>Tis but a scratch</p>)
}