// ==========================================================
// MovieCard.jsx
// Representa UNA película dentro del catálogo.
// ==========================================================
function MovieCard({ movie, onEdit, onDelete }) {
  return (
    <div className="movie-card">

      {/* Portada de la película */}
      {movie.portada && (
        <img
          src={movie.portada}
          alt={movie.titulo}
          className="movie-poster"
        />
      )}

      <div className="movie-card-info">
        <h3 className="movie-title">{movie.titulo}</h3>
        <p className="movie-director">🎬 {movie.director}</p>
      </div>

      <div className="movie-card-actions">
        <button className="btn btn-edit" onClick={() => onEdit(movie)}>
          Editar
        </button>
        <button className="btn btn-delete" onClick={() => onDelete(movie.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default MovieCard;