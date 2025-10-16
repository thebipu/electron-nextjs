export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center font-sans bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Electron + Next.js</h1>
        <p className="mt-2 text-gray-600">Template is running.</p>
        <p className="mt-1 text-sm text-gray-500">
          IPC test:{' '}
          {typeof window !== 'undefined' && window.api ? window.api.ping() : 'no api'}
        </p>
      </div>
    </main>
  );
}
