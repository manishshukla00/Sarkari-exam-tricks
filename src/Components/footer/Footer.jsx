import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://sarkariexamtricks.com/"
                className="hover:text-gray-400"
              >
                Sarkari Exam Tricks @X
              </a>
            </li>
            <li>
              <a
                href="https://sarkariexamtricks.com/"
                className="hover:text-gray-400"
              >
                Sarkari Exam Tricks @Telegram
              </a>
            </li>
            <li>
              <a
                href="https://sarkariexamtricks.com/"
                className="hover:text-gray-400"
              >
                Sarkari Exam Tricks @WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://sarkariexamtricks.com/"
                className="hover:text-gray-400"
              >
                Sarkari Exam Tricks @Instagram
              </a>
            </li>
            <li>
              <a
                href="https://sarkariexamtricks.com/"
                className="hover:text-gray-400"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Apps */}
        <div>
          <h3 className="text-lg font-bold mb-4">Apps</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://sarkariexamtricks.com/"
                className="hover:text-gray-400"
              >
                Android App
              </a>
            </li>
            <li>
              <a
                href="https://sarkariexamtricks.com/"
                className="hover:text-gray-400"
              >
                Apple iOS App
              </a>
            </li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="text-lg font-bold mb-4">More</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <a
              href="https://sarkariexamtricks.com/"
              className="hover:text-gray-400"
            >
              BPSC
            </a>
            <a
              href="https://sarkariexamtricks.com/"
              className="hover:text-gray-400"
            >
              UPSSSC
            </a>
            <a
              href="https://sarkariexamtricks.com/"
              className="hover:text-gray-400"
            >
              CCC
            </a>
            <a
              href="https://sarkariexamtricks.com/"
              className="hover:text-gray-400"
            >
              IBPS
            </a>
            <a
              href="https://sarkariexamtricks.com/"
              className="hover:text-gray-400"
            >
              SSC
            </a>
            <a
              href="https://sarkariexamtricks.com/"
              className="hover:text-gray-400"
            >
              UPSC
            </a>
            <a
              href="https://sarkariexamtricks.com/"
              className="hover:text-gray-400"
            >
              Navy
            </a>
            <a
              href="https://sarkariexamtricks.com/"
              className="hover:text-gray-400"
            >
              Railway
            </a>
            <a
              href="https://sarkariexamtricks.com/"
              className="hover:text-gray-400"
            >
              Police Vacancy
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 py-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Sarkari Exam Tricks. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
