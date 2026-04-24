import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-10 px-4 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Anshu's Portfolio
          </h2>
          <p className="text-sm mt-2 text-gray-500">
            MERN Stack Developer building clean and scalable web apps.
          </p>
        </div>

        {/* Center */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-2">
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <NavLink
                to="/about"
                className="hover:text-blue-500 transition"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="hover:text-blue-500 transition"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-blue-500 transition"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-2">
            Connect
          </h3>

          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/anshukushwaha057"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/anshukushwaha057"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://facebook.com/yourfacebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t mt-8 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Anshu Kumar Kushwaha
      </div>
    </footer>
  );
}