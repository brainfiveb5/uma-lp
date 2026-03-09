const Footer = () => {
  return (
    <footer className="w-full bg-primary-color text-white 
      p-4 flex flex-col gap-6 items-center
    ">
      <div className="flex flex-col w-2/3 gap-6 max-w-4xl">

        <div className="flex flex-col w-full md:flex-row md:justify-evenly gap-6 md:gap-0">

          <div className="flex md:justify-center">
            <img className="w-10" src="logo.svg" alt="uma logo" />
          </div>

          <div className="flex gap-6 md:gap-12 md:w-full justify-evenly flex-col md:flex-row">
            <div>
              <h2 className="text-xl">Navegação:</h2>
              <nav className="flex flex-col text-sm gap-2 underline">
                <a href="#about">Quem somos?</a>
                <a href="#founder">Conheça a nossa fundadora!</a>
                <a href="#contacts">Nos encontre de forma rápida!</a>
              </nav>
            </div>

            <div>
              <h2 className="text-xl ">Informações:</h2>
              <nav className="flex flex-col text-sm gap-1 underline">
                <a href="https://maps.app.goo.gl/xsaCvvkz6kXX85Lv5">Recife, PE - Brasil</a>
              </nav>
            </div>
          </div>


        </div>

        <div className="w-full flex flex-col justify-center items-center gap-6">
          <div className="w-full h-px bg-white flex justify-center items-center "></div>
          <a target="_blank" href="https://our-landing.vercel.app/" className="text-center underline">© 2025 Brain Five.</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;