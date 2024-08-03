import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../public/images/LogoAppOonceptionWhiteSpear.png'
import { faMagnifyingGlass, faSun } from '@fortawesome/free-solid-svg-icons';

function Header() {
    function addNum(): void {
        console.log(1);
    }

    return (
        <div className="w-auto h-screen p-4 bg-terciariaBG flex flex-col gap-4">
            <div><img className='w-12 h-auto' src={logo} alt="logo" /></div>
            <div className='flex flex-col h-auto gap-4 *:w-8 *:h-8 *:text-principalWG *:block *:m-auto *:cursor-pointer'>
                <FontAwesomeIcon icon={faSun}/>
                <FontAwesomeIcon onClick={addNum} icon={faMagnifyingGlass}/>
                <div>O</div>
                <div>O</div>
            </div>
        </div>
    );
}

export default Header;