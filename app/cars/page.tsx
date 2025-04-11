import React from 'react'
import CarCard from '@/app/components/car-card'
import { Search } from 'lucide-react'
import mclaren from '@/app/assets/mclaren.png'
import veloc from '@/app/assets/veloc.png'
import swamp_thing from '@/app/assets/swamp.png'
import trice from '@/app/assets/trice.png'

function page() {
  return (
    <div className="h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6">

        {/* Top bar */}
        <div className="flex justify-between items-center mb-4 h-[10vh]">
          <h3 className="text-3xl font-extrabold tracking-wide">CARS</h3>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search cars...."
                className="w-44 md:w-72 rounded-full bg-white/10 py-2 pl-4 pr-10 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
            </div>
            <button className="text-sm font-semibold text-white hover:underline transition">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <CarCard name="McLaren 840" price={50} imageSrc={mclaren.src} />
          <CarCard name="Velociraptor Blue" price={50} imageSrc={veloc.src} />
          <CarCard name="Swamp Thing" price={30} imageSrc={swamp_thing.src} />
          <CarCard name="Triceratops" price={30} imageSrc={trice.src} />
        </div>
      </div>
    </div>
  )
}

export default page
