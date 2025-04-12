import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import img from "../assets/mclaren.png"
import img2 from "../assets/veloc.png"
import img3 from "../assets/swamp.png"
import img4 from "../assets/trice.png"
import Link from "next/link"

interface CarCardProps {
  name: string
  price: number
  imageSrc: string
}

const product = [
  {
    id: 1,
    name: `McLaren 840`,
    description: "High-quality Hot Wheels & Matchbox car clipart – perfect for party invites, kids crafts, and custom designs!",
    price: 50,
    imageSrc: img.src
  },
  {
    id: 2,
    name: 'Swamp Thing Truck',
    description: 'A rugged and powerful monster truck designed for off-road adventures and thrilling performances.',
    price: 75,
    imageSrc: img2.src  // Replace with the actual image path
  },
  {
    id: 3,
    name: 'Triceratops',
    description: 'A dinosaur-themed car with a unique design inspired by the mighty Triceratops, perfect for collectors and kids alike.',
    price: 60,
    imageSrc: img4.src // Replace with the actual image path
  },
  {
    id: 4,
    name: 'Velociraptor Blue',
    description: 'A sleek and fast dinosaur-inspired car with a striking blue design, perfect for racing enthusiasts and collectors.',
    price: 65,
    imageSrc: img3.src // Replace with the actual image path
  }
];

export default function CarCard({ name, price, imageSrc }: CarCardProps) {

  const id = product.find((item) => item.name === name)?.id || 1; // Default to 1 if not found

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
        <Link href={`/cars/${id}`} className="w-full">
          <button className="flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-zinc-800">
            Buy Now
            <ShoppingCart className="h-4 w-4" />
          </button>
        </Link>
      </div>
    </div>
  )
}
