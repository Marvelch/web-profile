"use client";

import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Slider() {
  const { data, error, isLoading } = useSWR(
    "https://api.escuelajs.co/api/v1/products",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  var protofolio = [
    {
      year: 2020,
      title: "Bookingbook",
      description:
        "Layanan Bookingbook digunakan sebagai wadah untuk memanajemen hasil pengundian dan pengelolaan group arisan. Fitur utama meliputi pengelolaan group arisan, penjadwalan tanggal pengundian, serta pemberitahuan hasil melalui WhatsApp dan email.",
      link: "https://bookingbook.id/",
      screenshot:
        "https://cdn.projects.co.id/upload/usr1a031d/202007205f1508d26981d.jpg",
    },
    {
      year: 2021,
      title: "PT BSS - Bengkel Management System",
      description:
        "Official website yang digunakan oleh PT BSS untuk transaksi semua cabang bengkel perusahaan. Website ini mencakup pengelolaan data keluar-masuk barang, pencatatan pembelian, laporan akhir bulan dan trimester, serta fitur promo. Tersedia sistem hak akses berbeda untuk setiap pengguna.",
      link: "https://our.tmsbss.com/",
      screenshot:
        "https://cdn.projects.co.id/upload/usr1a031d/202210246355dfa91cdf4.jpg",
    },
    {
      year: 2022,
      title: "Website Desa Moronge",
      description:
        "Website resmi Desa Moronge untuk menampilkan informasi dan profil desa. Fitur meliputi laporan dana desa, artikel/berita, jadwal kegiatan desa, serta layanan seperti laporan online dan pembuatan surat keterangan secara online.",
      link: "https://moronge.desa.id/",
      screenshot:
        "https://cdn.projects.co.id/upload/usr1a031d/202204226262dc2ae3d62.jpg",
    },
    {
      year: 2022,
      title: "The Shopper Guardian",
      description:
        "Web The Shopper Guardian adalah platform verifikasi toko online asal Singapura. Website ini mencatat dan memverifikasi laporan pengguna terhadap toko online untuk menilai keabsahan dan reputasi toko.",
      link: null,
      screenshot:
        "https://cdn.projects.co.id/upload/usr1a031d/202210246355e0c6b27cb.jpg",
    },
    {
      year: 2023,
      title: "Legal Document Management",
      description:
        "Website legal yang digunakan untuk pengelolaan dokumen perizinan dan perjanjian perusahaan. Termasuk manajemen laporan dan pemberitahuan masa perpanjangan dokumen secara terintegrasi.",
      link: null,
      screenshot:
        "https://cdn.projects.co.id/upload/usr1a031d/20231227658b8d07515e6.jpg",
    },
    {
      year: 2024,
      title: "Website Sales Order",
      description:
        "Website Sales Order digunakan untuk memfasilitasi transaksi oleh setiap sales perusahaan, termasuk pengelolaan detail transaksi pembelian. Fitur meliputi sales order, produk, pelanggan, pengguna, dan laporan transaksi.",
      link: null,
      screenshot:
        "https://cdn.projects.co.id/upload/usr1a031d/2024011465a39f0e8a591.jpg",
    },
    {
      year: 2024,
      title: "Sibalita Web",
      description:
        "Sibalita adalah layanan pengelolaan data balita stunting yang digunakan oleh Dinas BAPELITBANG Talaud untuk memonitor data dari setiap kecamatan di Kabupaten Kepulauan Talaud.",
      link: "https://sibalita.talaudkab.go.id/",
      screenshot:
        "https://cdn.projects.co.id/upload/usr1a031d/2024011465a3a0a63a2a5.jpg",
    },
    {
      year: 2024,
      title: "Sibalita App (Android)",
      description:
        "Sibalita App merupakan aplikasi mobile Android yang dikembangkan untuk Dinas BAPELITBANG Talaud dalam rangka pengelolaan dan monitoring data balita stunting di wilayah Kabupaten Kepulauan Talaud.",
      link: "https://play.google.com/store/apps/details?id=com.sibalita.balitaapps",
      screenshot:
        "https://cdn.projects.co.id/upload/usr1a031d/2024011465a3a0a63a2a5.jpg",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      direction="vertical"
      mousewheel={{ releaseOnEdges: true }}
    >
      {protofolio.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="h-full flex items-center justify-center card-swiper p-4 rounded-2xl border-2 border-solid">
            <div className="flex">
              {/* {Array.isArray(item.screenshot) ? (
                <div className="flex gap-2">
                  {item.screenshot.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="w-full object-cover mx-auto"
                    />
                  ))}
                </div>
              ) : (
                <Image
                  src={item.screenshot}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-full object-cover mx-auto"
                />
              )} */}
              <div>
                <h2 className="text-lg font-bold text-center mt-2">
                  {item.title}
                </h2>
                <p className="text-center text-sm text-gray-600">
                  {item.description}
                </p>
                <div className="text-xs text-gray-400 mt-1">{item.year}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
