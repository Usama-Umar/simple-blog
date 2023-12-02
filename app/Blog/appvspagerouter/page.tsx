import React from 'react'
import Link from 'next/link'
const AppvsPageRouter = () => {
  return (
   <main>
   <div className='text-center '>
    <h1 className='text-amber-950 capitalize text-3xl '>App vs Page Router</h1>
  <p  className="bg-gray-600 h-72"> 
  <br />
 
  Next.js has two different routers: the App Router and the Pages Router. The App Router is a newer router that allows you to use React's latest features, such as Server Components and Streaming. The Pages Router is the original Next.js router, which allowed you to build server-rendered React applications and continues to be supported for older Next.js applications.
<br />
At the top of the sidebar, you'll notice a dropdown menu that allows you to switch between the App Router and the Pages Router features. Since there are features that are unique to each directory, it's important to keep track of which tab is selected.
<br />
The breadcrumbs at the top of the page will also indicate whether you're viewing App Router docs or Pages Router docs </p>
    </div>
    <div>  <Link className='text-emerald-400 text-2xl'  href="./">Visit a BLog page</Link><br />
      <Link className='text-emerald-400 text-2xl' href="../">Visit a Home page</Link>   
      </div>   
    </main>
  )
}

export default AppvsPageRouter
