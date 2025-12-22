import Link from 'next/link'
import { Protest_Revolution } from "next/font/google"

import Header from './header'
const protestRevolution = Protest_Revolution({
  subsets: ["latin"],
  weight: "400",
})

export default function Main() {
  return (
    <main className="min-h-screen w-full bg-[url('/Image/land.jpg')] bg-cover bg-center">

      <div className="min-h-screen bg-gradient-to-b from-green-950/40 to-black/75 flex items-center justify-center relative">

        <section className='absolute top-2 w-[65%]'>
          <Header />
        </section>


        <h1 className={`${protestRevolution.className}  text-center font-bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[10rem] bg-clip-text text-transparent bg-gradient-to-br from-green-900 via-green-500 to-yellow-800  drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]`} >  JURASSIC  </h1>

      </div>
    </main>
  )
}
