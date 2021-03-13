import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = "HP title" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-800 text-sm font-serif bg-gray-200 overflow-hidden">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:text-gray-700 px-3 py-2 rounded text-lg lg:text-2xl">
                  About
                </a>
              </Link>
              <Link href="/skills">
                <a className="text-gray-300 hover:text-gray-700 px-3 py-2 rounded text-lg lg:text-2xl">
                  Skills
                </a>
              </Link>
              <Link href="/works">
                <a className="text-gray-300 hover:text-gray-700 px-3 py-2 rounded text-lg lg:text-2xl">
                  Works
                </a>
              </Link>
              <Link href="/blog">
                <a className="text-gray-300 hover:text-gray-700 px-3 py-2 rounded text-lg lg:text-2xl">
                  Blog
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t text-gray-800 border-gray-800">
        <p>©︎ Yoshiki Izukune</p>
      </footer>
    </div>
  );
}
