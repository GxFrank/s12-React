import type { Gasto } from '../types/Gasto'

//DESAFIO 1:
// En este archivo de define el tipo de datos gasto src/components/GastoItem.tsx
// Los 5 tipos de categorias para los gasto son:
// Comida, Transporte, Entretenimiento, Estudios, Otros 

interface GastoItemProps {
  gasto: Gasto
  onEliminar: (id: string) => void
}

//DESAFIO 5
//  Aqui agregamos la nueva modificación 
function GastoItem({ gasto, onEliminar }: GastoItemProps) {
  const formatearFecha = (fecha: string) => {
    const date = new Date(fecha)
    // Formato DD/MM/YYYY usando toLocaleDateString
    return date.toLocaleDateString('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  //DESAFIO 10
  // Aqui esta el metodo para agregar una diferente color para cada categoria
  const colorCategoria = (categoria: string) => {
    const colores ={
      comida : '#FFF3CD',
      transporte: '#D1ECF1',
      entretenimiento: '#E2E3E5',
      estudios: '#FFFFFF',
      salud: '#F8D7DA',
      otros: '#D4EDDA'
    }
    return colores[categoria as keyof typeof colores] || '#F5F5F5'
  }

  const obtenerEmoji = (categoria: string) => {
    const emojis = {
      comida: '🍔',
      transporte: '🚌',
      entretenimiento: '🎮',
      estudios: '📚',
      salud: '⚕️',
      otros: '📌'
    }
    return emojis[categoria as keyof typeof emojis] || '📌'
  }

  return (
    <div
      className={`gasto-item${gasto.cantidad > 50 ? ' gasto-mayor' : ''}`}
      style={{ backgroundColor: colorCategoria(gasto.categoria) }}
    >
      <div className="gasto-info">
        <div className="gasto-header">
          <span className="gasto-emoji">{obtenerEmoji(gasto.categoria)}</span>
          <h3>{gasto.descripcion}</h3>
        </div>
        <div className="gasto-detalles">
          <span className="gasto-categoria">{gasto.categoria}</span>
          <span className="gasto-fecha">{formatearFecha(gasto.fecha)}</span>
        </div>
      </div>
      <div className="gasto-acciones">
        <span className="gasto-cantidad">S/. {gasto.cantidad.toFixed(2)}</span>
        <button
          onClick={() => onEliminar(gasto.id)}
          className="boton-eliminar"
          title="Eliminar gasto"
        >
          X
        </button>
      </div>
    </div>
  )
}

export default GastoItem