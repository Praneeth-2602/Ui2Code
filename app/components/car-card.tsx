import Image from "next/image"
import { ShoppingCart } from "lucide-react"

interface CarCardProps {
  name: string
  price: number
  imageSrc: string
}

export default function CarCard({ name, price, imageSrc }: CarCardProps) {
  return (
    <div className="flex flex-col justify-between h-full rounded-3xl bg-gradient-to-b from-[#D6CFE1] to-[#75717B] p-4 text-black shadow-xl transition-transform hover:scale-[1.02]"
      style={{
        boxShadow: "20px 20px 0px rgba(73,70,78,0.80)",
        filter: "blur(0px)",
      }}
    >

      {/* Top: Name and Price */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-medium">{name}</h3>
        <span className="text-xl font-bold">${price}</span>
      </div>

      {/* Middle: Image */}
      <div className="relative flex-1 h-40 w-full mb-4 overflow-hidden rounded-xl">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      {/* Bottom: Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-zinc-800">
          Buy Now
          <ShoppingCart className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
