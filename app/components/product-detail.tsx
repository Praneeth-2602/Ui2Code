import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductDetailProps {
  id:string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
}

export default function ProductDetail({ id, name, description, price, imageSrc }: ProductDetailProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6" id = {id}>
      
      {/* Left Section */}
      <div className="space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-poppins">{name}</h1>
        <h2 className="text-2xl font-bold text-green-400">${price.toFixed(2)}</h2>

        {/* Main Image with Stack Effect and Arrows */}
        <div className="relative w-fit mx-auto">
          {/* Background Shadow */}
          <div className="absolute top-3 left-3 w-full h-full rounded-[40px] bg-zinc-300 z-0"></div>

          {/* Foreground Image Card */}
          <div className="relative rounded-[40px] overflow-hidden bg-white shadow-xl z-10 p-7">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="w-[640px] h-[332px] object-contain rounded-[32px]"
            />

            {/* Carousel Arrows */}
            <button className="absolute top-1/2 left-0 -translate-y-1/2 z-20 hover:scale-110 transition">
              <ChevronLeft className="h-12 w-8 text-black" />
            </button>
            <button className="absolute top-1/2 right-0 -translate-y-1/2 z-20 hover:scale-110 transition">
              <ChevronRight className="h-12 w-8 text-black" />
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="h-32 w-full rounded-[30px] bg-white shadow-sm"></div>
          <div className="h-32 w-full rounded-[30px] bg-white shadow-sm"></div>
          <div className="h-32 w-full rounded-[30px] bg-white shadow-sm"></div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col space-y-6">
        {/* Description */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-white/70 text-lg leading-relaxed">{description}</p>
        </div>

        <hr className="border-t border-white/20" />

        {/* Color & Quantity Selectors */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            {/* Color Buttons */}
            <div className="flex gap-2">
              <button className="h-7 w-7 rounded-full bg-red-500" />
              <button className="h-7 w-7 rounded-full bg-green-500" />
              <button className="h-7 w-7 rounded-full bg-white border" />
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-white/70">Quantity:</span>
              <div className="relative">
                <select className="bg-white/10 text-white text-sm rounded-full px-3 py-1 appearance-none pr-6">
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1} className="text-black">
                      {i + 1}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-white text-xs">▼</div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-white/20" />

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 rounded-md bg-white/10 py-2 text-sm uppercase hover:bg-white/20">
            Buy Now
          </button>
          <button className="flex-1 rounded-md bg-white/10 py-2 text-sm uppercase hover:bg-white/20">
            Add to Cart
          </button>
        </div>

        <hr className="border-t border-white/20" />

        {/* Reviews */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Reviews :</h3>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg bg-white/5 p-2">
                {/* Left Section */}
                <div className="flex items-center gap-2 w-1/2">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                    <Image
                      src="/user-placeholder.jpg"
                      alt="User"
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {[...Array(5)].map((_, idx) => (
                        <svg
                          key={idx}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={idx < 4 ? "currentColor" : "none"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-3.5 w-3.5 text-yellow-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M11.48 3.499l2.157 4.372 4.823.702-3.49 3.402.823 4.797-4.313-2.27-4.313 2.27.823-4.797-3.49-3.402 4.823-.702L11.48 3.5z"
                          />
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-white font-medium">Username</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-10 w-px bg-white/20 mx-2" />

                {/* Comment */}
                <div className="w-1/2 text-xs text-white/80">
                  Very good product!
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
