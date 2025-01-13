function TopHeader() {
    return(
        <div className="flex flex-row gap-4 justify-end bg-gray-500 p-2 border-gray-400">
            <button type="button">Notas do Notion:
                <a href="https://www.notion.so/Oonception-f06c440db0cf49ffb5518a8c9a3a5fa3" target="_blank" rel="noopener noreferrer" className="to-blue-400"> Notion</a>
            </button>
            <button type="button" className="">Compartilhar</button>
            <button type="button">Histórico</button>       
        </div>
    )
}

export default TopHeader