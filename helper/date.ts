export const isRecent = (timestamp: number): Boolean => {
    // Obtener timestamp actual
const now = Date.now();

// Obtener diferencia en minutos 
const diffMs = now - timestamp; 
const diffMins = Math.round(diffMs / 1000 / 60);

// Verificar si está dentro de los últimos 10 mins
const isRecent = diffMins < 10;

console.log(isRecent);
return isRecent;
}