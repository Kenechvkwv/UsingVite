function Form() {
  return (
    <div>
      <form
        action="https://www.getrevue.co/profile/kenechvkwv/add_subscriber"
        method="post"
        target="_blank"
      >
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <input
            className="text-lg md:text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none"
            placeholder="Your email address..."
            type="email"
            name="member[email]"
          />
          <input
            type="submit"
            value="Join Today"
            name="member[subscribe]"
            className="bg-primary rounded-full md:rounded-bl-none md:rounded-tl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 cursor-pointer hover:opacity-90 duration-150"
          />
        </div>

        <div className="opacity-75 italic">
          By subscribing, you agree with Revue’s{" "}
          <a
            target="_blank"
            href="https://www.getrevue.co/terms"
            className="hover:opacity-80 duration-150"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://www.getrevue.co/privacy"
            className="hover:opacity-80 duration-150"
          >
            Privacy Policy
          </a>
          .
        </div>
      </form>
    </div>
  );
}

export default Form;
