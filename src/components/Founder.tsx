import Line from "./Line";

const Founder = () => {
  return (
    <section id="founder" className="
      flex flex-col items-center
      w-full max-w-[1920px] px-4 lg:px-8
      lg:flex-row-reverse lg:justify-evenly
      gap-8 lg:gap-12 lg:py-20
    ">
      <div className="flex flex-col justify-center max-w-2xl lg:text-left items-center b">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-center">
          Conheça nossa fundadora Germana Soares!
        </h2>
        <p className="text-sm lg:text-base leading-relaxed text-center max-w-lg mx-auto lg:mx-0 mb-2">
          Pernambucana de 34 anos, Germana transformou a maternidade em missão pela inclusão após o nascimento de Guilherme com microcefalia pela Zika. Mãe de três filhos com deficiências e vivendo com fibromialgia, fundou a UMA-PE (atende 470 crianças) e co-fundou UniZika Brasil (1.800 famílias).
        </p>
        <p className="text-sm lg:text-base leading-relaxed text-center max-w-lg mx-auto lg:mx-0 mb-2">
          Líder atuante, construiu diretrizes com UNICEF, influencia políticas públicas e recebeu prêmios como Empreendedor Social <a className="text-blue-500 underline" href="https://www1.folha.uol.com.br/empreendedorsocial/2018/11/associacao-de-maes-busca-direitos-de-criancas-com-sindrome-do-virus-da-zika.shtml" target="_blank">(Folha)</a> e reconhecimentos de Oxford, UnB e ALEPE. Sua luta derruba preconceitos e promove empatia coletiva.
        </p>
        <p className="text-sm lg:text-base leading-relaxed text-center max-w-lg mx-auto lg:mx-0">
          "É uma luta coletiva pela dignidade e direitos das famílias."
        </p>
      </div>

      <img
        className="
          rounded-2xl w-full max-w-md lg:max-w-lg h-auto
          shadow-2xl
        "
        src="founder.jpg"
        alt="Germana Soares, fundadora da UMA-PE e UniZika Brasil[file:2]"
      />

      <Line />
    </section>
  );
};

export default Founder;
