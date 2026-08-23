export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  lastUpdated?: string;
  sections: LegalSection[];
};
