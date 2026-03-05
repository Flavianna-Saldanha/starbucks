export default function SectionThree() {
  return (
    <section className="grid md:grid-cols-2 lg:min-h-200">

      <div
        className="p-12 bg-cover bg-left flex items-center lg:p-20"
        style={{ backgroundImage: "url(/assets/bg2.jpg)" }}
      >
        <div>
          <h2 className="w-56 text-2xl lg:text-4xl font-bold mb-6 lg:w-96">
            O Novo Ultra Caramel
            Frappuccino Chegou!
          </h2>

          <p className="mb-10 text-justify italic lg:w-130">
            Parabéns por fazer aquilo! Isso merece caramelo. Muito caramelo.
            Com chantilly de cold brew. O novo Ultra Caramel Frappuccino já está aqui!
          </p>

          <button className="border-2 border-gray-700 px-8 py-3 hover:bg-gray-700 hover:text-white italic">
            Learn More
          </button>
        </div>
      </div>

      <div
        className="bg-cover bg-center h-full"
        style={{ backgroundImage: "url(/assets/f5.jpg)" }}
      />

    </section>
  )
}