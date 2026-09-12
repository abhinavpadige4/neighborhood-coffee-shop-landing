import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <span className="h-8 w-8 bg-coffee-600 rounded-full flex items-center justify-center text-white font-bold">
                  ☕
                </span>
                <span className="text-xl font-bold text-coffee-800 dark:text-coffee-100">
                  Neighborhood Brew
                </span>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href="#menu" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Menu
              </Link>
              <Link href="#gallery" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Gallery
              </Link>
              <Link href="#hours" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Hours
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}