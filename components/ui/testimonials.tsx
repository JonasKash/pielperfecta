"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"

interface Testimonial {
  image: string
  name: string
  username: string
  text: string
  social: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  className?: string
  title?: string
  description?: string
  maxDisplayed?: number
}

export function Testimonials({
  testimonials,
  className,
  title = "Read what people are saying",
  description = "Dummy feedback from virtual customers using our component library.",
  maxDisplayed = 6,
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false)

  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus()
  }

  const handleLoadMore = () => {
    setShowAll(true)
  }

  return (
    <div className={className}>
      {(title || description) && (
        <div className="flex flex-col items-center justify-center pt-5">
          <div className="flex flex-col gap-5 mb-8">
            {title && <h2 className="text-center text-4xl font-medium text-gray-900">{title}</h2>}
            {description && (
              <p className="text-center text-gray-600">
                {description.split("<br />").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i !== description.split("<br />").length - 1 && <br />}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      )}
      <div className="relative">
        <div
          className={cn(
            "flex justify-center items-center gap-4 sm:gap-5 flex-wrap px-4",
            !showAll &&
              testimonials.length > maxDisplayed &&
              "max-h-[720px] overflow-hidden",
          )}
        >
          {testimonials
            .slice(0, showAll ? undefined : maxDisplayed)
            .map((testimonial, index) => (
              <Card
                key={index}
                className="w-full sm:w-80 h-auto p-5 relative bg-white border-gray-200"
              >
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="flex flex-col pl-4">
                    <span className="font-semibold text-base text-gray-900">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
                <div className="mt-5 mb-5">
                  <p className="text-gray-900 font-medium">
                    {testimonial.text}
                  </p>
                </div>
                <button
                  onClick={() => openInNewTab(testimonial.social)}
                  className="absolute top-4 right-4 hover:opacity-80 transition-opacity"
                >
                  <Icons.twitter className="h-4 w-4" aria-hidden="true" />
                </button>
              </Card>
            ))}
        </div>
        {testimonials.length > maxDisplayed && !showAll && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-green-100 to-transparent" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <Button 
                variant="secondary" 
                onClick={handleLoadMore} 
                className="bg-green-600 text-white hover:bg-green-700"
              >
                Cargar Más
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

