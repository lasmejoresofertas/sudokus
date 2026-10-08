'use client';

import React from 'react';

// SVG Mandala Pattern Generator
const MANDALA_PATTERNS = [
  // 1. FLORAL
  { id: 'm-1', category: 'FLORAL', title: 'LOTUS FLOWER MANDALA', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[1.5]">
      <circle cx="100" cy="100" r="90" />
      <circle cx="100" cy="100" r="70" />
      <circle cx="100" cy="100" r="50" />
      <circle cx="100" cy="100" r="30" />
      <circle cx="100" cy="100" r="10" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 100 100)`}>
          <path d="M 100 10 C 120 30 120 50 100 70 C 80 50 80 30 100 10 Z" />
          <path d="M 100 30 C 115 45 115 60 100 70 C 85 60 85 45 100 30 Z" />
          <circle cx="100" cy="20" r="3" />
        </g>
      ))}
    </svg>
  )},

  // 2. GEOMETRIC
  { id: 'm-2', category: 'GEOMETRIC', title: 'SACRED GEOMETRY MANDALA', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[1.5]">
      <circle cx="100" cy="100" r="88" />
      <circle cx="100" cy="100" r="60" />
      <circle cx="100" cy="100" r="32" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 100 100)`}>
          <rect x="70" y="70" width="60" height="60" />
          <polygon points="100,12 112,40 88,40" />
          <circle cx="100" cy="26" r="6" />
        </g>
      ))}
    </svg>
  )},

  // 3. COSMIC
  { id: 'm-3', category: 'UNIVERSE', title: 'SUN AND STARS MANDALA', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[1.5]">
      <circle cx="100" cy="100" r="85" />
      <circle cx="100" cy="100" r="40" />
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 100 100)`}>
          <path d="M 100 15 L 105 45 L 100 60 L 95 45 Z" />
          <circle cx="100" cy="28" r="4" />
        </g>
      ))}
    </svg>
  )},

  // 4. ETHNIC
  { id: 'm-4', category: 'ETHNIC', title: 'TRIBAL DREAMCATCHER MANDALA', svg: (
    <svg viewBox="0 0 200 200" className="w-full h-full stroke-black fill-none stroke-[1.5]">
      <circle cx="100" cy="100" r="90" strokeWidth="3" />
      <circle cx="100" cy="100" r="82" />
      <circle cx="100" cy="100" r="25" />
      {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 100 100)`}>
          <path d="M 100 18 Q 130 50 100 75 Q 70 50 100 18 Z" />
          <path d="M 100 10 L 100 25" />
        </g>
      ))}
    </svg>
  )}
];

// Generate 80 pages distributed in 10 categories
function generate80Mandalas() {
  const categories = [
    'FLORAL', 'GEOMETRIC', 'SUN & STARS', 'TRIBAL & ETHNIC',
    'SPIRITUAL', 'NATURE', 'HARMONY', 'MEDITATION', 'CRYSTALS', 'ZODIAC'
  ];

  const list = [];
  let totalCount = 1;

  categories.forEach((cat) => {
    for (let i = 1; i <= 8; i++) {
      const base = MANDALA_PATTERNS[(totalCount - 1) % MANDALA_PATTERNS.length];
      list.push({
        id: `mandala-${totalCount}`,
        pageNumber: totalCount + 1, // +1 for Table of Contents
        category: cat,
        title: `${cat} MANDALA #${i}`,
        svg: base.svg,
      });
      totalCount++;
    }
  });

  return list;
}

const allMandalas = generate80Mandalas();

export default function MandalaBook() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-800 text-neutral-100 flex flex-col items-center p-4 print:p-0 print:bg-white print:text-black">
      {/* Top Header Bar */}
      <header className="no-print w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-xl p-4 mb-6 shadow-2xl flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white">🧘 Mandala Coloring Book (English Edition)</h1>
          <p className="text-xs text-neutral-400">81 Total Pages (Table of Contents + 80 Mandalas)</p>
        </div>
        <button
          onClick={handlePrint}
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2 rounded-lg text-sm cursor-pointer"
        >
          📥 Download PDF
        </button>
      </header>

      <main className="flex flex-col items-center">
        {/* PAGE 1: TABLE OF CONTENTS */}
        <section className="a4-page page-break flex flex-col justify-between p-12 border border-neutral-300 bg-white text-black shadow-2xl print:shadow-none print:border-0 mb-8 print:mb-0">
          <div>
            <header className="border-b-4 border-black pb-4 mb-8 text-center">
              <h1 className="text-4xl font-black uppercase tracking-wider">TABLE OF CONTENTS</h1>
              <p className="text-sm font-bold text-neutral-600 mt-1">
                80 RELAXING & MEDITATIVE DESIGNS
              </p>
            </header>

            <div className="grid grid-cols-2 gap-4 my-6 px-2">
              {[
                { cat: '1. FLORAL MANDALAS', range: 'Pages 2 - 9' },
                { cat: '2. GEOMETRIC PATTERNS', range: 'Pages 10 - 17' },
                { cat: '3. SUN & STARS', range: 'Pages 18 - 25' },
                { cat: '4. TRIBAL & ETHNIC', range: 'Pages 26 - 33' },
                { cat: '5. SPIRITUAL DESIGNS', range: 'Pages 34 - 41' },
                { cat: '6. NATURE & FLOWERS', range: 'Pages 42 - 49' },
                { cat: '7. HARMONY & PEACE', range: 'Pages 50 - 57' },
                { cat: '8. DEEP MEDITATION', range: 'Pages 58 - 65' },
                { cat: '9. CRYSTALS & SHAPES', range: 'Pages 66 - 73' },
                { cat: '10. ZODIAC & SYMBOLS', range: 'Pages 74 - 81' },
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
            <span>Anti-Stress Mandala Collection • 80 Designs</span>
            <span>Page 1</span>
          </footer>
        </section>

        {/* MANDALA PAGES (1 LARGE MANDALA PER A4 PAGE) */}
        {allMandalas.map((item, idx) => {
          const isLastPage = idx === allMandalas.length - 1;

          return (
            <section
              key={item.id}
              className={`a4-page ${!isLastPage ? 'page-break' : ''} flex flex-col justify-between p-10 border border-neutral-300 bg-white text-black shadow-2xl print:shadow-none print:border-0 mb-8 print:mb-0`}
            >
              {/* Header */}
              <header className="border-b-4 border-black pb-2 flex justify-between items-end">
                <div>
                  <span className="text-xs font-black uppercase text-neutral-500">
                    STYLE: {item.category}
                  </span>
                  <h2 className="text-2xl font-black uppercase">{item.title}</h2>
                </div>
                <span className="text-2xl">🧘</span>
              </header>

              {/* Central Mandala */}
              <div className="flex-grow flex items-center justify-center p-4 my-2">
                <div className="w-[185mm] h-[185mm]">
                  {item.svg}
                </div>
              </div>

              {/* Footer */}
              <footer className="border-t-2 border-black pt-3 flex justify-between text-xs font-bold uppercase">
                <span>Anti-Stress Mandala Collection</span>
                <span>Page {item.pageNumber}</span>
              </footer>
            </section>
          );
        })}
      </main>

      {/* CSS Styles for A4 */}
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
