import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logo from '../../public/images/LogoAppOonceptionWhiteSpear.png'
import MenuUser from '../Minor/MenuUser';
import { faMagnifyingGlass, faSun } from '@fortawesome/free-solid-svg-icons';

function MenuLateral() {
    function addNum(): void {
        console.log(1);
    }

    function addNewPag(): void {
        
    }

    return (
        <div className="w-fit h-screen border-r-2 border-double border-r-red-200 p-4 bg-terciariaBG flex flex-col gap-4">
            <div>
                <MenuUser></MenuUser> {/* Informações do Usuário */}
            </div>
            <div className='flex flex-col h-auto gap-4 *:w-fit *:h-fit *:text-principalWG *:block *:cursor-pointer'>
                <button onClick={addNewPag}>Criar nova página</button>
                <p className='hover:bg-gray-400'>
                    <FontAwesomeIcon icon={faSun}/> Aparência
                </p>
                <p className="hover:bg-gray-400">
                    <FontAwesomeIcon onClick={addNum} icon={faMagnifyingGlass}/> Pesquisar
                </p>
                <div className='hover:bg-gray-400'>Notificaçãoes</div>
                <div className='hover:bg-gray-400'>Avisos</div>
            </div>
        </div>
    );
}

export default MenuLateral;