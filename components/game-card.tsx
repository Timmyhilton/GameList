"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Game {
  id: string
  title: string
  thumbnail: string
  type: "play" | "download"
  url: string
  description?: string
  category?: string
}

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const handleImageError = () => {
    setImageLoading(false)
    setImageError(true)
  }

  const handleGameAction = () => {
    window.open(game.url, "_blank", "noopener,noreferrer")
  }

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 bg-white border border-gray-200">
      <CardContent className="p-0">
        <div className="flex items-center gap-4 p-4">
          {/* Game Thumbnail - Fixed 96x96 */}
          <div className="relative w-24 h-24 flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
            {!imageError ? (
              <>
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <Image
                  src={game.thumbnail || "/placeholder.svg?height=96&width=96"}
                  alt={`${game.title} thumbnail`}
                  width={96}
                  height={96}
                  loading='lazy'
                  className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
                    imageLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="text-center">
                  <div className="w-8 h-8 bg-gray-400 rounded-lg mx-auto mb-1 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-gray-500">No image</p>
                </div>
              </div>
            )}

            {/* Category Badge */}
            {game.category && (
              <div className="absolute top-1 left-1">
                <span className="px-1.5 py-0.5 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 rounded">
                  {game.category}
                </span>
              </div>
            )}
          </div>

          {/* Game Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-200 text-lg">
              {game.title}
            </h3>

            {game.description && (
              <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">{game.description}</p>
            )}

            {/* Mobile Action Button */}
            <div className="sm:hidden">
              <Button
                onClick={handleGameAction}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200"
                size="sm"
              >
                {game.type === "play" ? (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Play Now
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </>
                )}
                <ExternalLink className="w-3 h-3 ml-2 opacity-70" />
              </Button>
            </div>
          </div>

          {/* Desktop Action Button */}
          <div className="hidden sm:block flex-shrink-0">
            <Button
              onClick={handleGameAction}
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 group-hover:shadow-lg"
              size="sm"
            >
              {game.type === "play" ? (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Play Now
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </>
              )}
              <ExternalLink className="w-3 h-3 ml-2 opacity-70" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
