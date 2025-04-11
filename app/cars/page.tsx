import React from 'react'
import CarCard from '@/app/components/car-card'
import { Menu, Search } from 'lucide-react'
import mclaren from '@/app/assets/mclaren.png'
import veloc from '@/app/assets/veloc.png'
import swamp_thing from '@/app/assets/swamp.png'
import trice from '@/app/assets/trice.png'

function page() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 w-full">

        {/* Top bar */}
        <div className="flex justify-between items-center mb-4 h-[10vh]">
          <h3 className="text-3xl font-extrabold tracking-wide">CARS</h3>
          <div className="flex items-center gap-4">
          <div className="relative flex items-center rounded-full bg-white px-4 py-2">
              <Menu className="mr-2 h-5 w-5 text-black/60" />
              <input
                type="text"
                placeholder="Search..."
                className="w-36 md:w-64 bg-transparent text-sm text-black placeholder-black/50 focus:outline-none"
              />
              <Search className="ml-2 h-5 w-5 text-black/60" />
            </div>
          </div>
          <button className="text-sm font-semibold text-white hover:underline transition">
            Apply Filters
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 min-h-[80vh] grid-rows-2">
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
