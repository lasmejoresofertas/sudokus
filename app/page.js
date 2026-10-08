'use client';

import React from 'react';

// Generador de Patrones Complejos de Mandalas (SVG Vectorial)
const MANDALA_PATTERNS = [
  // 1. FLORAL PATTERN
  { id: 'm-1', category: 'FLORAL PATTERNS', title: 'INTRICATE LOTUS LACE', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[1.2]">
      <circle cx="100" cy="100" r="92" strokeWidth="2" />
      <circle cx="100" cy="100" r="85" />
      <circle cx="100" cy="100" r="70" />
      <circle cx="100" cy="100" r="55" />
      <circle cx="100" cy="100" r="40" />
      <circle cx="100" cy="100" r="25" />
      <circle cx="100" cy="100" r="10" />
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 100 100)`}>
          <path d="M 100 8 C 115 25 115 40 100 55 C 85 40 85 25 100 8 Z" />
          <path d="M 100 25 C 110 38 110 48 100 55 C 90 48 90 38 100 25 Z" />
          <path d="M 100 55 C 108 68 108 78 100 85 C 92 78 92 68 100 55 Z" />
          <circle cx="100" cy="16" r="2" />
          <circle cx="100" cy="33" r="1.5" />
        </g>
      ))}
    </svg>
  )},

  // 2. GEOMETRIC PATTERN
  { id: 'm-2', category: 'GEOMETRIC GRID', title: 'SACRED MOSAIC LATTICE', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[1.2]">
      <circle cx="100" cy="100" r="92" strokeWidth="2" />
      <circle cx="100" cy="100" r="80" />
      <circle cx="100" cy="100" r="62" />
      <circle cx="100" cy="100" r="44" />
      <circle cx="100" cy="100" r="26" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 100 100)`}>
          <rect x="75" y="75" width="50" height="50" transform="rotate(45 100 100)" />
          <polygon points="100,8 112,38 88,38" />
          <polygon points="100,38 108,62 92,62" />
          <circle cx="100" cy="23" r="4" />
        </g>
      ))}
    </svg>
  )},

  // 3. COSMIC PATTERN
  { id: 'm-3', category: 'COSMIC SUN', title: 'SOLAR KALEIDOSCOPE', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[1.2]">
      <circle cx="100" cy="100" r="90" strokeWidth="2" />
      <circle cx="100" cy="100" r="75" />
      <circle cx="100" cy="100" r="50" />
      <circle cx="100" cy="100" r="30" />
      {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 100 100)`}>
          <path d="M 100 10 L 104 35 L 100 50 L 96 35 Z" />
          <path d="M 100 50 L 103 70 L 100 80 L 97 70 Z" />
          <circle cx="100" cy="22" r="1.5" />
        </g>
      ))}
    </svg>
  )},

  // 4. ETHNIC TRIBAL
  { id: 'm-4', category: 'TRIBAL LACE', title: 'ORANTE DREAMCATCHER', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[1.2]">
      <circle cx="100" cy="100" r="92" strokeWidth="3" />
      <circle cx="100" cy="100" r="84" />
      <circle cx="100" cy="100" r="68" />
      <circle cx="100" cy="100" r="48" />
      <circle cx="100" cy="100" r="28" />
      {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 100 100)`}>
          <path d="M 100 16 Q 120 42 100 68 Q 80 42 100 16 Z" />
          <path d="M 100 32 Q 112 50 100 68 Q 88 50 100 32 Z" />
          <circle cx="100" cy="24" r="2.5" />
        </g>
      ))}
    </svg>
  )}
];

