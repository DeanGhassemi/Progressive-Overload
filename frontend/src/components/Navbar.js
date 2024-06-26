import {Link} from 'react-router-dom'

/** Navigation bar
 * 
 * @returns {JSX} Title bar
 */
const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Progressive Overload</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar