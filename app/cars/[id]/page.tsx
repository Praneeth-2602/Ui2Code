import React from 'react'
import ProductDetail from '@/app/components/product-detail'
import img from '@/app/assets/mclaren.png'

function page() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'
      style={{
        boxShadow: "20px 20px 0px rgba(73,70,78,0.80)",
        filter: "blur(0px)",
      }}
    >

      {/* Product Description Section */}
      <div className="mx-auto max-w-5xl px-4 py-8 border rounded-lg bg-zinc-800/50">

        <ProductDetail
          name="McLaren 840"
          description="High-quality Hot Wheels & Matchbox car clipart – perfect for party invites, kids crafts, and custom designs!"
          price={50}
          imageSrc={img.src}
        />
      </div>
    </div>
  )
}

export default page