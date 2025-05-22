export function CardAuthor({nome, foto, linkLinkedin, linkGit}) {
    return(
        <div className="flex flex-col items-center justify-center" >
            <div className="relative" >
                <div className="w-full max-w-36" >
                    <img src={`/authors/${foto}`} alt="" />
                </div>
                <p className="relative -top-5 text-center text-primaryGold text-2xl" >{nome}</p>
            </div>
            <ul className="flex items-center justify-center gap-7" >
                <li className="p-3 border border-primaryGold rounded-full" >
                    <a href="">
                        {linkLinkedin}
                        <img className="max-w-8" src="/icons/icons_social/icon_linkedin.svg" alt="Icone Linkedim" />
                    </a>
                </li>
                <li className="p-3 border border-primaryGold rounded-full" >
                    <a href="">
                        {linkGit}
                        <img className="max-w-8" src="/icons/icons_social/icon_github.svg" alt="Icone GitHub" />
                    </a>
                </li>
            </ul>
        </div>
    )
}