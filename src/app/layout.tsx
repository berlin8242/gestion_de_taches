import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-md">
            <nav className="container mx-auto p-4">
              <h1 className="text-xl font-bold">Task Manager</h1>
            </nav>
          </header>
          <main className="flex-1 container mx-auto p-4">{children}</main>
          <footer className="bg-white shadow-md mt-4">
            <div className="container mx-auto p-4 text-center text-gray-600">
              © 2024 Task Manager App. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
