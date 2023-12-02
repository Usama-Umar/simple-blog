import Image from 'next/image'
import Link from 'next/link'  

export default function Home() {
  return (
    <main className='bg-gray-600 h-72 '>

     <nav className='text-center capitalize rounded-full'>
     <h1 className='text-white text-4xl '>hello Welcome to my Website</h1>
     <Link className='text-emerald-400 text-3xl ' href="./Blog">Check out tha Blog page</Link>
     </nav>

    </main>

  )
}
