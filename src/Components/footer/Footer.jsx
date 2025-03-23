import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="pt-4 pb-4 text-center">
        <p className="border-t-2 border-b-2">
          <i class="fa-solid fa-magnifying-glass"></i>This site uses Google
          AdSense ad intent links. AdSense automatically generates these links
          and they may help creators earn money.
        </p>
      </div>

      <div className="mx-auto p-5 flex justify-around">
        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://sarkariexamtricks.com/">
                Sarkari Exam Tricks @X
              </a>
            </li>
            <li>
              <a href="https://sarkariexamtricks.com/">
                Sarkari Exam Tricks @Telegram
              </a>
            </li>
            <li>
              <a href="https://sarkariexamtricks.com/">
                Sarkari Exam Tricks @WhatsApp
              </a>
            </li>
            <li>
              <a href="https://sarkariexamtricks.com/">
                Sarkari Exam Tricks @Instagram
              </a>
            </li>
            <li>
              <a href="https://sarkariexamtricks.com/">
                Sarkari Exam Tricks @Threads
              </a>
            </li>
            <li>
              <a href="https://sarkariexamtricks.com/">
                Sarkari Exam Tricks @Facebook
              </a>
            </li>
            <li>
              <a href="https://sarkariexamtricks.com/">
                Sarkari Exam Tricks @Linkedin
              </a>
            </li>
            <li>
              <a href="https://sarkariexamtricks.com/">
                Sarkari Exam Tricks @Youtube
              </a>
            </li>
            <li>
              <a href="https://sarkariexamtricks.com/">All Board Exams</a>
            </li>
            <li>
              <a href="https://sarkariexamtricks.com/">
                Sarkari Exam Tricks Contact Us
              </a>
            </li>
            <li>
              <a href="https://sarkariexamtricks.com/">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Apps */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Apps</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://sarkariexamtricks.com/">Android App</a>
            </li>
            <li>
              <a href="https://sarkariexamtricks.com/">Apple IOS App</a>
            </li>
          </ul>
        </div>

        {/* More */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">More</h3>
          <div className="grid grid-cols-3 gap-2">
            <a href="https://sarkariexamtricks.com/">BPSC</a>
            <a href="https://sarkariexamtricks.com/">UPSSSC</a>
            <a href="https://sarkariexamtricks.com/">CCC</a>
            <a href="https://sarkariexamtricks.com/">UP-scholarship</a>
            <a href="https://sarkariexamtricks.com/">IBPS</a>
            <a href="https://sarkariexamtricks.com/">SSC</a>
            <a href="https://sarkariexamtricks.com/">UPSC</a>
            <a href="https://sarkariexamtricks.com/">Air Force</a>
            <a href="https://sarkariexamtricks.com/">Navy</a>
            <a href="https://sarkariexamtricks.com/">RPSC</a>
            <a href="https://sarkariexamtricks.com/">Delhi Dssb</a>
            <a href="https://sarkariexamtricks.com/">Railway</a>
            <a href="https://sarkariexamtricks.com/">UPPCS</a>
            <a href="https://sarkariexamtricks.com/">HSSC</a>
            <a href="https://sarkariexamtricks.com/">TET</a>
            <a href="https://sarkariexamtricks.com/">Coast Guard</a>
            <a href="https://sarkariexamtricks.com/">Police Vacancy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
