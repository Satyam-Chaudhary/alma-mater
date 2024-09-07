'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PromotionalCardProps {
  imageUrl: string
  availableText: string
  notifyText: string
  onNotify: () => void
}

export function PromotionalCard({
  imageUrl,
  availableText,
  notifyText,
  onNotify
}: PromotionalCardProps) {
  return (
    <Card className="w-64 h-64 overflow-hidden rounded-xl relative">
      <CardContent className="p-0 h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-50" />
        <img
          src={imageUrl}
          alt="Promotional image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-opacity-70 backdrop-blur-sm flex justify-between items-center">
          <span className="text-white font-semibold">{availableText}</span>
          <Button
            onClick={onNotify}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-none"
          >
            {notifyText}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}