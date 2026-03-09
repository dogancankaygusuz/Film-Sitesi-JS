import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-10 text-center drop-shadow-md">
        🎬 Film & Dizi Listem
      </h1>

      <HomePage />
      
      <footer className="mt-auto py-6 text-gray-500 text-sm">
        Eğitim Projesi olarak geliştirilmiştir.
      </footer>
    </div>
  );
}

export default App;