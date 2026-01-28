const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full h-80 bg-[url('/bg-header.jpg')] bg-cover bg-no-repeat bg-center relative overflow-hidden lg:h-[500px] max-w-[1920px]">

      <div className="absolute inset-0 bg-black/88" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white px-4">
        <img src="/logo.svg" alt="logo da UMA" className="w-20 mb-6" />
        <section className="text-center">
          <h1 className="text-2xl md:text-3xl mb-4 drop-shadow-lg leading-tight">
            <span className="text-primary-color font-bold">U</span>nião de{' '}
            <span className="text-primary-color font-bold">M</span>ães de{' '}
            <span className="text-primary-color font-bold">A</span>njos{' '}
            <span className="text-primary-color font-bold">P</span>ernambuco
          </h1>
          <p className="text-sm md:text-lg drop-shadow-md max-w-lg">
            Por direitos e esperança às famílias afetadas pelo Zika.
          </p>
        </section>
      </div>
    </header>
  )
}


export default Header;