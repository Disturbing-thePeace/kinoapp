// KinoApp – Preisberechnung
// Gibt den Ticketpreis in Euro zurück.

const NORMALPREIS = 11.50;
const KINDERPREIS = 7.00;

function berechnePreis(alter) {
  if (alter < 14) {
    return KINDERPREIS;
  }
  return NORMALPREIS;
}
