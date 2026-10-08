import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Ebook de Sudokus</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
