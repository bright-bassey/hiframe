import './App.css'

function App() {
  return (
    <iframe
      src="https://react.oxypu.com/dashboard/channels/"
      title="Embedded Website"
      width="100%"
      height="100%"
      style={{ position: "fixed", top: 0, left: 0, border: "none", width: "100vw", height: "100vh" }}
      allow="fullscreen"
    />
  );
}

export default App;
