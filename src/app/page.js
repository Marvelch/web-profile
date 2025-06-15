"use client";

import Image from "next/image";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import Contact from "./component/contact";

import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider from "./component/slider";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[24px] row-start-2 items-center sm:items-start">
        {/* Detail Personal Information */}
        <div className="flex items-center gap-2">
          <Image
            src="data:image/png;base64,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"
            alt="pin"
            width={50}
            height={50}
          />
          <h1>Hi, Im Marvel Ch</h1>
        </div>
        <p className="sub-highlight">
          Full Stack Developer | Tech Enthusiast | Lifelong Learner
        </p>
        <div className="w-full flex justify-center">
          <Image
            className="w-full mask-b-from-20% mask-b-to-80% rounded-lg"
            alt="Photo Profile"
            width={400}
            height={400}
            src="/img/profile.jpg"
          />
        </div>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          I build efficient, scalable, and modern web applications <br />
          using the latest web technologies. Let’s create something <br />
          impactful together.
        </ol>
        {/* Button Linkedin & Projects */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            rel="noopener noreferrer"
            href="#projects"
          >
            <Image
              src="https://png.pngtree.com/png-vector/20221208/ourmid/pngtree-cartoon-illustration-red-rocket-png-image_6515439.png"
              alt="Projects"
              width={25}
              height={25}
              className="dark:invert"
            />
            Projects
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://www.linkedin.com/in/marvelch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
              alt="LinkedIn"
              width={20}
              height={20}
              className="dark:invert"
            />
            Linkedin
          </a>
        </div>
        {/* Skill */}
        <div className="w-full pt-15 text-center items-center justify-center">
          <h1 className="uppercase">Experince With</h1>
          <div className="grid grid-cols-6 gap-2 icon-experince pt-8">
            <div>
              <i className="devicon-bootstrap-plain" title="Bootstrap"></i>
            </div>
            <div>
              <i className="devicon-codeigniter-plain" title="Codeigniter"></i>
            </div>
            <div>
              <i className="devicon-php-plain" title="PHP"></i>
            </div>
            <div>
              <i className="devicon-javascript-plain" title="Javascript"></i>
            </div>
            <div>
              <i className="devicon-java-plain" title="Java"></i>
            </div>
            <div>
              <i className="devicon-azuresqldatabase-plain" title="SQL"></i>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div
          className="w-full pt-15 text-center items-center justify-center"
          id="projects"
        >
          <h1 className="uppercase">Projects</h1>
          <div className="pt-8">
            <Slider />
          </div>
        </div>
        {/* Experience */}
        <div className="w-full pt-15 text-center items-center px-4">
          <h1 className="uppercase mb-4">Experience</h1>
          <div className="flex flex-col items-center gap-6 pt-8">
            {" "}
            {/* Stack secara vertikal */}
            {/* Pengalaman 1 */}
            <div className="w-full max-w-screen-md">
              <div className="grid grid-cols-3 gap-3">
                <div className="flex items-center gap-2 col-span-2">
                  <Image
                    src="/img/logo/bni.png"
                    width={24}
                    height={24}
                    alt="PT Bank Negara Indonesia Tbk"
                    className="object-contain rounded-sm"
                  />
                  <h3 className="font-bold">PT Bank Negara Indonesia Tbk</h3>
                </div>
                <div className="text-end text-sm col-span-1">
                  Jun 2024 - Saat ini
                </div>
                <div className="col-span-3 text-justify text-sm leading-relaxed">
                  Bekerja sebagai System Analyst di BNI, saya bertanggung jawab
                  dalam menganalisis kebutuhan bisnis dan merancang solusi
                  sistem yang efisien serta sesuai dengan standar industri
                  perbankan. Fokus utama saya adalah menjembatani komunikasi
                  antara tim teknis dan pihak bisnis agar implementasi sistem
                  berjalan optimal.
                </div>
              </div>
            </div>
            {/* Pengalaman 2 */}
            <div className="w-full max-w-screen-md">
              <div className="grid grid-cols-3 gap-3">
                <div className="flex items-center gap-2 col-span-2">
                  <Image
                    src="/img/logo/skb.jpeg"
                    width={24}
                    height={24}
                    alt="PT Sekar Bumi"
                    className="object-contain rounded-sm"
                  />
                  <h3 className="font-bold">PT Sekar Bumi Tbk</h3>
                </div>
                <div className="text-end text-sm col-span-1">
                  Mei 2023 - Mei 2024
                </div>
                <div className="col-span-3 text-justify text-sm leading-relaxed">
                  PT Sekar Bumi Tbk, saya dipercaya menjadi salah satu tim
                  pengembangan sistem internal dan pengelola utama proyek IT
                  strategis perusahaan. Saya bertanggung jawab dalam merancang,
                  mengembangkan, dan mengintegrasikan sistem ERP guna memastikan
                  efisiensi operasional serta mendukung pengambilan keputusan
                  bisnis yang tepat.
                </div>
              </div>
            </div>
            {/* Pengalaman 3 */}
            <div className="w-full max-w-screen-md">
              <div className="grid grid-cols-3 gap-3">
                <div className="flex items-center gap-2 col-span-2">
                  <Image
                    src="/img/logo/indocyber.jpeg"
                    width={24}
                    height={24}
                    alt="PT Indocyber Global Teknologi"
                    className="object-contain rounded-sm"
                  />
                  <h3 className="font-bold">PT Indocyber Global Teknologi</h3>
                </div>
                <div className="text-end text-sm col-span-1">
                  Feb 2022 - Feb 2023
                </div>
                <div className="col-span-3 text-justify text-sm leading-relaxed">
                  Sebagai PHP Developer di lingkungan perbankan, saya
                  mengembangkan dan memelihara aplikasi internal menggunakan
                  Laravel, serta mengoptimasi query SQL dan integrasi sistem.
                  Selain itu, saya juga menangani pembuatan dan pengelolaan API
                  menggunakan Axway API Gateway untuk memastikan komunikasi
                  antar sistem berjalan aman dan sesuai standar.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center pt-5">
        <p className="flex items-center text-sm gap-2 hover:underline hover:underline-offset-4">
          Copy right © 2024 Marvel Ch
        </p>
      </footer>
    </div>
  );
}