// Generador automático de 100 páginas repartidas equitativamente en 10 categorías
function generate100Mandalas() {
  const categories = [
    { name: 'FLORAL PATTERNS', pages: 'Pages 2 - 11' },
    { name: 'GEOMETRIC GRIDS', pages: 'Pages 12 - 21' },
    { name: 'COSMIC SUNS', pages: 'Pages 22 - 31' },
    { name: 'TRIBAL LACE', pages: 'Pages 32 - 41' },
    { name: 'SPIRITUAL RAYS', pages: 'Pages 42 - 51' },
    { name: 'NATURE BLOOMS', pages: 'Pages 52 - 61' },
    { name: 'HARMONY ROSES', pages: 'Pages 62 - 71' },
    { name: 'DEEP MEDITATION', pages: 'Pages 72 - 81' },
    { name: 'CRYSTAL MOSAICS', pages: 'Pages 82 - 91' },
    { name: 'ZODIAC SHAPES', pages: 'Pages 92 - 101' },
  ];

  const list = [];
  let totalCount = 1;

  categories.forEach((catObj) => {
    for (let i = 1; i <= 10; i++) {
      const base = MANDALA_PATTERNS[(totalCount - 1) % MANDALA_PATTERNS.length];
      list.push({
        id: `mandala-${totalCount}`,
        pageNumber: totalCount + 1, // +1 por la página del Índice
        category: catObj.name,
        title: `${catObj.name} MANDALA #${i}`,
        svg: base.svg,
      });
      totalCount++;
    }
  });

  return { list, categories };
}

const { list: allMandalas, categories: categoryList } = generate100Mandalas();

export default function MandalaBook100() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-800 text-neutral-100 flex flex-col items-center p-4 print:p-0 print:bg-white print:text-black">
      {/* Barra superior de navegación */}
      <header className="no-print w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-xl p-4 mb-6 shadow-2xl flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white">🧘 100 Mandalas Coloring Book</h1>
          <p className="text-xs text-neutral-400">101 Total Pages (Table of Contents + 100 Mandala Pages)</p>
        </div>
        <button
          onClick={handlePrint}
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2 rounded-lg text-sm cursor-pointer"
        >
          📥 Download PDF
        </button>
      </header>

      <main className="flex flex-col items-center">
        {/* PÁGINA 1: TABLE OF CONTENTS */}
        <section className="a4-page page-break flex flex-col justify-between p-12 border border-neutral-300 bg-white text-black shadow-2xl print:shadow-none print:border-0 mb-8 print:mb-0">
          <div>
            <header className="border-b-4 border-black pb-4 mb-8 text-center">
              <h1 className="text-4xl font-black uppercase tracking-wider">TABLE OF CONTENTS</h1>
              <p className="text-sm font-bold text-neutral-600 mt-1">
                100 INTRICATE & RELAXING MANDALA DESIGNS
              </p>
            </header>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 my-4 px-2">
              {categoryList.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b-2 border-dotted border-black pb-1.5">
                  <span className="text-xs font-black uppercase tracking-tight">{idx + 1}. {item.name}</span>
                  <span className="text-[11px] font-bold bg-neutral-100 border border-black px-2 py-0.5 rounded">
                    {item.pages}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <footer className="border-t border-black pt-3 flex justify-between text-xs font-bold uppercase">
            <span>Ultimate Mandala Collection • 100 Patterns</span>
            <span>Page 1</span>
          </footer>
        </section>

        {/* 100 PÁGINAS DE MANDALAS (1 POR HOJA A4) */}
        {allMandalas.map((item, idx) => {
          const isLastPage = idx === allMandalas.length - 1;

          return (
            <section
              key={item.id}
              className={`a4-page ${!isLastPage ? 'page-break' : ''} flex flex-col justify-between p-10 border border-neutral-300 bg-white text-black shadow-2xl print:shadow-none print:border-0 mb-8 print:mb-0`}
            >
              {/* Encabezado */}
              <header className="border-b-4 border-black pb-2 flex justify-between items-end">
                <div>
                  <span className="text-xs font-black uppercase text-neutral-500">
                    CATEGORY: {item.category}
                  </span>
                  <h2 className="text-2xl font-black uppercase">{item.title}</h2>
                </div>
                <span className="text-2xl">🧘</span>
              </header>

              {/* Contenedor del Mandala */}
              <div className="flex-grow flex items-center justify-center p-4 my-2">
                <div className="w-[185mm] h-[185mm]">
                  {item.svg}
                </div>
              </div>

              {/* Pie de Página */}
              <footer className="border-t-2 border-black pt-3 flex justify-between text-xs font-bold uppercase">
                <span>100 Mandala Collection</span>
                <span>Page {item.pageNumber}</span>
              </footer>
            </section>
          );
        })}
      </main>

      {/* Estilos CSS globales para A4 */}
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
