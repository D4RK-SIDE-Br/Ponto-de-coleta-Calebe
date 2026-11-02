import { CollectionPoints, toCollectionPoints } from "./CollectionPoints.js";
const RECORDS = [
  {
    id: 1,
    name: "Ecoponto Centro-Sul",
    neighborhood: "Centro-Sul",
    address: "Rua Goiás, 120",
    zipCode: "78135-603",
    materials: ["battery", "electronics", "glass", "recyclable"],
    schedule: "Segunda a sexta, 8h às 17h",
  },
  {
    id: 2,
    name: "Farmácia Solidária Cristo Rei",
    neighborhood: "Centro-Sul",
    address: "Avenida Brasil, 845, Cristo Rei",
    zipCode: "78135-603",
    materials: ["battery", "electronics", "glass", "recyclable"],
    schedule: "Segunda a sábado, 7h às 21h",
  },
  {
    id: 3,
    name: "Mercado Ponte Nova",
    neighborhood: "Centro-Sul",
    address: "Avenida da FEB, 310, Ponte Nova",
    zipCode: "78135-603",
    materials: ["battery", "electronics", "glass", "recyclable"],
    schedule: "Segunda a sexta, 8h às 17h",
  },
];
const points = toCollectionPoints(RECORDS);
console.table(
  points.map((point) => ({
    nome: point.name,
    endereco: point.fullAddress(),
    materiais: point.materials.length,
  })),
);


