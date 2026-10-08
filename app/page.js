'use client';

import React from 'react';

// Diseños vectoriales de letras y números con relleno Zentangle / Doodle para colorear
const DOODLE_ALPHABET = [
  {
    char: 'A',
    title: 'LETRA A - PATRÓN DE ESTRELLAS Y ZIGZAG',
    svg: (
      <svg viewBox="0 0 200 220" className="w-full h-full stroke-black fill-none stroke-[2.5]">
        <defs>
          <clipPath id="clip-a">
            <polygon points="100,20 170,200 130,200 100,120 70,200 30,200" />
          </clipPath>
        </defs>
        {/* Borde exterior grueso */}
        <polygon points="100,20 170,200 130,200 100,120 70,200 30,200" className="stroke-[6]" />
        <polygon points="100,60 80,100 120,100" className="stroke-[6]" />
        
        {/* Relleno Doodle interno */}
        <g clipPath="url(#clip-a)" className="stroke-[1.5]">
          {/* Círculos y zigzag */}
          {[30, 60, 90, 120, 150, 180].map((y, i) => (
            <path key={i} d={`M 20 ${y} Q 100 ${y - 20} 180 ${y}`} />
          ))}
          {[40, 80, 120, 160].map((x, i) => (
            <path key={i} d={`M ${x} 20 L ${x + 20} 200`} />
          ))}
          <polygon points="100,40 105,50 115,50 107,57 110,67 100,60 90,67 93,57 85,50 95,50" />
          <polygon points="60,140 65,150 75,150 67,157 70,167 60,160 50,167 53,157 45,150 55,150" />
          <polygon points="140,140 145,150 155,150 147,157 150,167 140,160 130,167 133,157 125,150 135,150" />
        </g>
      </svg>
    )
  },
  {
    char: 'B',
    title: 'LETRA B - MOSAICO Y FLORES',
    svg: (
      <svg viewBox="0 0 200 220" className="w-full h-full stroke-black fill-none stroke-[2.5]">
        <defs>
          <clipPath id="clip-b">
            <path d="M 40 20 L 120 20 C 160 20 160 100 120 100 C 170 100 170 200 110 200 L 40 200 Z" />
          </clipPath>
        </defs>
        {/* Borde exterior grueso */}
        <path d="M 40 20 L 120 20 C 160 20 160 100 120 100 C 170 100 170 200 110 200 L 40 200 Z" className="stroke-[6]" />
        <circle cx="85" cy="60" r="22" className="stroke-[6]" />
        <circle cx="85" cy="150" r="28" className="stroke-[6]" />

        {/* Relleno Doodle */}
        <g clipPath="url(#clip-b)" className="stroke-[1.5]">
          {[30, 50, 70, 90, 110, 130, 150, 170, 190].map((y, i) => (
            <path key={i} d={`M 30 ${y} L 180 ${y}`} />
          ))}
          {[0, 30, 60, 90, 120, 150, 180].map((deg, i) => (
            <circle key={i} cx={50 + i * 18} cy={40 + (i % 2) * 20} r="8" />
          ))}
        </g>
      </svg>
    )
  },
  {
    char: 'C',
    title: 'LETRA C - ONDAS Y CÍRCULOS',
    svg: (
      <svg viewBox="0 0 200 220" className="w-full h-full stroke-black fill-none stroke-[2.5]">
        <defs>
          <clipPath id="clip-c">
            <path d="M 160 50 C 120 10 50 20 40 110 C 30 190 120 210 160 170 C 110 180 80 150 80 110 C 80 70 120 40 160 50 Z" />
          </clipPath>
        </defs>
        <path d="M 160 50 C 120 10 50 20 40 110 C 30 190 120 210 160 170 C 110 180 80 150 80 110 C 80 70 120 40 160 50 Z" className="stroke-[6]" />
        
        <g clipPath="url(#clip-c)" className="stroke-[1.5]">
          {[10, 30, 50, 70, 90, 110, 130, 150, 170, 190].map((y, i) => (
            <path key={i} d={`M 20 ${y} Q 100 ${y + 15} 180 ${y}`} />
          ))}
        </g>
      </svg>
    )
  },
  {
    char: 'SOPHIA',
    title: 'PALABRA SOPHIA - PATRÓN MULTICOLOR',
    svg: (
      <svg viewBox="0 0 350 150" className="w-full h-full stroke-black fill-none stroke-[2]">
        <g className="stroke-[4]">
          {/* Letras burbuja entrelazadas */}
          <path d="M 10 70 C 10 20 50 20 50 45 C 50 70 10 70 10 100 C 10 130 50 130 50 90" />
          <ellipse cx="85" cy="75" rx="22" ry="40" />
          <path d="M 125 35 L 125 115 M 125 35 L 150 35 C 165 35 165 75 150 75 L 125 75" />
          <path d="M 180 35 L 180 115 M 205 35 L 205 115 M 180 75 L 205 75" />
          <path d="M 225 35 L 225 115" />
          <path d="M 255 115 L 275 35 L 295 115 M 263 90 L 287 90" />
        </g>
        {/* Relleno interno estilo garabatos/doodle */}
        <g className="stroke-[1] stroke-dashed">
          {[20, 40, 60, 80, 100, 120].map((y, i) => (
            <line key={i} x1="10" y1={y} x2="300" y2={y} />
          ))}
        </g>
      </svg>
    )
  }
];

