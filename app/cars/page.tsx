import React from 'react'
import CarCard from '@/app/components/car-card'
import { Search } from 'lucide-react'

function page() {
  return (
    <div>

        
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
    </div>
  )
}

export default page