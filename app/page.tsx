import Image from "next/image"
import { Menu, Search } from "lucide-react"
import Link from "next/link"
import CarCard from "./components/car-card"
import ProductDetail from "./components/product-detail"
import EventCard from "./components/event-card"
import logo from "./assets/hotwheels-logo.png"
import ford from "./assets/fordgt840.png"
import event1 from "./assets/events1.png"
import event2 from "./assets/event2.jpeg"

export default function Home() {
  return (
    <div className="h-screen bg-background text-white w-full pb-5">
      {/* Main Navigation */}
      <div className="mx-auto w-7xl px-4 pt-4 flex justify-between">
        <Image
          src={logo} // Replace with actual logo path
          alt="Hot Wheels Logo"
          className="h-25 w-auto"
        />
        <div className="flex items-center justify-between rounded-full border border-purple-400 bg-[#D6CFE1] px-8 py-2 shadow-lg">
          {/* Left: Logo + Menu */}
          <div className="flex items-center gap-10">

            <nav className="hidden md:flex items-center gap-8 text-base text-black/80 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/accessories" className="hover:text-white transition-colors">Accessories</Link>
              <Link href="/cars" className="hover:text-white transition-colors">Cars</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact us</Link>
            </nav>
          </div>

          {/* Right: Search + Buttons */}
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
            <button className="rounded-full bg-black/80 px-5 py-2 text-sm text-white hover:bg-black transition-colors">
              Sign in
            </button>
            <button className="rounded-full bg-black/80 px-5 py-2 text-sm text-white hover:bg-black transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <section className="mt-2 flex flex-col gap-4 h-[80vh] w-full">
        {/* Hot Trends Section */}
        <div className="mx-auto max-w-7xl px-4 py-2 h-[50vh]">
          <h2 className="text-sm font-medium text-white/70">Hot Trends</h2>

          {/* Hero Banner */}
          <div className="mt-4 relative w-full flex justify-center">
            <div className="relative w-[140vh] h-[40vh] rounded-4xl bg-gradient-to-b from-[#49464e] to-[#171718] overflow-hidden flex items-center justify-center px-6 blur-none"
              style={{
                boxShadow: "20px 20px 0px rgba(73,70,78,0.75)",
                filter: "blur(0px)",
              }}
            >

              {/* Big Text in the Background */}
              <h1 className="absolute mb-[16vh] text-[17vh] font-extrabold text-white z-0 leading-none tracking-tight">
                FORD Gt 40
              </h1>

              {/* Car Image in Foreground */}
              <div className="absolute z-10">
                <Image
                  src={ford}
                  alt="Ford GT 40"
                  width={950}
                  height={400}
                  className="h-auto w-auto"
                />
              </div>

              {/* View Car Button (Bottom Right) */}
              <div className="absolute bottom-4 right-4 z-20">
                <button className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-md hover:bg-white/30 transition">
                  View Car
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Hot Events Section */}
        <div className="mx-auto w-7xl px-4 py-4 h-[30vh]">
          <h2 className="text-sm font-medium text-white/70">Hot Events</h2>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <EventCard
              title="Sunday Events"
              description="What you'll find at the event"
              subtext="hot events"
              imageSrc={event1.src}
            />
            <EventCard
              title="Wheels on Fire"
              description="special event for the weekend"
              subtext="hot events"
              imageSrc={event2.src}
            />
          </div>
        </div>


      </section >
    </div >
  )
}
