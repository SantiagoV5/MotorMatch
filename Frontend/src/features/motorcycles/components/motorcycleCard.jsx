export const MotorcycleCard = ({ motorcycle }) => {
  return (
    <div className="card">
      {/* ... otros datos */}
      {motorcycle.modelo >= 2026 && (
        <span className="badge badge-new">
          🆕 Modelo 2026 - Consultar disponibilidad
        </span>
      )}
      {!motorcycle.precio_estimado && motorcycle.modelo >= 2026 && (
        <p className="price-pending">
          Precio por confirmar - Ver en concesionario
        </p>
      )}
    </div>
  );
};