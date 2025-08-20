import logo from '../../assets/download.png'

export const Navbar = () => {
    return (
        <>
            <header className='flex text-4xl p-3 gap-2 border-b-2 bg-gray-100 border-gray-300'>
                <img src={logo} alt="Logo" className='inline w-[1.5em] h-[1.5em]'/>
                <h1 className='font-bold'>MyNotes</h1>
            </header>
        </>
    )
}