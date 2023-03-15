export interface Todo {
  _id: string;
  aufgabe: string;
  beschreibung: string;
  frist: string;
  erledigt: boolean;
}

// Interface für unsere Daten im Sinne der Typsicherheit, um ihn als Typ zu verwenden
// übernehmen Datenmodell, das in der MongoDB ist
