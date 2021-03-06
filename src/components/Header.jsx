import { Link } from 'react-router-dom';
import Search from './Search';

const Header = ({ handleChangeDarkMode }) => {

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white shadow-md transition ease-in-out duration-500">
            <div className="container mx-auto py-3 px-8 flex justify-between items-center">
                <Link to="/" className="font-semibold tracking-wider uppercase">
                    The Movies
                </Link>
                <div className="pr-6 flex items-center">
                    <Search />
                    <div className="relative inline-block w-10 ml-5 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" onClick={() => handleChangeDarkMode()} />
                        <label for="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
