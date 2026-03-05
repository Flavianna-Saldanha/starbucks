export default function SectionTwo() {
  return (
    <section className="grid md:grid-cols-2">

      <div
        className="hidden md:block md:bg-cover md:bg-center md:min-h-125"
        style={{ backgroundImage: "url(/assets/f3.jpg)" }}
      />

      <div>
        <div className="p-12 lg:p-20">

          <div className="w-42 h-5 bg-green-800"></div>

          <h2 className="font-bold my-5 text-2xl lg:text-4xl lg:w-130">
            Apresentando o Vanilla Sweet Cream Cold Brew - Doce, cremoso, gelado e intenso.
          </h2>

          <p className="leading-7 mb-10 text-justify italic">
            Pouco antes de servir, nosso exclusivo blend Starbucks® Cold Brew Coffee,
            lentamente preparado, é finalizado com uma delicada camada de creme doce
            de baunilha feito na casa, que se espalha suavemente pelo copo.
          </p>

          <button className="border-2 border-gray-700 px-8 py-3 hover:bg-gray-700 hover:text-white italic">
            Learn More
          </button>

        </div>

        <div
          className=" h-130 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/f4.jpg)" }}
        />

      </div>

    </section>
  )
}