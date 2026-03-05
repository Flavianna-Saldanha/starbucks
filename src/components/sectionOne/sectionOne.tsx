export default function SectionOne() {
  return (
    <section className="md:grid md:grid-cols-2">

      <div className="p-12 lg:p-20">
					<div className="w-42 h-5 bg-green-800"></div>

					<h2 className="font-bold my-5 text-2xl lg:text-4xl lg:w-100">
						Quatro Bebidas, Um Milhão de Razões
					</h2>

					<p className="italic mb-6">
						"Ame a si mesmo e você estará pronto." - Lady Gaga
					</p>

					<p className="leading-7 mb-10 text-justify italic">
						Lady Gaga e Starbucks compartilham uma missão: construir um mundo mais gentil e corajoso. Por meio da Born This Way Foundation, Lady Gaga inspirou seus fãs a praticar a gentileza em suas comunidades — tanto online quanto no mundo real. Com a sua ajuda, podemos capacitar os jovens a espalharem ainda mais gentileza.
					</p>

					<button className="border-2 border-gray-700 px-8 py-3 hover:bg-gray-700 hover:text-white transition italic">
						Learn More
					</button>
      </div>

			<div
					className="h-96 bg-cover bg-center"
					style={{ backgroundImage: "url(/assets/f2.jpg)" }}
      	/>

      <div
        className="hidden md:block md:col-start-2 md:row-start-1 md:row-span-2 md:bg-cover md:bg-center"
        style={{ backgroundImage: "url(/assets/f1.jpg)" }}
      />

    </section>
  )
}