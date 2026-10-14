/**
 * Validación de teléfono para Argentina, sin código de país ni soporte para
 * extranjeros por ahora. Formato esperado: 10 dígitos (código de área + número),
 * sin el 0 inicial ni el 15 (ej: 2645551234, no 02645-15-551234).
 *
 * Se limpia lo que el usuario escriba (espacios, guiones, paréntesis) antes de
 * validar, para no exigir un formato de tipeo específico.
 *
 * Portado tal cual de un panel hermano — misma regla, mismo mensaje de
 * error, para que los paneles queden consistentes entre sí.
 */
export function normalizarTelefonoAR(raw: string): string | null {
  const limpio = raw.replace(/\D/g, "");
  return /^\d{10}$/.test(limpio) ? limpio : null;
}

export const ERROR_TELEFONO_INVALIDO = "Ingresá tu teléfono sin 0 ni 15, ej: 2645551234";
