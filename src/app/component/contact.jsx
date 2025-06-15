import Link from "next/link";
import { FaInstagram, FaFacebook, FaMailchimp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-6 uppercase">Contact</h1>
      <p className="mb-4">
        If you have any questions or would like to get in touch, please feel
        free to reach out via the following methods :
      </p>
      <div class="flex">
        <div class="w-14 flex-none">
          <Link
            href="https://www.instagram.com/marvelwowiling"
            className="text-white-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-white" />
          </Link>
        </div>
        <div class="w-14 flex-none">
          <Link
            href="https://www.facebook.com/marvel.wowiling.5"
            className="text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-white" />
          </Link>
        </div>
        <div class="w-14 flex-none">
          <Link
            href="mailto:mr.marvel.christevan@gmail.com"
            className="text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMailchimp className="text-2xl text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
