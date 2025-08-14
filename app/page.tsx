import { GameList } from "@/components/game-list"
import type React from "react";
import {SectionHeader} from "@/components/Layout";

export default function HomePage() {
  return (
    <>
        <SectionHeader/>
        <GameList />
    </>
  )
}
