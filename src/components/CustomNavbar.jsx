const CustomNavbar = () => {
  return (
    <div>
      <nav
        className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
        style={{ backgroundColor: "var(--Green-Primary, #00875A)" }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            socialPI
          </span>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-green py-2 px-12 border border-white hover:border-transparent"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CustomNavbar;
