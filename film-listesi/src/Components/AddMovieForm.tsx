import { useState } from "react";

interface AddMovieFormProps {
  addMovie: (title: string) => void;
}

function AddMovieForm({ addMovie }: AddMovieFormProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    
    addMovie(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2 mb-6">
      <input
        type="text"
        placeholder="Film veya dizi adı girin..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors"
      >
        Ekle
      </button>
    </form>
  );
}

export default AddMovieForm;