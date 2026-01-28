const Contacts = () => {
  return (
    <section id="contacts" className="h-72 flex items-center flex-col justify-center gap-5 lg:gap-10 lg:h-62 w-full lg:py-40">
      <article >
        <h2 className="text-center text-2xl lg:text-4xl font-bold">Nos encontre de forma rápida!</h2>
      </article>
      <nav className="flex justify-center items-center gap-4">
        <a href="https://www.instagram.com/uniaodemaesdeanjos.pe/" target="_blank">
          <img src="insta.svg" alt="Instagram" />
        </a>
        <a href="" target="_blank">
          <img src="facebook.svg" alt="Facebook" />
        </a>
        <a href="" target="_blank">
          <img src="whats.svg" alt="Whatsapp" />
        </a>
        <a href="" target="_blank">
          <img src="email.svg" alt="Email" />
        </a>
      </nav>
    </section>
  )
}

export default Contacts;