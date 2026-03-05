export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-zinc-100 text-2xl font-semibold mb-4">
              Starbucks
            </h3>

            <p className="text-sm leading-relaxed max-w-md">
              Experiências únicas com cafés especiais, bebidas artesanais
              e momentos que tornam cada pausa do seu dia ainda mais especial.
            </p>
          </div>

          <div className="md:text-right">
            <h4 className="text-zinc-100 font-medium mb-4">
              Créditos
            </h4>

            <p className="text-sm">
              Projeto desenvolvido por <span className="text-zinc-200 font-medium">Flavianna Saldanha</span>.
            </p>

            <p className="text-sm mt-2">
              Interface inspirada em experiências modernas de cafeterias premium.
            </p>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Starbucks. Todos os direitos reservados.
        </div>

      </div>

    </footer>
  )
}