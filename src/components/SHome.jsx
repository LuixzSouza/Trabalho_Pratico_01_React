import { CardAuthor } from "./CardAuthor";

export function SHome() {
    return (
        <section className="bg-home_white_lol dark:bg-home_lol bg-center bg-cover min-h-screen py-8 flex flex-col items-center justify-center gap-6 text-center md:py-0 transition-all duration-500 ease-in-out">
            <h1 className="text-primaryGold text-5xl" >TRABALHO PRÁTICO DE REACT COM API</h1>
            <p className="text-white text-1xl" >Painel Interatico com dados de League of Legends usando React, Axios & Tailwind</p>
            <div className="flex flex-col item-center justify-center gap-20 md:flex-row" >
                <CardAuthor nome={"Renan"} foto={"renanOpen.jpg"} />
                <CardAuthor nome={"Luiz"} foto={"FotoLuizFormal.jpg"} />
                <CardAuthor nome={"Itallo"} foto={"itallo.png"} />
            </div>
        </section>
    )
}