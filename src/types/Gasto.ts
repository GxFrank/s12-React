//DESAFIO 3
// Agregamos la nueva categoria salud

export interface Gasto {
  id: string;
  descripcion: string;
  cantidad: number;
  categoria: 'comida' | 'transporte' | 'entretenimiento' | 'estudios' | 'salud' | 'otros'; 
  fecha: string;
}