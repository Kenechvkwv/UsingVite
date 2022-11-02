function Footer() {
  return (
    <div>
      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
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

export default Footer;
