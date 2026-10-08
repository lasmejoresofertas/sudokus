'use client';

import React from 'react';

// Dibujos vectoriales de patrones de Mandalas (SVG)
const PATTERNS_LIBRARY = [
  { name: 'GOTAS Y HOJAS', svg: <path d="M 10 30 C 10 10, 30 10, 30 30 C 30 45, 20 55, 20 55 C 20 55, 10 45, 10 30 Z" /> },
  { name: 'FLOR DE LOTO', svg: <path d="M 5 40 Q 20 10 35 40 Q 20 25 5 40 Z M 20 25 Q 20 5 20 5" /> },
  { name: 'ESPIRAL FLUIDO', svg: <path d="M 10 35 C 5 20, 20 10, 25 20 C 30 30, 15 35, 15 25 C 15 20, 20 20, 22 22" /> },
  { name: 'ARCO CORAZÓN', svg: <path d="M 5 40 Q 20 10 35 40 M 12 30 C 12 20 20 20 20 28 C 20 20 28 20 28 30 C 28 36 20 42 20 42 C 20 42 12 36 12 30 Z" /> },
  { name: 'OLAS Y PLUMAS', svg: <path d="M 5 40 Q 20 10 35 40 M 15 32 L 20 20 M 25 32 L 20 20" /> },
  { name: 'ARCOS DOBLES', svg: <path d="M 5 40 Q 20 10 35 40 M 10 40 Q 20 18 30 40 M 15 40 Q 20 26 25 40" /> },
  { name: 'CRESTA FLORAL', svg: <path d="M 5 40 Q 20 10 35 40 M 20 10 L 20 40 M 10 25 Q 20 30 30 25" /> },
  { name: 'RAYOS SOLARES', svg: <path d="M 5 40 Q 20 20 35 40 M 20 20 L 20 5 M 12 24 L 6 12 M 28 24 L 34 12" /> },
  { name: 'CORONA DE ESPIRALES', svg: <path d="M 5 40 Q 20 15 35 40 M 10 30 Q 20 5 30 30 M 20 12 A 3 3 0 1 1 20.1 12" /> },
  { name: 'DIAMANTE GEOMÉTRICO', svg: <path d="M 5 40 L 20 10 L 35 40 Z M 20 10 L 20 40 M 12 25 L 28 25" /> },
];

// Generar 100 Páginas de Práctica
function generate100PracticeSheets() {
  const levels = [
    { name: 'PRINCIPIANTE', difficulty: '★☆☆☆☆', count: 25 },
    { name: 'INTERMEDIO', difficulty: '★★☆☆☆', count: 25 },
    { name: 'AVANZADO', difficulty: '★★★☆☆', count: 25 },
    { name: 'EXPERTO MAESTRO', difficulty: '★★★★☆', count: 25 },
  ];

  const sheets = [];
  let pageNum = 1;

  levels.forEach((lvl) => {
    for (let i = 1; i <= lvl.count; i++) {
      const rows = [];
      for (let r = 0; r < 6; r++) {
        const patternIdx = (pageNum * 2 + r) % PATTERNS_LIBRARY.length;
        rows.push(PATTERNS_LIBRARY[patternIdx]);
      }

      sheets.push({
        id: `sheet-${pageNum}`,
        pageNumber: pageNum + 1, // +1 por el Índice
        title: `HOJA DE PATRONES #${i}`,
        levelName: lvl.name,
        difficulty: lvl.difficulty,
        rows: rows,
      });
      pageNum++;
    }
  });

  return sheets;
}

const practiceSheets = generate100PracticeSheets();

