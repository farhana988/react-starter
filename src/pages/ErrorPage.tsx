import { NavLink } from "react-router";

function ErrorPage() {
  return (
    <section
      className="error-page bg-gradient-to-r from-teal-200 via-blue-200
     to-purple-200 relative"
    >
      <div
        className=" flex items-center justify-center text-gray-800  min-h-screen
     px-10 md:px-28 lg:px-0"
      >
        <div
          className="text-center py-16 md:py-20 lg:py-32 
        bg-white bg-opacity-80 rounded-lg shadow-lg 
        max-w-5xl w-full animate__animated animate__fadeIn animate__delay-0.1s "
        >
          <h1
            className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4 
          animate__animated animate__zoomIn
           animate__delay-1s text-teal-600"
          >
            Hmm...{" "}
          </h1>

          <p
            className="text-xs md:text-base lg:text-xl mb-6 opacity-80 animate__animated animate__fadeIn
           animate__delay-2s text-gray-900"
          >
            seems like you have lost that page in the digital void
          </p>

          <div
            className="flex justify-center items-center gap-8 animate__animated 
          animate__fadeIn animate__delay-3s"
          >
            <h2
              className="md:text-xl lg:text-3xl font-semibold opacity-90
             text-gray-500 flex 
            items-center gap-4"
            >
              Lets get you to
            </h2>
            <span
              className="text-xl md:text-2xl lg:text-4xl font-bold
             text-teal-500 hover:text-teal-600 
            transition-all duration-300 animate__animated animate__bounceIn 
            animate__delay-4s"
            >
              <NavLink to={"/"}>Home! </NavLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
