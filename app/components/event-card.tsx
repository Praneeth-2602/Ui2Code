import Image from "next/image"

interface EventCardProps {
  title: string
  description: string
  subtext: string
  imageSrc: string
}

export default function EventCard({ title, description, subtext, imageSrc }: EventCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        width={600}
        height={300}
        className="h-48 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-white/80">{description}</p>
        <p className="mt-1 text-xs text-white/60">{subtext}</p>
      </div>
    </div>
  )
}
