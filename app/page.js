'use client';

import React from 'react';

const sudokusData = [
  {
    id: 1,
    title: 'SUDOKU #1',
    difficulty: 'MEDIO',
    puzzle: [
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
  },
];

export default function EbookGenerator() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-800 text-neutral-100 flex flex-col items-center p-4 print:p-0 print:bg-white print:text-black">
      {/* Botón superior (se oculta en el PDF) */}
      <header className="no-print w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-xl p-4 mb-6 shadow-2xl flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white">📚 Mi Ebook de Sudokus</h1>
          <p className="text-xs text-neutral-400">Listo para descargar en A4</p>
        </div>
        <button
          onClick={handlePrint}
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2 rounded-lg text-sm cursor-pointer"
        >
          📥 Descargar PDF
        </button>
      </header>

      {/* Hoja A4 */}
      <main className="flex flex-col items-center">
        {/* PORTADA */}
        <section className="a4-page flex flex-col justify-between items-center text-center p-12 border border-neutral-300 bg-white text-black shadow-2xl print:shadow-none print:border-0 mb-8 print:mb-0">
          <div className="w-full border-b-2 border-black pb-4 font-bold text-sm">
            EDICIÓN IMPRIMIBLE 2027
          </div>
          <div className="my-auto">
            <h1 className="text-5xl font-black uppercase tracking-tight mb-4">
              DESAFÍO MENTAL
            </h1>
            <p className="text-xl font-medium border-y border-black py-2">
              Colección de Sudokus
            </p>
          </div>
          <div className="w-full border-t-2 border-black pt-4 text-xs font-bold uppercase">
            Formato A4 • Listo para Imprimir
          </div>
        </section>

        {/* PÁGINA DE SUDOKU */}
        {sudokusData.map((item) => (
          <section
            key={item.id}
            className="a4-page flex flex-col justify-between p-12 border border-neutral-300 bg-white text-black shadow-2xl print:shadow-none print:border-0"
          >
            <div>
              <header className="border-b-2 border-black pb-3 mb-8 flex justify-between items-end">
                <h2 className="text-2xl font-black">{item.title}</h2>
                <span className="text-xs font-black border border-black px-2 py-0.5 rounded">
                  {item.difficulty}
                </span>
              </header>

              <div className="flex justify-center items-center my-8">
                <div className="grid grid-cols-9 border-4 border-black bg-white w-[380px] h-[380px]">
                  {item.puzzle.map((row, rIdx) =>
                    row.map((val, cIdx) => {
                      const isRightThick = (cIdx + 1) % 3 === 0 && cIdx !== 8;
                      const isBottomThick = (rIdx + 1) % 3 === 0 && rIdx !== 8;

                      return (
                        <div
                          key={`cell-${rIdx}-${cIdx}`}
                          className={`
                            flex items-center justify-center font-bold text-2xl text-black border border-neutral-400
                            ${isRightThick ? 'border-r-4 border-r-black' : ''}
                            ${isBottomThick ? 'border-b-4 border-b-black' : ''}
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

            <footer className="border-t border-black pt-3 flex justify-between text-xs font-bold uppercase">
              <span>Desafío Mental</span>
              <span>Página 2</span>
            </footer>
          </section>
        ))}
      </main>

      {/* Estilos para el tamaño exacto A4 */}
      <style jsx global>{`
        @page {
          size: A4 portrait;
          margin: 0;
        }
        .a4-page {
          width: 210mm;
          height: 297mm;
          box-sizing: border-box;
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
