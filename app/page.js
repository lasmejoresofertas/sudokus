'use client';

import React from 'react';

// Plantillas base de Sudoku
const BASE_BOARDS = {
  NOVATO: [
    [5, 3, '', '', 7, '', '', '', ''],
    [6, '', '', 1, 9, 5, '', '', ''],
    ['', 9, 8, '', '', '', '', 6, ''],
    [8, '', '', '', 6, '', '', '', 3],
    [4, '', '', 8, '', 3, '', '', 1],
    [7, '', '', '', 2, '', '', '', 6],
    ['', 6, '', '', '', '', 2, 8, ''],
    ['', '', '', 4, 1, 9, '', '', 5],
    ['', '', '', '', 8, '', '', 7, 9],
  ],
  MEDIO: [
    ['', '', '', 2, 6, '', 7, '', 1],
    [6, 8, '', '', 7, '', '', 9, ''],
    [1, 9, '', '', '', 4, 5, '', ''],
    [8, 2, '', 1, '', '', '', 4, ''],
    ['', '', 4, 6, '', 2, 9, '', ''],
    ['', 5, '', '', '', 3, '', 2, 8],
    ['', '', 9, 3, '', '', '', 7, 4],
    ['', 4, '', '', 5, '', '', 3, 6],
    [7, '', 3, '', 1, 8, '', '', ''],
  ],
  ALTO: [
    [1, '', '', '', '', 7, '', 9, ''],
    ['', 3, '', '', 2, '', '', '', 8],
    ['', '', 9, 6, '', '', 5, '', ''],
    ['', '', 5, 3, '', '', 9, '', ''],
    ['', 1, '', '', 8, '', '', '', 2],
    [6, '', '', '', '', 4, '', '', ''],
    [3, '', '', '', '', '', '', 1, ''],
    ['', 4, '', '', '', '', '', '', 7],
    ['', '', 7, '', '', '', 3, '', ''],
  ],
  EXPERTO: [
    ['', '', 6, '', '', '', 2, '', ''],
    ['', 8, '', '', 4, '', '', 1, ''],
    [1, '', '', 2, '', 5, '', '', 3],
    ['', '', 8, '', '', '', 4, '', ''],
    ['', 9, '', '', '', '', '', 6, ''],
    ['', '', 4, '', '', '', 8, '', ''],
    [2, '', '', 8, '', 1, '', '', 7],
    ['', 5, '', '', 3, '', '', 9, ''],
    ['', '', 1, '', '', '', 6, '', ''],
  ],
};

// Generador de variaciones
function generateVariations(baseBoard, count, levelName) {
  const result = [];
  for (let i = 1; i <= count; i++) {
    const shift = i % 9;
    const newBoard = baseBoard.map((row) =>
      row.map((val) => {
        if (val === '') return '';
        return ((val - 1 + shift) % 9) + 1;
      })
    );

    result.push({
      id: `${levelName}-${i}`,
      title: `SUDOKU #${i}`,
      difficulty: levelName,
      puzzle: newBoard,
    });
  }
  return result;
}

// 80 Sudokus totales (20 por nivel)
const allSudokus = [
  ...generateVariations(BASE_BOARDS.NOVATO, 20, 'NOVATO'),
  ...generateVariations(BASE_BOARDS.MEDIO, 20, 'MEDIO'),
  ...generateVariations(BASE_BOARDS.ALTO, 20, 'ALTO'),
  ...generateVariations(BASE_BOARDS.EXPERTO, 20, 'EXPERTO'),
];

// Agrupar de a 2 Sudokus por carilla A4
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function EbookGenerator() {
  const handlePrint = () => {
    window.print();
  };

  const pages = chunkArray(allSudokus, 2);

  return (
    <div className="min-h-screen bg-neutral-800 text-neutral-100 flex flex-col items-center p-4 print:p-0 print:bg-white print:text-black">
      {/* Botón superior */}
      <header className="no-print w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-xl p-4 mb-6 shadow-2xl flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white">📚 Libro con Índice (2 por Carilla)</h1>
          <p className="text-xs text-neutral-400">41 Páginas totales (Índice + 40 de Sudokus)</p>
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
                GUÍA DE CONTENIDOS Y NIVELES
              </p>
            </header>

            <div className="space-y-6 my-12 px-4">
              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-xl font-black uppercase">Nivel 1: NOVATO</span>
                  <p className="text-xs text-neutral-600 font-medium">Sudokus del #1 al #20 ( Ideal para empezar )</p>
                </div>
                <span className="text-lg font-black">Págs. 2 - 11</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-xl font-black uppercase">Nivel 2: MEDIO</span>
                  <p className="text-xs text-neutral-600 font-medium">Sudokus del #1 al #20 ( Desafío moderado )</p>
                </div>
                <span className="text-lg font-black">Págs. 12 - 21</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-xl font-black uppercase">Nivel 3: ALTO</span>
                  <p className="text-xs text-neutral-600 font-medium">Sudokus del #1 al #20 ( Requiere concentración )</p>
                </div>
                <span className="text-lg font-black">Págs. 22 - 31</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-xl font-black uppercase">Nivel 4: EXPERTO</span>
                  <p className="text-xs text-neutral-600 font-medium">Sudokus del #1 al #20 ( Para verdaderos maestros )</p>
                </div>
                <span className="text-lg font-black">Págs. 32 - 41</span>
              </div>
            </div>
          </div>

          <footer className="border-t border-black pt-3 flex justify-between text-xs font-bold uppercase">
            <span>Desafío Mental • 80 Sudokus</span>
            <span>Página 1</span>
          </footer>
        </section>

        {/* PÁGINAS DE SUDOKUS (Páginas 2 a 41) */}
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
                  <div key={item.id} className="w-full mb-4 last:mb-0">
                    <header className="border-b-2 border-black pb-1 mb-3 flex justify-between items-end">
                      <h2 className="text-xl font-black">{item.title}</h2>
                      <span className="text-[10px] font-black border border-black px-2 py-0.5 rounded uppercase">
                        NIVEL: {item.difficulty}
                      </span>
                    </header>

                    <div className="flex justify-center items-center">
                      <div className="grid grid-cols-9 border-2 border-black bg-white w-[270px] h-[270px] box-border">
                        {item.puzzle.map((row, rIdx) =>
                          row.map((val, cIdx) => {
                            const isRightThin = cIdx !== 8;
                            const isBottomThin = rIdx !== 8;
                            const isRightThick = (cIdx + 1) % 3 === 0 && cIdx !== 8;
                            const isBottomThick = (rIdx + 1) % 3 === 0 && rIdx !== 8;

                            return (
                              <div
                                key={`cell-${item.id}-${rIdx}-${cIdx}`}
                                className={`
                                  flex items-center justify-center font-bold text-lg text-black bg-white box-border
                                  ${isRightThin ? 'border-r border-r-neutral-400' : ''}
                                  ${isBottomThin ? 'border-b border-b-neutral-400' : ''}
                                  ${isRightThick ? '!border-r-2 !border-r-black' : ''}
                                  ${isBottomThick ? '!border-b-2 !border-b-black' : ''}
                                `}
                              >
                                {val}
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <footer className="border-t border-black pt-2 flex justify-between text-[11px] font-bold uppercase">
                <span>Desafío Mental</span>
                <span>Página {pageNumber}</span>
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
