import { Card } from "flowbite-react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-20 relative max-md:top-32 md:top-50 top-36">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
          Informasi Kontak
        </h2>

        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
          <Card className="flex-1 bg-white dark:bg-gray-900 shadow-md p-6">
            <h5 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Hubungi Kami Di
            </h5>
            <div className="flex items-center mb-4">
              <FaPhone className="text-purple-500 mr-3 h-7 w-7" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Telepon
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  088227661015
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-orange-500 mr-3 h-7 w-7" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Lokasi Kami
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Jl. Topaz No 7, Tlogomas, Lowokwaru, Kota Malang
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-green-500 mr-3 h-7 w-7" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Email Kami
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Syntaxthreads1@gmail.com
                </p>
              </div>
            </div>
          </Card>

          <Card className="flex-1 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Punya Pertanyaan ?
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:placeholder:text-neutral-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  placeholder="Nama Lengkap"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:placeholder:text-neutral-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  placeholder="name@gmail.com"
                  required
                />
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Kami tidak akan pernah membagikan detail Anda. Baca{" "}
                  <a
                    href="/privacy-policy"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Kebijakan Privasi Kami
                  </a>
                  .
                </p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Pesan
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:placeholder:text-neutral-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  rows="4"
                  placeholder="Ketikan sesuatu..."
                  required></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  const name = document.getElementById("name").value;
                  const email = document.getElementById("email").value;
                  const message = document.getElementById("message").value;
                  const subject = "Contact Form Submission";
                  const mailto = `mailto:syntaxthreads1@gmail.com?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\n${message}`
                  )}`;
                  window.location.href = mailto;
                }}>
                Kirim
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
