export function ButtonLoL({ children, filtro, setFilter, filtroAtivo }) {
    const isAtivo = filtro === filtroAtivo;

    return (
        <button
            onClick={() => setFilter(filtro)}
            className={`border-8 border-primaryGold py-2 px-6 flex items-center justify-center gap-2 transition-all duration-200
                ${isAtivo ? 'bg-gradient-button bg-gradienButton' : 'bg-white dark:bg-dark hover:bg-gradient-button hover:bg-gradienButton'}`}
        >
            <img src={`/icons/icons_game/icon_class_${filtro}.svg`} alt="" />
            <p className="text-primaryGold dark:text-white" >
                {children}
            </p>
        </button>
    );
}
