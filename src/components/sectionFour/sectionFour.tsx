export default function SectionFour() {
  return (
    <section className="grid md:grid-cols-[450px_1fr] bg-gray-200">

      <div className="p-12 lg:p-20">

        <div className="w-42 h-5 bg-green-800"></div>

        <h2 className="text-2xl font-bold my-5 lg:text-4xl">
          A Gentileza Começa Com Uma Xícara
        </h2>

        <p className="mb-10 text-justify italic text-lg">
          Apresentando a coleção Cups of Kindness: quatro bebidas muito especiais, tão deliciosas e refrescantes quanto são bonitas. Duas novas criações, Matcha Lemonade e Violet Drink, se juntam a Pink Drink e Ombré Pink Drink como favoritas instantâneas do verão."
        </p>

        <button className="border-2 border-gray-700 px-8 py-3 hover:bg-gray-700 hover:text-white italic">
          Learn More
        </button>

      </div>

      <div
        className="bg-cover bg-left"
        style={{ backgroundImage: "url(/assets/bg3.jpg)" }}
      />

    </section>
  )
}