function generate100DoodleSheets() {
  const categories = [
    { name: 'ABECEDARIO DOODLE A-Z', count: 25 },
    { name: 'NÚMEROS Y PATRONES', count: 25 },
    { name: 'PALABRAS Y NOMBRES', count: 25 },
    { name: 'FRASES PARA COLOREAR', count: 25 },
  ];

  const pages = [];
  let totalCount = 1;

  categories.forEach((cat) => {
    for (let i = 1; i <= cat.count; i++) {
      const base = DOODLE_ALPHABET[(totalCount - 1) % DOODLE_ALPHABET.length];
      pages.push({
        id: `doodle-${totalCount}`,
        pageNumber: totalCount + 1,
        category: cat.name,
        title: `${base.title} #${i}`,
        svg: base.svg,
      });
      totalCount++;
    }
  });

  return pages;
}

const doodlePages = generate100DoodleSheets();

export default function DoodleAlphabetBook() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-800 text-neutral-100 flex flex-col items-center p-4 print:p-0 print:bg-white print:text-black">
      {/* Botón Superior */}
      <header className="no-print w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-xl p-4 mb-6 shadow-2xl flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white">🎨 Libro de Letras Doodle para Colorear</h1>
          <p className="text-xs text-neutral-400">101 Páginas Totales (Índice + 100 Diseños)</p>
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
              <h1 className="text-4xl font-black uppercase tracking-wider">ÍNDICE DE CONTENIDOS</h1>
              <p className="text-sm font-bold text-neutral-600 mt-1">
                COLECCIÓN DE LETRAS Y PALABRAS TIPO DOODLE / ZENTANGLE
              </p>
            </header>

            <div className="space-y-6 my-10 px-4">
              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-lg font-black uppercase">Módulo 1: ABECEDARIO DOODLE A-Z</span>
                  <p className="text-xs text-neutral-600 font-medium">Letras gigantes con patrones internos (Págs. 2 a 26)</p>
                </div>
                <span className="text-base font-black">Págs. 2 - 26</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-lg font-black uppercase">Módulo 2: NÚMEROS Y PATRONES</span>
                  <p className="text-xs text-neutral-600 font-medium">Números gigantes con mosaicos y formas (Págs. 27 a 51)</p>
                </div>
                <span className="text-base font-black">Págs. 27 - 51</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-lg font-black uppercase">Módulo 3: PALABRAS Y NOMBRES</span>
                  <p className="text-xs text-neutral-600 font-medium">Nombres artísticos para pintar (Págs. 52 a 76)</p>
                </div>
                <span className="text-base font-black">Págs. 52 - 76</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-lg font-black uppercase">Módulo 4: FRASES PARA COLOREAR</span>
                  <p className="text-xs text-neutral-600 font-medium">Composiciones tipográficas multicolores (Págs. 77 a 101)</p>
                </div>
                <span className="text-base font-black">Págs. 77 - 101</span>
              </div>
            </div>
          </div>

          <footer className="border-t border-black pt-3 flex justify-between text-xs font-bold uppercase">
            <span>Colección Tipografía Arte Doodle</span>
            <span>Página 1</span>
          </footer>
        </section>

        {/* 100 HOJAS DE LETRAS CON PATRONES (A4) */}
        {doodlePages.map((item, idx) => {
          const isLastPage = idx === doodlePages.length - 1;

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
                <span className="text-3xl">🎨</span>
              </header>

              {/* Contenedor del Dibujo Doodle Central */}
              <div className="flex-grow flex items-center justify-center p-4 my-2 border-2 border-dashed border-black rounded-2xl">
                <div className="w-[180mm] h-[180mm]">
                  {item.svg}
                </div>
              </div>

              {/* Pie de Página */}
              <footer className="border-t-2 border-black pt-3 flex justify-between text-xs font-bold uppercase">
                <span>Letras Doodle Para Colorear</span>
                <span>Página {item.pageNumber}</span>
              </footer>
            </section>
          );
        })}
      </main>

      {/* Estilos CSS globales A4 */}
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
