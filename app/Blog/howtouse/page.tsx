import React from 'react'
import Link from 'next/link'    
const Howtouseit = () => {
  return (
    <div className='text-center '>
      <h1 className='text-amber-950 capitalize text-3xl '>How to Use These Docs?</h1>
<p className="bg-gray-600 h-72">\
<br />
    On the left side of the screen, you'll find the docs navbar. The pages of the docs are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your application. However, you can read them in any order or skip to the pages that apply to your use case.
<br />
On the right side of the screen, you'll see a table of contents that makes it easier to navigate between sections of a page. If you need to quickly find a page, you can use the search bar at the top, or the search shortcut (Ctrl+K or Cmd+K).
<br />
To get started, checkout the <a className='text-orange-700' href="https://nextjs.org/docs/getting-started/installation">Installation</a> guide.</p>
    
      <div>  <Link className='text-emerald-400 text-2xl' href="./">Visit a BLog page</Link><br />
      <Link className='text-emerald-400 text-2xl' href="../">Visit a Home page</Link>   
      </div>
    </div>   
  )
}

export default Howtouseit
