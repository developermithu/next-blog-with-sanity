import Link from "next/link";

export default function TheHeader() {
  return (
    <nav className="bg-gray-900 text-white shadow ">
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform lg:text-3xl hover:text-gray-700"
            >
              Brand
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full md:flex md:items-center md:justify-between">
          <div className="flex flex-col px-2 py-3 gap-x-3 -mx-4 md:flex-row md:mx-0 md:py-0">
            <Link
              href="/"
              className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >
              Home
            </Link>
            <Link
              href="/"
              className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >
              About
            </Link>
            <Link
              href="/"
              className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded hover:bg-gray-900 hover:text-gray-100 md:mx-2"
            >
              Contact
            </Link>
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
