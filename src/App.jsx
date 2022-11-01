function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center"></main>

      <footer className="container mx-auto p-6 flex flex-col d:flex-row items-center justify-between">
        <p>Built by Kene 💻</p>
        <div className="flex -mx-6">
          <a href="" className="mx-3 hover:opacity-80 duration-150">
            About Us
          </a>
          |
          <a href="" className="mx-3 hover:opacity-80 duration-150">
            Privacy
          </a>
          |
          <a href="" className="mx-3 hover:opacity-80 duration-150">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
