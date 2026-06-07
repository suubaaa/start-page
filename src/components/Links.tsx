export default function Links () {
    return(
        <div className="absolute bottom-4 left-4 ">
            <h1 className="text-black text-4xl font-cinzel font-bold"
                style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)' }}>
                    Quick links
                </h1>
            <ul>
                <li>
                    <a href="https://youtube.com"
                    className="block text-black/60 text-2xl font-cinzel hover:text-black/90 font-bold transition-colors"
                    style={{ textShadow: '0 0 10px rgba(255,255,255,0.6)' }}>
                        youtube
                    </a>
                </li>
                <li>
                    <a href="https://x.com"
                    className="block text-black/60 text-2xl font-cinzel hover:text-black/90 font-bold transition-colors"
                    style={{ textShadow: '0 0 10px rgba(255,255,255,0.6)' }}>
                        twitter
                    </a>
                </li>
                <li>
                    <a href="https://gmail.com"
                    className="block text-black/60 text-2xl font-cinzel hover:text-black/90 font-bold transition-colors"
                    style={{ textShadow: '0 0 10px rgba(255,255,255,0.6)' }}>
                        gmail
                    </a>
                </li>
                <li>
                    <a href="https://www.miruro.tv/"
                    className="block text-black/60 text-2xl font-cinzel hover:text-black/90 font-bold transition-colors"
                    style={{ textShadow: '0 0 10px rgba(255,255,255,0.6)' }}>
                        anime
                    </a>
                </li>
                <li>
                    <a href="https://mangafire.to/"
                    className="block text-black/60 text-2xl font-cinzel hover:text-black/90 font-bold transition-colors"
                    style={{ textShadow: '0 0 10px rgba(255,255,255,0.6)' }}>
                        manga
                    </a>
                </li>
            </ul>
        </div>
    )
}