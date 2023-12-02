import Link from "next/link";
import Image from "next/image";
function Blog() {
  return (
    <main>
    <div className="bg-gray-600 h-72">
      <div className="p-3  text-center ">
        <h1 className="text-white  capitalize text-3xl ">Welcome to my Blogs</h1>
      </div>
<div>
  <Link href="../Blog/introduction">1: Here is the Next.js introduction</Link><br />
        <Link href="../Blog/howtouse">2: Here is the description how to use it.</Link>
        <br />
        <Link href="../Blog/appvspagerouter">3: Here is the difference between App vs Page Router.</Link>
</div>

      <nav>
        <Link className="text-stone-300 text-2xl" href="../">Visit a Home page</Link>

      </nav>
    </div>
    </main>
  );
}
export default Blog;