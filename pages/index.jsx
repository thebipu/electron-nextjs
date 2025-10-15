export default function Home() {
  return (
    <main style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'system-ui, sans-serif'}}> 
      <div>
        <h1>Electron + Next.js</h1>
        <p>Template is running.</p>
        <p>IPC test: {typeof window !== 'undefined' && window.api ? window.api.ping() : 'no api'}</p>
      </div>
    </main>
  );
}