export default function MandalaPatternBook() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-800 text-neutral-100 flex flex-col items-center p-4 print:p-0 print:bg-white print:text-black">
      {/* Encabezado superior no imprimible */}
      <header className="no-print w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-xl p-4 mb-6 shadow-2xl flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white">✏️ Hojas de Práctica de Patrones de Mandalas</h1>
          <p className="text-xs text-neutral-400">101 Páginas totales (Índice + 100 Hojas de Práctica)</p>
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
                GUÍA COMPLETA DE PRÁCTICA Y TRAZADO DE MANDALAS
              </p>
            </header>

            <div className="space-y-6 my-10 px-4">
              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-lg font-black uppercase">Nivel 1: PRINCIPIANTE ★☆☆☆☆</span>
                  <p className="text-xs text-neutral-600 font-medium">Arcos básicos, hojas y gotas (Hojas #1 a #25)</p>
                </div>
                <span className="text-base font-black">Págs. 2 - 26</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-lg font-black uppercase">Nivel 2: INTERMEDIO ★★☆☆☆</span>
                  <p className="text-xs text-neutral-600 font-medium">Arcos dobles, espirales y pétalos (Hojas #1 a #25)</p>
                </div>
                <span className="text-base font-black">Págs. 27 - 51</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-lg font-black uppercase">Nivel 3: AVANZADO ★★★☆☆</span>
                  <p className="text-xs text-neutral-600 font-medium">Encajes complejos, coronas y geometría (Hojas #1 a #25)</p>
                </div>
                <span className="text-base font-black">Págs. 52 - 76</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-lg font-black uppercase">Nivel 4: EXPERTO MAESTRO ★★★★☆</span>
                  <p className="text-xs text-neutral-600 font-medium">Elementos multicapa para trazado avanzado (Hojas #1 a #25)</p>
                </div>
                <span className="text-base font-black">Págs. 77 - 101</span>
              </div>
            </div>
          </div>

          <footer className="border-t border-black pt-3 flex justify-between text-xs font-bold uppercase">
            <span>Hojas de Práctica de Patrones de Mandalas</span>
            <span>Página 1</span>
          </footer>
        </section>

        {/* 100 HOJAS DE PRÁCTICA DE PATRONES (A4) */}
        {practiceSheets.map((sheet, idx) => {
          const isLastPage = idx === practiceSheets.length - 1;

          return (
            <section
              key={sheet.id}
              className={`a4-page ${!isLastPage ? 'page-break' : ''} flex flex-col justify-between p-10 border border-neutral-300 bg-white text-black shadow-2xl print:shadow-none print:border-0 mb-8 print:mb-0`}
            >
              {/* Encabezado de la Hoja de Práctica */}
              <header className="border-b-2 border-black pb-2 mb-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-black uppercase tracking-tight">{sheet.title}</h2>
                  <div className="text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 block">
                      NIVEL DE DIFICULTAD
                    </span>
                    <span className="text-sm font-black tracking-widest">{sheet.difficulty}</span>
                  </div>
                </div>
              </header>

              {/* Renglones de Práctica (6 Renglones por página) */}
              <div className="flex-grow flex flex-col justify-around py-2">
                {sheet.rows.map((pattern, rIdx) => (
                  <div key={rIdx} className="w-full relative mb-4">
                    {/* Nombre del patrón */}
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                      PATRÓN: {pattern.name}
                    </span>

                    {/* Renglón con la línea base y los patrones */}
                    <div className="relative border-b-2 border-black pb-1 flex items-end justify-between px-2">
                      {/* Modelo Maestro (Negro Grueso) */}
                      <div className="w-12 h-14 flex items-center justify-center border-r-2 border-neutral-300 pr-3">
                        <svg viewBox="0 0 40 60" className="w-10 h-14 stroke-black fill-none stroke-[3] stroke-linecap-round stroke-linejoin-round">
                          {pattern.svg}
                        </svg>
                      </div>

                      {/* Repeticiones en Gris Fino / Punteado para Repasar (Tracing) */}
                      <div className="flex-grow flex justify-around items-center pl-4">
                        {[1, 2, 3, 4, 5, 6, 7].map((repeat) => (
                          <svg
                            key={repeat}
                            viewBox="0 0 40 60"
                            className="w-9 h-12 stroke-neutral-300 fill-none stroke-[1.2] stroke-dasharray-[3,2] stroke-linecap-round stroke-linejoin-round"
                          >
                            {pattern.svg}
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pie de Página */}
              <footer className="border-t border-black pt-2 flex justify-between text-[11px] font-bold uppercase">
                <span>Colección de Patrones de Mandalas</span>
                <span>Página {sheet.pageNumber}</span>
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
