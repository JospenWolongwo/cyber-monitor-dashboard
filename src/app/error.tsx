'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Une erreur s&apos;est produite</h2>
        <p className="text-gray-600 mb-6">Nous nous excusons pour ce désagrément.</p>
        <button
          onClick={reset}
          className="bg-[#2CB8C6] text-white px-4 py-2 rounded-lg hover:bg-[#25A5B2] transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
