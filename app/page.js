'use client';

import React from 'react';

// Temas y palabras para las Sopas de Letras
const WORD_SEARCH_DATA = [
  // BEGINNER (Nivel 1)
  { id: 1, title: 'ANIMALS #1', difficulty: 'BEGINNER', grid: [
    ['D', 'O', 'G', 'X', 'C', 'A', 'T', 'M'],
    ['L', 'I', 'O', 'N', 'B', 'E', 'A', 'R'],
    ['F', 'I', 'S', 'H', 'B', 'I', 'R', 'D'],
    ['D', 'U', 'C', 'K', 'F', 'R', 'O', 'G'],
    ['P', 'I', 'G', 'Z', 'C', 'O', 'W', 'K'],
    ['M', 'O', 'U', 'S', 'E', 'H', 'I', 'P'],
    ['S', 'H', 'E', 'E', 'P', 'A', 'N', 'T'],
    ['W', 'O', 'L', 'F', 'G', 'O', 'A', 'T'],
  ], words: ['DOG', 'CAT', 'LION', 'BEAR', 'FISH', 'BIRD', 'FROG', 'COW'] },
  { id: 2, title: 'FRUITS #1', difficulty: 'BEGINNER', grid: [
    ['A', 'P', 'P', 'L', 'E', 'L', 'E', 'M'],
    ['B', 'A', 'N', 'A', 'N', 'A', 'M', 'E'],
    ['G', 'R', 'A', 'P', 'E', 'L', 'O', 'N'],
    ['L', 'E', 'M', 'O', 'N', 'P', 'E', 'A'],
    ['P', 'E', 'A', 'C', 'H', 'L', 'U', 'M'],
    ['K', 'I', 'W', 'I', 'M', 'A', 'N', 'G'],
    ['P', 'L', 'U', 'M', 'B', 'E', 'R', 'R'],
    ['O', 'R', 'A', 'N', 'G', 'E', 'Y', 'S'],
  ], words: ['APPLE', 'BANANA', 'GRAPE', 'LEMON', 'PEACH', 'KIWI', 'PLUM', 'ORANGE'] },

  // MEDIUM (Nivel 2)
  { id: 3, title: 'COUNTRIES #1', difficulty: 'MEDIUM', grid: [
    ['C', 'A', 'N', 'A', 'D', 'A', 'M', 'E'],
    ['B', 'R', 'A', 'Z', 'I', 'L', 'X', 'I'],
    ['F', 'R', 'A', 'N', 'C', 'E', 'Y', 'C'],
    ['J', 'A', 'P', 'A', 'N', 'U', 'K', 'O'],
    ['S', 'P', 'A', 'I', 'N', 'I', 'T', 'A'],
    ['M', 'E', 'X', 'I', 'C', 'O', 'G', 'E'],
    ['E', 'G', 'Y', 'P', 'T', 'C', 'H', 'I'],
    ['P', 'E', 'R', 'U', 'I', 'N', 'D', 'I'],
  ], words: ['CANADA', 'BRAZIL', 'FRANCE', 'JAPAN', 'SPAIN', 'MEXICO', 'EGYPT', 'PERU'] },
  { id: 4, title: 'SPORTS #1', difficulty: 'MEDIUM', grid: [
    ['S', 'O', 'C', 'C', 'E', 'R', 'T', 'E'],
    ['T', 'E', 'N', 'N', 'I', 'S', 'B', 'A'],
    ['G', 'O', 'L', 'F', 'S', 'K', 'I', 'I'],
    ['S', 'W', 'I', 'M', 'M', 'I', 'N', 'G'],
    ['B', 'O', 'X', 'I', 'N', 'G', 'R', 'U'],
    ['R', 'U', 'G', 'B', 'Y', 'J', 'U', 'D'],
    ['C', 'Y', 'C', 'L', 'I', 'N', 'G', 'O'],
    ['S', 'K', 'A', 'T', 'I', 'N', 'G', 'X'],
  ], words: ['SOCCER', 'TENNIS', 'GOLF', 'SWIMMING', 'BOXING', 'RUGBY', 'CYCLING', 'SKATING'] },

  // HARD (Nivel 3)
  { id: 5, title: 'SPACE #1', difficulty: 'HARD', grid: [
    ['P', 'L', 'A', 'N', 'E', 'T', 'S', 'U'],
    ['G', 'A', 'L', 'A', 'X', 'Y', 'C', 'O'],
    ['C', 'O', 'S', 'M', 'O', 'S', 'O', 'R'],
    ['R', 'O', 'C', 'K', 'E', 'T', 'M', 'B'],
    ['A', 'S', 'T', 'E', 'R', 'O', 'I', 'D'],
    ['N', 'E', 'B', 'U', 'L', 'A', 'T', 'O'],
    ['S', 'T', 'A', 'R', 'S', 'U', 'N', 'S'],
    ['C', 'O', 'M', 'E', 'T', 'M', 'O', 'O'],
  ], words: ['PLANETS', 'GALAXY', 'COSMOS', 'ROCKET', 'ASTEROID', 'NEBULA', 'STARS', 'COMET'] },
  { id: 6, title: 'OCEAN #1', difficulty: 'HARD', grid: [
    ['S', 'H', 'A', 'R', 'K', 'W', 'H', 'A'],
    ['D', 'O', 'L', 'P', 'H', 'I', 'N', 'L'],
    ['C', 'O', 'R', 'A', 'L', 'R', 'E', 'E'],
    ['T', 'U', 'R', 'T', 'L', 'E', 'F', 'S'],
    ['O', 'C', 'T', 'O', 'P', 'U', 'S', 'I'],
    ['W', 'A', 'V', 'E', 'S', 'F', 'I', 'S'],
    ['I', 'S', 'L', 'A', 'N', 'D', 'B', 'E'],
    ['S', 'E', 'A', 'W', 'E', 'E', 'D', 'C'],
  ], words: ['SHARK', 'DOLPHIN', 'CORAL', 'TURTLE', 'OCTOPUS', 'WAVES', 'ISLAND', 'SEAWEED'] },

  // EXPERT (Nivel 4)
  { id: 7, title: 'SCIENCE #1', difficulty: 'EXPERT', grid: [
    ['A', 'T', 'O', 'M', 'P', 'H', 'Y', 'S'],
    ['E', 'N', 'E', 'R', 'G', 'Y', 'L', 'I'],
    ['L', 'A', 'B', 'O', 'R', 'A', 'T', 'O'],
    ['P', 'R', 'O', 'T', 'O', 'N', 'S', 'P'],
    ['G', 'E', 'N', 'E', 'T', 'I', 'C', 'S'],
    ['M', 'A', 'T', 'T', 'E', 'R', 'Q', 'U'],
    ['F', 'O', 'R', 'C', 'E', 'C', 'E', 'L'],
    ['T', 'H', 'E', 'O', 'R', 'Y', 'B', 'I'],
  ], words: ['ATOM', 'ENERGY', 'PROTONS', 'GENETICS', 'MATTER', 'FORCE', 'THEORY', 'PHYSICS'] },
  { id: 8, title: 'TECHNOLOGY #1', difficulty: 'EXPERT', grid: [
    ['R', 'O', 'B', 'O', 'T', 'I', 'C', 'S'],
    ['C', 'O', 'D', 'I', 'N', 'G', 'S', 'Y'],
    ['A', 'I', 'L', 'O', 'G', 'I', 'C', 'S'],
    ['S', 'E', 'R', 'V', 'E', 'R', 'S', 'T'],
    ['D', 'A', 'T', 'A', 'B', 'A', 'S', 'E'],
    ['M', 'O', 'B', 'I', 'L', 'E', 'W', 'E'],
    ['N', 'E', 'T', 'W', 'O', 'R', 'K', 'B'],
    ['P', 'Y', 'T', 'H', 'O', 'N', 'C', 'P'],
  ], words: ['ROBOTICS', 'CODING', 'SERVERS', 'DATABASE', 'MOBILE', 'NETWORK', 'PYTHON', 'LOGIC'] },
];

