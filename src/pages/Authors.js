import { Routes, Route } from 'react-router-dom'
import AuthorsLinks from '../components/AuthorsLinks';
import Author from '../components/Author'

function Authors() {

    const authors = [
        {name: "Charles Dickens", id: "1"},
        {name: "Euler", id: "2"},
        {name: "Warm Author", id: "3"}
    ]
    
    return (
        <div>
            <Routes>
                <Route path="" element={ <AuthorsLinks authors={authors} /> }/>
                <Route path=":authorId" element= { <Author />} />
            </Routes>
        </div>
    )
}

export default Authors;