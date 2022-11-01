function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome to
        </h2>
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black  uppercase mb-8">
          The coding club
        </h1>

        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 d:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          942,243 Members
        </div>

        <form
          action="https://www.getrevue.co/profile/kenechvkwv/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
          <div className="revue-form-group">
            <input
              className="revue-form-field"
              placeholder="Your email address..."
              type="email"
              name="member[email]"
              id="member_email"
            />

            <input
              type="submit"
              value="Subscribe"
              name="member[subscribe]"
              id="member_submit"
            />
          </div>
          <div className="revue-form-footer">
            By subscribing, you agree with Revue’s
            <a target="_blank" href="https://www.getrevue.co/terms">
              Terms of Service
            </a>
            and
            <a target="_blank" href="https://www.getrevue.co/privacy">
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </main>

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

export default App;
