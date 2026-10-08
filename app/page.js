'use client';

import React from 'react';

// Dibujos para colorear (SVG Vectoriales adaptados para pintar)
const COLORING_PAGES = [
  // 1. ANIMALES (8 Dibujos)
  { id: 'anim-1', category: 'ANIMALES', title: 'PERRITO SIMPÁTICO', icon: '🐶', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[3]">
      <circle cx="100" cy="110" r="50" />
      <circle cx="70" cy="80" r="20" />
      <circle cx="130" cy="80" r="20" />
      <circle cx="85" cy="100" r="5" fill="black" />
      <circle cx="115" cy="100" r="5" fill="black" />
      <ellipse cx="100" cy="115" rx="10" ry="7" fill="black" />
      <path d="M 90 125 Q 100 135 110 125" />
    </svg>
  )},
  { id: 'anim-2', category: 'ANIMALES', title: 'GATITO JUGUETÓN', icon: '🐱', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[3]">
      <circle cx="100" cy="110" r="45" />
      <polygon points="60,75 75,40 90,70" />
      <polygon points="140,75 125,40 110,70" />
      <circle cx="85" cy="105" r="5" fill="black" />
      <circle cx="115" cy="105" r="5" fill="black" />
      <polygon points="95,115 105,115 100,122" fill="black" />
      <path d="M 60 115 L 40 110 M 60 120 L 40 122 M 140 115 L 160 110 M 140 120 L 160 122" />
    </svg>
  )},

  // 2. FRUTAS (8 Dibujos)
  { id: 'frut-1', category: 'FRUTAS', title: 'GRUPO DE PERAS (5 PERAS)', icon: '🍐', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[3]">
      {/* Pera Central */}
      <path d="M 100 60 Q 85 80 80 110 Q 75 150 100 150 Q 125 150 120 110 Q 115 80 100 60 Z" />
      <path d="M 100 60 Q 105 45 110 40" />
      <path d="M 105 45 Q 120 40 115 55 Z" />
      {/* Pera Izquierda */}
      <path d="M 50 80 Q 38 95 35 120 Q 30 150 50 150 Q 70 150 65 120 Q 62 95 50 80 Z" />
      <path d="M 50 80 Q 53 68 58 65" />
      {/* Pera Derecha */}
      <path d="M 150 80 Q 138 95 135 120 Q 130 150 150 150 Q 170 150 165 120 Q 162 95 150 80 Z" />
      <path d="M 150 80 Q 153 68 158 65" />
      {/* Pera Fondo Izq */}
      <path d="M 30 50 Q 22 62 20 80 Q 18 100 30 100 Q 42 100 40 80 Q 38 62 30 50 Z" />
      {/* Pera Fondo Der */}
      <path d="M 170 50 Q 162 62 160 80 Q 158 100 170 100 Q 182 100 180 80 Q 178 62 170 50 Z" />
    </svg>
  )},
  { id: 'frut-2', category: 'FRUTAS', title: 'CANASTA DE MANZANAS', icon: '🍎', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[3]">
      <circle cx="70" cy="90" r="30" />
      <circle cx="130" cy="90" r="30" />
      <circle cx="100" cy="75" r="32" />
      <path d="M 40 100 L 160 100 L 140 160 L 60 160 Z" />
      <path d="M 40 100 Q 100 120 160 100" />
    </svg>
  )},

  // 3. VEHÍCULOS (8 Dibujos)
  { id: 'auto-1', category: 'VEHÍCULOS', title: 'AUTO DEPORTIVO', icon: '🚗', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[3]">
      <path d="M 30 120 L 50 90 L 90 80 L 140 80 L 170 100 L 180 120 L 180 140 L 30 140 Z" />
      <circle cx="65" cy="140" r="18" fill="white" />
      <circle cx="65" cy="140" r="8" fill="black" />
      <circle cx="145" cy="140" r="18" fill="white" />
      <circle cx="145" cy="140" r="8" fill="black" />
      <path d="M 85 85 L 130 85 L 145 105 L 85 105 Z" />
    </svg>
  )},

  // 4. NATURALEZA (8 Dibujos)
  { id: 'nat-1', category: 'NATURALEZA', title: 'FLORES Y MARIPOSA', icon: '🌻', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[3]">
      <circle cx="100" cy="130" r="20" />
      <circle cx="100" cy="95" r="12" />
      <circle cx="100" cy="165" r="12" />
      <circle cx="65" cy="130" r="12" />
      <circle cx="135" cy="130" r="12" />
      <path d="M 100 50 Q 80 30 100 20 Q 120 30 100 50" />
      <path d="M 100 35 Q 70 35 60 25 Q 70 15 100 35" />
      <path d="M 100 35 Q 130 35 140 25 Q 130 15 100 35" />
    </svg>
  )},

  // 5. ESPACIO (8 Dibujos)
  { id: 'esp-1', category: 'ESPACIO', title: 'COHETE ESPACIAL', icon: '🚀', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[3]">
      <path d="M 100 30 Q 130 70 130 130 L 70 130 Q 70 70 100 30 Z" />
      <circle cx="100" cy="85" r="15" />
      <polygon points="70,110 40,140 70,140" />
      <polygon points="130,110 160,140 130,140" />
      <path d="M 80 130 L 80 155 L 100 170 L 120 155 L 120 130" />
    </svg>
  )},
];

