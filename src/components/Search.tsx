export default function Search() {
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            window.location.href = `https://google.com/search?q=${e.currentTarget.value}`;
        }
    }
    
    return(
        <div className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <input 
                onKeyDown={handleSearch}
                placeholder="Search..."
                className="w-128 bg-transparent border-b border-gray-400 px-5 py-2 outline-none placeholder:text-gray-400 text-gray-800"
                />
        </div>
    )
}