import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 rounded-t-md shadow-[-3px_-5px_90px_50px_]  shadow-cyan-500">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-2xl font-bold">Company Name</h3>
          </div>
          <nav className="w-full sm:w-auto">
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  <button className="text-gray-300 hover:text-white focus:text-white focus:outline-none">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <button className="text-gray-300 hover:text-white focus:text-white focus:outline-none">
                    About
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <button className="text-gray-300 hover:text-white focus:text-white focus:outline-none">
                    Services
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <button className="text-gray-300 hover:text-white focus:text-white focus:outline-none">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
