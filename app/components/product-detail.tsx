import Image from "next/image"
import { User } from "lucide-react"

interface ProductDetailProps {
  name: string
  description: string
  price: number
  imageSrc: string
}

export default function ProductDetail({ name, description, price, imageSrc }: ProductDetailProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="rounded-lg overflow-hidden">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} width={500} height={300} className="w-full h-auto" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-16 w-full rounded-md bg-zinc-800"></div>
          <div className="h-16 w-full rounded-md bg-zinc-800"></div>
          <div className="h-16 w-full rounded-md bg-zinc-800"></div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-medium mb-2">Description</h2>
          <p className="text-white/70">{description}</p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <button className="h-8 w-8 rounded-full bg-red-500"></button>
            <button className="h-8 w-8 rounded-full bg-green-500"></button>
            <button className="h-8 w-8 rounded-full bg-white"></button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-white/70">Quantity:</span>
            <div className="flex items-center rounded-full bg-white/10 px-3 py-1">
              <button className="px-2 text-lg">-</button>
              <span className="w-8 text-center">1</span>
              <button className="px-2 text-lg">+</button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 rounded-md bg-white/10 py-2 text-sm uppercase hover:bg-white/20">BUY NOW</button>
            <button className="flex-1 rounded-md bg-white/10 py-2 text-sm uppercase hover:bg-white/20">
              ADD TO CART
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Reviews:</h3>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg bg-zinc-800 p-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700">
                  <User className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <div className="font-medium">Username</div>
                  <div className="text-white/60 text-xs">Very good product!</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
