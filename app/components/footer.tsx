export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-t from-black via-black/90 to-black/70">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-xs">
        <span>© 2025 Jurassic Project</span>
        <span className="mt-2 sm:mt-0 uppercase tracking-widest text-green-400/60">
          Welcome to the Park
        </span>
      </div>
    </footer>
  )
}