// Generador automático para multiplicar las páginas hasta completar 80 imágenes
function generate80Pages() {
  const categories = [
    'ANIMALES', 'FRUTAS', 'VEHÍCULOS', 'NATURALEZA', 'COMIDAS',
    'FANTASÍA', 'ESPACIO', 'DINOSAURIOS', 'MARINO', 'ROBOTS'
  ];

  const result = [];
  let count = 1;

  categories.forEach((cat) => {
    for (let i = 1; i <= 8; i++) {
      const base = COLORING_PAGES[(count - 1) % COLORING_PAGES.length];
      result.push({
        id: `page-${count}`,
        pageNumber: count + 1, // +1 por el Índice
        category: cat,
        title: `${cat} #${i}: ${base.title}`,
        icon: base.icon,
        svg: base.svg,
      });
      count++;
    }
  });

  return result;
}

const allPages = generate80Pages();

export default function ColoringBook() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-800 text-neutral-100 flex flex-col items-center p-4 print:p-0 print:bg-white print:text-black">
      {/* Botón superior (Oculto al imprimir) */}
      <header className="no-print w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-xl p-4 mb-6 shadow-2xl flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white">🎨 Libro para Colorear (1 Dibujo por Hoja)</h1>
          <p className="text-xs text-neutral-400">81 Páginas Totales (Índice + 80 Dibujos Grandes)</p>
        </div>
        <button
          onClick={handlePrint}
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2 rounded-lg text-sm cursor-pointer"
        >
          📥 Descargar PDF
        </button>
      </header>

      <main className="flex flex-col items-center">
        {/* PÁGINA 1: ÍNDICE DE CONTENIDOS */}
        <section className="a4-page page-break flex flex-col justify-between p-12 border border-neutral-300 bg-white text-black shadow-2xl print:shadow-none print:border-0 mb-8 print:mb-0">
          <div>
            <header className="border-b-4 border-black pb-4 mb-8 text-center">
              <h1 className="text-4xl font-black uppercase tracking-wider">ÍNDICE DE DIBUJOS</h1>
              <p className="text-sm font-bold text-neutral-600 mt-1">
                80 IMÁGENES PARA COLOREAR Y DIVERTIRSE
              </p>
            </header>

            <div className="grid grid-cols-2 gap-4 my-6 px-2">
              {[
                { cat: '1. ANIMALES', range: 'Págs. 2 - 9' },
                { cat: '2. FRUTAS Y VERDURAS', range: 'Págs. 10 - 17' },
                { cat: '3. VEHÍCULOS Y AUTOS', range: 'Págs. 18 - 25' },
                { cat: '4. NATURALEZA Y FLORES', range: 'Págs. 26 - 33' },
                { cat: '5. COMIDAS Y HELADOS', range: 'Págs. 34 - 41' },
                { cat: '6. CASTILLOS Y FANTASÍA', range: 'Págs. 42 - 49' },
                { cat: '7. ESPACIO Y UNIVERSO', range: 'Págs. 50 - 57' },
                { cat: '8. DINOSAURIOS', range: 'Págs. 58 - 65' },
                { cat: '9. MUNDO MARINO', range: 'Págs. 66 - 73' },
                { cat: '10. ROBOTS Y TECNOLOGÍA', range: 'Págs. 74 - 81' },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b-2 border-dotted border-black pb-2">
                  <span className="text-sm font-black uppercase">{item.cat}</span>
                  <span className="text-xs font-bold bg-neutral-100 border border-black px-2 py-0.5 rounded">
                    {item.range}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <footer className="border-t border-black pt-3 flex justify-between text-xs font-bold uppercase">
            <span>Mi Libro de Colorear • 80 Imágenes</span>
            <span>Página 1</span>
          </footer>
        </section>

        {/* PÁGINAS DE DIBUJOS (1 DIBUJO GRANDE POR HOJA A4) */}
        {allPages.map((item, idx) => {
          const isLastPage = idx === allPages.length - 1;

          return (
            <section
              key={item.id}
              className={`a4-page ${!isLastPage ? 'page-break' : ''} flex flex-col justify-between p-10 border border-neutral-300 bg-white text-black shadow-2xl print:shadow-none print:border-0 mb-8 print:mb-0`}
            >
              {/* Encabezado */}
              <header className="border-b-4 border-black pb-2 flex justify-between items-end">
                <div>
                  <span className="text-xs font-black uppercase text-neutral-500">
                    CATEGORÍA: {item.category}
                  </span>
                  <h2 className="text-2xl font-black uppercase">{item.title}</h2>
                </div>
                <span className="text-3xl">{item.icon}</span>
              </header>

              {/* Dibujo Grande Central */}
              <div className="flex-grow flex items-center justify-center p-6 my-4 border-2 border-black border-dashed rounded-2xl">
                <div className="w-[180mm] h-[180mm]">
                  {item.svg}
                </div>
              </div>

              {/* Pie de Página */}
              <footer className="border-t-2 border-black pt-3 flex justify-between text-xs font-bold uppercase">
                <span>Colección Para Colorear</span>
                <span>Página {item.pageNumber}</span>
              </footer>
            </section>
          );
        })}
      </main>

      {/* Estilos CSS para A4 */}
      <style jsx global>{`
        @page {
          size: A4 portrait;
          margin: 0;
        }
        .a4-page {
          width: 210mm;
          height: 297mm;
          box-sizing: border-box;
        }
        .page-break {
          page-break-after: always;
          break-after: page;
        }
        @media print {
          body {
            background-color: #ffffff !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          .a4-page {
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}
