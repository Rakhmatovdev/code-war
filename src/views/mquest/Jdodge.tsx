export default function CSharpOneCompiler() {
  return (
    <div className="mx-4 sm:mx-16 rounded-xl sm:rounded-3xl bg-gray-800 overflow-hidden shadow-lg">
      <header className="bg-gray-900 text-gray-200 px-4 py-2">
        <h3 className="text-lg sm:text-xl">Interaktiv C# muhiti</h3>
      </header>
      <iframe
        title="OneCompiler C#"
        src="https://onecompiler.com/embed/csharp"
        frameBorder="0"
        width="100%"
        height="600px"
        className="block"
      />
    </div>
  )
}
