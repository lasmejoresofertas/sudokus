'use client';

import React from 'react';

// Temas y palabras para las Sopas de Letras en Español
const WORD_SEARCH_DATA = [
  // NOVATO (Nivel 1)
  { id: 1, title: 'ANIMALES #1', difficulty: 'NOVATO', grid: [
    ['P', 'E', 'R', 'R', 'O', 'G', 'A', 'T'],
    ['L', 'E', 'O', 'N', 'O', 'S', 'O', 'O'],
    ['P', 'E', 'Z', 'P', 'A', 'J', 'A', 'R'],
    ['P', 'A', 'T', 'O', 'R', 'A', 'N', 'A'],
    ['C', 'E', 'R', 'D', 'O', 'V', 'A', 'C'],
    ['R', 'A', 'T', 'O', 'N', 'I', 'P', 'O'],
    ['O', 'V', 'E', 'J', 'A', 'T', 'O', 'R'],
    ['L', 'O', 'B', 'O', 'C', 'A', 'B', 'R'],
  ], words: ['PERRO', 'GATO', 'LEON', 'OSO', 'PEZ', 'PAJARO', 'PATO', 'RANA'] },
  { id: 2, title: 'FRUTAS #1', difficulty: 'NOVATO', grid: [
    ['M', 'A', 'N', 'Z', 'A', 'N', 'A', 'L'],
    ['B', 'A', 'N', 'A', 'N', 'A', 'M', 'I'],
    ['U', 'V', 'A', 'S', 'L', 'I', 'M', 'O'],
    ['L', 'I', 'M', 'O', 'N', 'P', 'E', 'R'],
    ['D', 'U', 'R', 'A', 'Z', 'N', 'O', 'A'],
    ['K', 'I', 'W', 'I', 'M', 'A', 'N', 'N'],
    ['C', 'I', 'R', 'U', 'E', 'L', 'A', 'G'],
    ['N', 'A', 'R', 'A', 'N', 'J', 'A', 'O'],
  ], words: ['MANZANA', 'BANANA', 'UVAS', 'LIMON', 'PERA', 'KIWI', 'CIRUELA', 'NARANJA'] },

  // MEDIO (Nivel 2)
  { id: 3, title: 'PAÍSES #1', difficulty: 'MEDIO', grid: [
    ['C', 'A', 'N', 'A', 'D', 'A', 'M', 'E'],
    ['B', 'R', 'A', 'S', 'I', 'L', 'X', 'X'],
    ['F', 'R', 'A', 'N', 'C', 'I', 'A', 'I'],
    ['J', 'A', 'P', 'O', 'N', 'P', 'E', 'C'],
    ['E', 'S', 'P', 'A', 'Ñ', 'A', 'R', 'O'],
    ['M', 'E', 'X', 'I', 'C', 'O', 'U', 'G'],
    ['E', 'G', 'I', 'P', 'T', 'O', 'C', 'E'],
    ['P', 'E', 'R', 'U', 'I', 'N', 'D', 'I'],
  ], words: ['CANADA', 'BRASIL', 'FRANCIA', 'JAPON', 'ESPAÑA', 'MEXICO', 'EGIPTO', 'PERU'] },
  { id: 4, title: 'DEPORTES #1', difficulty: 'MEDIO', grid: [
    ['F', 'U', 'T', 'B', 'O', 'L', 'T', 'E'],
    ['T', 'E', 'N', 'I', 'S', 'B', 'A', 'S'],
    ['G', 'O', 'L', 'F', 'S', 'K', 'I', 'Q'],
    ['N', 'A', 'T', 'A', 'C', 'I', 'O', 'N'],
    ['B', 'O', 'X', 'E', 'O', 'R', 'U', 'G'],
    ['R', 'U', 'G', 'B', 'Y', 'J', 'U', 'D'],
    ['C', 'I', 'C', 'L', 'I', 'S', 'M', 'O'],
    ['P', 'A', 'T', 'I', 'N', 'A', 'J', 'E'],
  ], words: ['FUTBOL', 'TENIS', 'GOLF', 'NATACION', 'BOXEO', 'RUGBY', 'CICLISMO', 'PATINAJE'] },

  // ALTO (Nivel 3)
  { id: 5, title: 'UNIVERSO #1', difficulty: 'ALTO', grid: [
    ['P', 'L', 'A', 'N', 'E', 'T', 'A', 'S'],
    ['G', 'A', 'L', 'A', 'X', 'I', 'A', 'O'],
    ['C', 'O', 'S', 'M', 'O', 'S', 'O', 'L'],
    ['C', 'O', 'M', 'E', 'T', 'A', 'M', 'O'],
    ['A', 'S', 'T', 'E', 'R', 'O', 'I', 'D'],
    ['N', 'E', 'B', 'U', 'L', 'O', 'S', 'A'],
    ['E', 'S', 'T', 'R', 'E', 'L', 'L', 'A'],
    ['C', 'O', 'H', 'E', 'T', 'E', 'O', 'N'],
  ], words: ['PLANETAS', 'GALAXIA', 'COSMOS', 'COMETA', 'ASTEROIDE', 'NEBULOSA', 'ESTRELLA', 'COHETE'] },
  { id: 6, title: 'OCÉANO #1', difficulty: 'ALTO', grid: [
    ['T', 'I', 'B', 'U', 'R', 'O', 'N', 'W'],
    ['D', 'E', 'L', 'F', 'I', 'N', 'N', 'L'],
    ['C', 'O', 'R', 'A', 'L', 'R', 'E', 'F'],
    ['T', 'O', 'R', 'T', 'U', 'G', 'A', 'S'],
    ['P', 'U', 'L', 'P', 'O', 'W', 'A', 'V'],
    ['O', 'L', 'A', 'S', 'P', 'E', 'C', 'E'],
    ['I', 'S', 'L', 'A', 'A', 'L', 'G', 'A'],
    ['M', 'A', 'R', 'E', 'A', 'C', 'O', 'S'],
  ], words: ['TIBURON', 'DELFIN', 'CORAL', 'TORTUGA', 'PULPO', 'OLAS', 'ALGA', 'MAREA'] },

  // EXPERTO (Nivel 4)
  { id: 7, title: 'CIENCIA #1', difficulty: 'EXPERTO', grid: [
    ['A', 'T', 'O', 'M', 'O', 'F', 'I', 'S'],
    ['E', 'N', 'E', 'R', 'G', 'I', 'A', 'L'],
    ['L', 'A', 'B', 'O', 'R', 'A', 'T', 'O'],
    ['P', 'R', 'O', 'T', 'O', 'N', 'E', 'S'],
    ['G', 'E', 'N', 'E', 'T', 'I', 'C', 'A'],
    ['M', 'A', 'T', 'E', 'R', 'I', 'A', 'U'],
    ['F', 'U', 'E', 'R', 'Z', 'A', 'C', 'E'],
    ['T', 'E', 'O', 'R', 'I', 'A', 'B', 'I'],
  ], words: ['ATOMO', 'ENERGIA', 'PROTONES', 'GENETICA', 'MATERIA', 'FUERZA', 'TEORIA', 'FISICA'] },
  { id: 8, title: 'TECNOLOGÍA #1', difficulty: 'EXPERTO', grid: [
    ['R', 'O', 'B', 'O', 'T', 'I', 'C', 'A'],
    ['C', 'O', 'D', 'I', 'G', 'O', 'S', 'Y'],
    ['L', 'O', 'G', 'I', 'C', 'A', 'C', 'S'],
    ['S', 'E', 'R', 'V', 'I', 'D', 'O', 'R'],
    ['B', 'A', 'S', 'E', 'D', 'A', 'T', 'O'],
    ['M', 'O', 'V', 'I', 'L', 'E', 'W', 'E'],
    ['R', 'E', 'D', 'E', 'S', 'R', 'K', 'B'],
    ['P', 'Y', 'T', 'H', 'O', 'N', 'C', 'P'],
  ], words: ['ROBOTICA', 'CODIGO', 'LOGICA', 'SERVIDOR', 'BASEDATO', 'MOVIL', 'REDES', 'PYTHON'] },
];

