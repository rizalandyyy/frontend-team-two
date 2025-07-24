import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen bg-gray-100">
      <main className="container mx-auto flex items-center justify-center flex-col gap-8 p-4">
        <nav className="w-full">
          <div className="mx-auto flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-blue-500 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/product/1" className="text-blue-500 hover:underline">
                  Product
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-500 hover:underline">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
        <p className="text-lg text-gray-700">This is a simple starter template for your Next.js application.</p>
        <Image src="/next.svg" color="white" alt="Next.js Logo" width={150} height={150} />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
