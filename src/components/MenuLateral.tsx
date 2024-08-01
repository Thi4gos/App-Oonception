import logo from '../../public/images/LogoAppOonceptionWhiteSpear.png'

function Header() {
    return (
        <div className="w-screen h-auto p-4 bg-outer-space flex flex-row justify-between">
            <div className='w-auto h-auto'>
                <img className="w-24 h-auto" src={logo} alt="Logo" />
            </div>
            <div className='h-5 w-auto'>
                Exemplo
            </div>
            <div className='h-5 w-auto'>
                Exemplo também
            </div>
        </div>
    )
}

export default Header;