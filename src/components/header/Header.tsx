export const Header = () => {
  return (
    <header>
      <div className="h-2.5 bg-green-700"></div>

      <div className="max-w-285 mx-auto flex justify-between items-center h-25 px-5">

        <div>
          <img src="/assets/logo.png" alt="Starbucks Logo" className="w-16 h-16" />
        </div>

        <div className="flex items-center gap-12">

          <form className="flex">
            <input
              type="text"
              placeholder="Buscar"
              className="border border-gray-400 px-4 py-2 outline-none"
            />

            <button type="submit" className="-ml-8">
              <img src="/assets/loupe.png" alt="Buscar" className="w-4 h-4" />
            </button>
          </form>

          <img
            src="/assets/menu.png"
            alt="Menu"
            className="w-6 h-6 cursor-pointer"
          />

        </div>

      </div>
    </header>
  )
}

export default Header;