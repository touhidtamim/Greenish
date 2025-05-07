import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl my-20">
      <div className="flex flex-col md:flex-row min-h-[400px]">
        <div
          className="md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('https://i.ibb.co/9kxrRKDb/668687430457402a2c166b44-5-tier-corner-plant-stand-indoor-plant.jpg')`,
          }}
        ></div>

        <div className="md:w-1/2 bg-gradient-to-br from-[#fbf8fc] via-white to-[#e2f9f6] flex items-center px-6 py-12 md:p-14">
          <div className="max-w-lg mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4 leading-tight">
              Ready to Grow With Us? 🌱
            </h2>
            <p className="text-lg md:text-xl text-green-700 mb-8">
              Get your first box at{" "}
              <span className="font-bold text-green-600">20% off</span> and
              start your green journey today.
            </p>

            <Link
              to="/greenish/services"
              className="relative inline-block px-8 py-4 font-semibold text-white bg-green-600 rounded-full overflow-hidden group shadow-md hover:shadow-xl"
            >
              <span className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 transform -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out rounded-full"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Claim Your Discount
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>

            <p className="mt-6 text-green-600 text-sm flex items-center justify-center md:justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              No commitment – cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
