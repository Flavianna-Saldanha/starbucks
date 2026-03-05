export default function Banner() {
  return (
    <section
      className="bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: "url(/assets/bg.jpg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl sm:text-6xl lg:text-[90px] leading-tight lg:leading-22.5 font-bold mb-6">
          Starbucks® <br /> Happy Hour
        </h1>

        <p className="text-base sm:text-lg italic max-w-xl">
          Nos encontraremos na sua caixa de entrada. As ofertas de bebidas estão a caminho.
        </p>

        <div className="flex flex-wrap gap-6 md:gap-10 mt-10 md:mt-16">

          <img
            src="/assets/c1.jpg"
            alt="Bebida 1"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-[6px] border-green-700 object-cover"
          />

          <img
            src="/assets/c2.jpg"
            alt="Bebida 2"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-[6px] border-green-700 object-cover"
          />

          <img
            src="/assets/c3.jpg"
            alt="Bebida 3"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-[6px] border-green-700 object-cover"
          />

        </div>

      </div>
    </section>
  )
}