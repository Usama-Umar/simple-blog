import React from 'react'
import Link from 'next/link'
const Nextjsintro = () => {
  return (
    <main>
      <div className='text-center ' >

        <h1 className="text-amber-950 text-3xl "> What is Next.js?</h1>
        <p className="bg-gray-600 h-72 ">
          <br />
          Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
<br />
          Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.
<br />
          Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.
        </p>

      </div>
      <div>  <Link className='text-2xl text-emerald-400' href="../">Visit a BLog page</Link><br />
      <Link className='text-emerald-400 text-2xl' href="../">Visit a Home page</Link>
     
      </div>
    </main>
  )
}

export default Nextjsintro
