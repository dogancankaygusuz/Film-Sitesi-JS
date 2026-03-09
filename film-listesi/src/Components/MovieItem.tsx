import { useState } from "react";
import type { IMovie } from "../Interfaces/IMovie";

interface MovieItemProps {
  movie: IMovie;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}

function MovieItem({ movie, onToggle, onDelete, onEdit }: MovieItemProps) {
  const[isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(movie.title);

  const handleSave = () => {
    if (editTitle.trim() === "") return;
    onEdit(movie.id, editTitle);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 mb-3 bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:border-gray-500 transition-colors gap-3 sm:gap-0">

      <div className="flex items-center gap-3 w-full sm:w-auto">
        {!isEditing && (
          <input
            type="checkbox"
            checked={movie.isWatched}
            onChange={() => onToggle(movie.id)}
            className="w-5 h-5 accent-yellow-400 cursor-pointer flex-shrink-0"
          />
        )}
        
        {isEditing ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="px-2 py-1 bg-gray-900 text-white border border-yellow-400 rounded focus:outline-none w-full sm:w-48"
            autoFocus
          />
        ) : (
          <span
            className={`text-lg select-none truncate max-w-[200px] ${
              movie.isWatched ? "line-through text-gray-500" : "text-white font-medium"
            }`}
          >
            {movie.title}
          </span>
        )}
      </div>

      <div className="flex gap-2 justify-end">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white rounded transition-colors text-sm font-medium"
          >
            Kaydet
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white rounded transition-colors text-sm font-medium"
          >
            Düzenle
          </button>
        )}
        <button
          onClick={() => onDelete(movie.id)}
          className="px-3 py-1 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded transition-colors text-sm font-medium"
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default MovieItem;