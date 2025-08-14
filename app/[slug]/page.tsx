"use client";

import {Game, gamesData} from "@/lib/games-data"
import {GameList} from "@/components/game-list";
import {GameCard} from "@/components/game-card";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {SectionHeader} from "@/components/Layout";

type Props = { params: { slug: string }; };
export default function GamePage({params}: Props) {
    const game: Game | undefined = gamesData.find((g) => g.slug === params.slug);

    const router = useRouter();

    useEffect(() => {
        if (!game?.url) return;

        const timeout = setTimeout(() => {
            window.location.href = game.url;
        }, 500);

        return () => clearTimeout(timeout);
    }, [game?.url]);

    return (
        <>

           {game ? (
               <>
                   <SectionHeader title={game.title} text={game.description}/>
                   <GameCard key={game.id} game={game}/>
               </>

           ) : (
               <>
                   <SectionHeader/>

                   <GameList/>
               </>)}
        </>
    );
}
