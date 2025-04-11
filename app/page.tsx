import Image from "next/image"
import { Search } from "lucide-react"
import Link from "next/link"
import CarCard from "./components/car-card"
import ProductDetail from "./components/product-detail"
import EventCard from "./components/event-card"


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navigation */}
      <header className="p-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <div className="mx-auto max-w-7xl px-4 py-2">
        <div className="flex items-center justify-between rounded-full bg-purple-100/20 p-2 px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=100"
              alt="Hot Wheels Logo"
              width={100}
              height={40}
              className="h-10"
            />
            <nav className="hidden md:flex items-center space-x-4 ml-6">
              <Link href="/" className="text-sm text-white/80 hover:text-white">
                Home
              </Link>
              <Link href="/accessories" className="text-sm text-white/80 hover:text-white">
                Accessories
              </Link>
              <Link href="/cars" className="text-sm text-white/80 hover:text-white">
                Cars
              </Link>
              <Link href="/contact" className="text-sm text-white/80 hover:text-white">
                Contact us
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-40 md:w-64 rounded-full bg-purple-100/10 py-1 pl-3 pr-8 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-purple-400"
              />
              <Search className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
            </div>
            <button className="rounded-full bg-purple-700 px-3 py-1 text-xs">Sign in</button>
            <button className="rounded-full bg-purple-700 px-3 py-1 text-xs">Sign up</button>
          </div>
        </div>
      </div>

      {/* Hot Trends Section */}
      <div className="mx-auto max-w-7xl px-4 py-2">
        <h2 className="text-sm font-medium text-white/70">Hot Trends</h2>

        {/* Hero Banner */}
        <div className="mt-2 rounded-lg bg-gradient-to-r from-zinc-800 to-zinc-700 p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-6xl font-bold tracking-tight">FORD GT 40</h1>
            <button className="mt-4 rounded-md bg-white/20 px-4 py-1 text-sm backdrop-blur-sm">View Car</button>
          </div>
          <div className="absolute right-10 top-1/2 -translate-y-1/2">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Ford GT 40"
              width={400}
              height={200}
              className="h-auto w-auto"
            />
          </div>
        </div>
      </div>

      {/* Hot Events Section */}
      <div className="mx-auto max-w-7xl px-4 py-4">
        <h2 className="text-sm font-medium text-white/70">Hot Events</h2>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <EventCard
            title="Sunday Events"
            description="What you'll find at the event"
            subtext="hot events"
            imageSrc="/placeholder.svg?height=200&width=300"
          />
          <EventCard
            title="Wheels on Fire"
            description="special event for the weekend"
            subtext="hot events"
            imageSrc="/placeholder.svg?height=200&width=300"
          />
        </div>
      </div>

      {/* Cars Section */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <h2 className="text-2xl font-medium mb-4">Cars</h2>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">CARS</h3>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search cars..."
                className="w-40 md:w-64 rounded-full bg-white/10 py-1 pl-3 pr-8 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-purple-400"
              />
              <Search className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
            </div>
            <button className="text-sm text-white/70">Apply Filters</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <CarCard name="McLaren 840" price={50} imageSrc="/placeholder.svg?height=150&width=220" />
          <CarCard name="Velociraptor Blue" price={50} imageSrc="/placeholder.svg?height=150&width=220" />
          <CarCard name="Swamp Thing" price={30} imageSrc="/placeholder.svg?height=150&width=220" />
          <CarCard name="Triceratops" price={30} imageSrc="/placeholder.svg?height=150&width=220" />
        </div>
      </div>

      {/* Product Description Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 border-t border-zinc-800">
        <h2 className="text-2xl font-medium mb-6">DESCRIPTION</h2>

        <ProductDetail
          name="McLaren 840"
          description="High-quality Hot Wheels & Matchbox car clipart – perfect for party invites, kids crafts, and custom designs!"
          price={50}
          imageSrc="/placeholder.svg?height=300&width=400"
        />
      </div>
    </div>
  )
}