function generateAllWordSearches() {
  const levels = ['NOVATO', 'MEDIO', 'ALTO', 'EXPERTO'];
  const fullList = [];

  levels.forEach((lvl) => {
    const basePuzzles = WORD_SEARCH_DATA.filter((item) => item.difficulty === lvl);
    for (let i = 1; i <= 20; i++) {
      const base = basePuzzles[(i - 1) % basePuzzles.length];
      fullList.push({
        ...base,
        id: `${lvl}-${i}`,
        title: `${base.title.split('#')[0]} #${i}`,
        difficulty: lvl,
      });
    }
  });

  return fullList;
}

const allPuzzles = generateAllWordSearches();

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function WordSearchEbook() {
  const handlePrint = () => {
    window.print();
  };

  const pages = chunkArray(allPuzzles, 2);

  return (
    <div className="min-h-screen bg-neutral-800 text-neutral-100 flex flex-col items-center p-4 print:p-0 print:bg-white print:text-black">
      <header className="no-print w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-xl p-4 mb-6 shadow-2xl flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white">🔤 Libro de Sopas de Letras</h1>
          <p className="text-xs text-neutral-400">41 Páginas totales (Índice + 40 Páginas de juegos)</p>
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
            <header className="border-b-4 border-black pb-4 mb-10 text-center">
              <h1 className="text-4xl font-black uppercase tracking-wider">ÍNDICE</h1>
              <p className="text-sm font-bold text-neutral-600 mt-1">
                GUÍA DE SOPAS DE LETRAS Y NIVELES
              </p>
            </header>

            <div className="space-y-6 my-12 px-4">
              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-xl font-black uppercase">Nivel 1: NOVATO</span>
                  <p className="text-xs text-neutral-600 font-medium">Sopas de Letras del #1 al #20 ( Temas fáciles y directos )</p>
                </div>
                <span className="text-lg font-black">Págs. 2 - 11</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-xl font-black uppercase">Nivel 2: MEDIO</span>
                  <p className="text-xs text-neutral-600 font-medium">Sopas de Letras del #1 al #20 ( Palabras de longitud media )</p>
                </div>
                <span className="text-lg font-black">Págs. 12 - 21</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-xl font-black uppercase">Nivel 3: ALTO</span>
                  <p className="text-xs text-neutral-600 font-medium">Sopas de Letras del #1 al #20 ( Desafío temático )</p>
                </div>
                <span className="text-lg font-black">Págs. 22 - 31</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-xl font-black uppercase">Nivel 4: EXPERTO</span>
                  <p className="text-xs text-neutral-600 font-medium">Sopas de Letras del #1 al #20 ( Vocabulario avanzado )</p>
                </div>
                <span className="text-lg font-black">Págs. 32 - 41</span>
              </div>
            </div>
          </div>

          <footer className="border-t border-black pt-3 flex justify-between text-xs font-bold uppercase">
            <span>Gran Colección de Sopas de Letras • 80 Desafíos</span>
            <span>Página 1</span>
          </footer>
        </section>

        {/* PÁGINAS DE SOPAS DE LETRAS (2 POR HOJA A4) */}
        {pages.map((pair, pageIdx) => {
          const isLastPage = pageIdx === pages.length - 1;
          const pageNumber = pageIdx + 2;

          return (
            <section
              key={`page-${pageIdx}`}
              className={`a4-page ${!isLastPage ? 'page-break' : ''} flex flex-col justify-between p-10 border border-neutral-300 bg-white text-black shadow-2xl print:shadow-none print:border-0 mb-8 print:mb-0`}
            >
              <div className="flex flex-col justify-around flex-grow py-2">
                {pair.map((item) => (
                  <div key={item.id} className="w-full mb-6 last:mb-0">
                    <header className="border-b-2 border-black pb-1 mb-3 flex justify-between items-end">
                      <h2 className="text-xl font-black uppercase">{item.title}</h2>
                      <span className="text-[10px] font-black border border-black px-2 py-0.5 rounded uppercase">
                        NIVEL: {item.difficulty}
                      </span>
                    </header>

                    <div className="flex flex-col items-center">
                      <div className="grid grid-cols-8 gap-1 bg-white p-2 border-2 border-black mb-3">
                        {item.grid.map((row, rIdx) =>
                          row.map((letter, cIdx) => (
                            <div
                              key={`cell-${item.id}-${rIdx}-${cIdx}`}
                              className="w-7 h-7 flex items-center justify-center font-mono font-black text-base text-black uppercase"
                            >
                              {letter}
                            </div>
                          ))
                        )}
                      </div>

                      <div className="w-full max-w-xs border-t border-dotted border-black pt-2">
                        <p className="text-[10px] font-black uppercase tracking-wider text-center mb-1">
                          ENCUENTRA LAS PALABRAS:
                        </p>
                        <div className="grid grid-cols-4 gap-x-2 gap-y-0.5 text-center">
                          {item.words.map((word, wIdx) => (
                            <span key={wIdx} className="text-[11px] font-bold tracking-tight text-neutral-800 uppercase">
                              {word}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <footer className="border-t border-black pt-2 flex justify-between text-[11px] font-bold uppercase">
                <span>Colección Sopa de Letras</span>
                <span>Página {pageNumber}</span>
              </footer>
            </section>
          );
        })}
      </main>

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
