import React from 'react'
import ProductDetail from '@/app/components/product-detail'

function page() {
  return (
    <div>

        {/* Product Description Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 border-t border-zinc-800">
        

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

export default page