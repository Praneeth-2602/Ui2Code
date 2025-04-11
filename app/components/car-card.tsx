import Image from "next/image"
import { ShoppingCart } from "lucide-react"

interface CarCardProps {
  name: string
  price: number
  imageSrc: string
}

export default function CarCard({ name, price, imageSrc }: CarCardProps) {
  return (
    <div className="rounded-lg bg-zinc-700/50 p-4 transition-transform hover:scale-[1.02]">
      <div className="relative h-40 w-full overflow-hidden rounded-md">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-lg font-medium">{name}</h3>
        <span className="font-bold">${price}</span>
      </div>
      <div className="mt-3 flex justify-end">
        <button className="flex items-center gap-2 rounded-md bg-zinc-600 px-3 py-1 text-sm hover:bg-zinc-500">
          Buy Now
          <ShoppingCart className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