function generateAllWordSearches() {
  const levels = ['BEGINNER', 'MEDIUM', 'HARD', 'EXPERT'];
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
          <h1 className="text-lg font-bold text-white">🔤 Word Search Book (English Edition)</h1>
          <p className="text-xs text-neutral-400">41 Total Pages (Table of Contents + 40 Puzzle Pages)</p>
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
            <header className="border-b-4 border-black pb-4 mb-10 text-center">
              <h1 className="text-4xl font-black uppercase tracking-wider">TABLE OF CONTENTS</h1>
              <p className="text-sm font-bold text-neutral-600 mt-1">
                WORD SEARCH PUZZLE GUIDE & LEVELS
              </p>
            </header>

            <div className="space-y-6 my-12 px-4">
              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-xl font-black uppercase">Level 1: BEGINNER</span>
                  <p className="text-xs text-neutral-600 font-medium">Word Searches #1 to #20 ( Easy thematic grids )</p>
                </div>
                <span className="text-lg font-black">Pages 2 - 11</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-xl font-black uppercase">Level 2: MEDIUM</span>
                  <p className="text-xs text-neutral-600 font-medium">Word Searches #1 to #20 ( Moderate word length )</p>
                </div>
                <span className="text-lg font-black">Pages 12 - 21</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-xl font-black uppercase">Level 3: HARD</span>
                  <p className="text-xs text-neutral-600 font-medium">Word Searches #1 to #20 ( Challenging topics )</p>
                </div>
                <span className="text-lg font-black">Pages 22 - 31</span>
              </div>

              <div className="flex justify-between items-baseline border-b-2 border-dotted border-black pb-2">
                <div>
                  <span className="text-xl font-black uppercase">Level 4: EXPERT</span>
                  <p className="text-xs text-neutral-600 font-medium">Word Searches #1 to #20 ( Advanced vocabulary )</p>
                </div>
                <span className="text-lg font-black">Pages 32 - 41</span>
              </div>
            </div>
          </div>

          <footer className="border-t border-black pt-3 flex justify-between text-xs font-bold uppercase">
            <span>Ultimate Word Search • 80 Puzzles</span>
            <span>Page 1</span>
          </footer>
        </section>

        {/* PÁGINAS DE SOPAS DE LETRAS */}
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
                        LEVEL: {item.difficulty}
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
                          FIND THE WORDS:
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
                <span>Word Search Collection</span>
                <span>Page {pageNumber}</span>
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
