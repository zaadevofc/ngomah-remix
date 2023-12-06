import type { MetaFunction } from "@remix-run/node";
import { FaCarSide, FaHistory, FaStarHalfAlt } from "react-icons/fa";
import { FaBoltLightning, FaCircleDot, FaEllipsis, FaLocationDot, FaRegStar, FaStar, FaWallet } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { TbHelmet } from "react-icons/tb";
import ContainerHp from "~/components/ContainerHp";

export const meta: MetaFunction = () => {
  return [
    { title: "Ngomah | Ngojek Muslimah" },
    { name: "description", content: "Tin tin!!! Ojek Online mau lewatt ~" },
  ];
};

export default function Index() {
  return (
    <>
      <ContainerHp className='border-x border-black h-full flex-col'>
        <div className="flex flex-col">
          <div className="bg-white drop-shadow-md flex flex-row justify-between w-full items-center py-3 px-5 gap-5 rounded-b-xl">
            <input type="text" placeholder="Mau pergi kemana hari ini?" className="input input-sm p-5 py-6 input-bordered w-full" />
            <img className="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/93970726?v=4" alt="" />
          </div>
          <div className="w-full h-52 bg-green-600 bg-[url('/bg/line.svg')] -mt-2 -z-[1] flex justify-center items-center relative">
            <h1 className="text-white font-bold text-3xl font-['Aoboshi_One'] mb-6">Ngojek Muslimah</h1>
            <div className="absolute -bottom-8 w-full px-5">
              <div className="flex flex-row drop-shadow-md bg-white rounded-3xl justify-between default-border px-5 py-2">
                <div className="flex flex-row items-center gap-3">
                  <div className="bg-green-500/20 p-3 rounded-full text-green-700 text-[16px]">
                    <FaWallet />
                  </div>
                  <div className="flex flex-col leading-tight text-sm">
                    <h1 className="font-bold">Rp99.999.999</h1>
                    <h1 className="text-gray-600 font-medium text-[13px]">Top Up saldo</h1>
                  </div>
                </div>
                {/* <span className="h-auto w-[.5px] bg-slate-400"></span> */}
                <div className="flex flex-row gap-3 justify-between items-center">
                  <div className="flex flex-col gap-1 items-center">
                    <div className="bg-green-600 text-sm p-2 w-fit rounded-xl text-white">
                      <FaCarSide />
                    </div>
                    <h1 className="text-xs font-semibold">Pergi</h1>
                  </div>
                  <div className="flex flex-col gap-1 items-center ml-2">
                    <div className="bg-green-600 text-sm p-2 w-fit rounded-xl text-white">
                      <FaBoltLightning />
                    </div>
                    <h1 className="text-xs font-semibold">Kirim</h1>
                  </div>
                  <div className="indicator">
                    <span className="indicator-item badge bg-red-500 right-2 top-0.5 !px-1.5 text-white font-bold py-2 text-[10px]">3</span>
                    <div className="flex flex-col gap-1 items-center">
                      <div className="bg-green-600 text-sm p-2 w-fit rounded-full text-white">
                        <FaEllipsis />
                      </div>
                      <h1 className="text-xs font-semibold">Lainnya</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 px-7 mt-16 gap-5">
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-green-500/30 w-fit p-3 rounded-2xl border border-green-600 drop-shadow-lg relative">
                <FaCarSide className='text-2xl text-green-800' />
              </div>
              <h1 className="text-sm">Pergi</h1>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-green-500/30 w-fit p-3 rounded-2xl border border-green-600 drop-shadow-lg relative">
                <FaCarSide className='text-2xl text-green-800' />
              </div>
              <h1 className="text-sm">Pergi</h1>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-green-500/30 w-fit p-3 rounded-2xl border border-green-600 drop-shadow-lg relative">
                <FaCarSide className='text-2xl text-green-800' />
              </div>
              <h1 className="text-sm">Pergi</h1>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-green-500/30 w-fit p-3 rounded-2xl border border-green-600 drop-shadow-lg relative">
                <FaCarSide className='text-2xl text-green-800' />
              </div>
              <h1 className="text-sm">Pergi</h1>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-green-500/30 w-fit p-3 rounded-2xl border border-green-600 drop-shadow-lg relative">
                <FaCarSide className='text-2xl text-green-800' />
              </div>
              <h1 className="text-sm">Pergi</h1>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-sky-500/30 w-fit p-3 rounded-2xl border border-sky-600 drop-shadow-lg">
                <FaBoltLightning className='text-2xl text-sky-800' />
              </div>
              <h1 className="text-sm">Kirim</h1>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-purple-500/30 w-fit p-3 rounded-2xl border border-purple-600 drop-shadow-lg">
                <FaWallet className='text-2xl text-purple-800' />
              </div>
              <h1 className="text-sm">Top Up</h1>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-amber-500/30 w-fit p-3 rounded-2xl border border-amber-600 drop-shadow-lg">
                <FaHistory className='text-2xl text-amber-800' />
              </div>
              <h1 className="text-sm">Riwayat</h1>
            </div>
          </div>
          <div className="flex flex-col p-4 mt-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col justify-start">
                <h1 className="font-bold tracking-wide">Riwayat perjalanan mu</h1>
                <h1 className="text-[13px]">Semua riwayat udah kesimpen ~</h1>
              </div>
              <p className="text-sm text-slate-500">Lihat lainnya</p>
            </div>
            <div className="flex flex-row gap-3 overflow-x-auto py-5">
              {[...new Array(7)].map((x, i) => (
                <div className="card min-w-[200px] click bg-base-100 drop-shadow-md sm:cursor-pointer">
                  <figure className="h-[120px] rounded-2xl">
                    <img src="/peta.jpg" alt="Shoes" />
                  </figure>
                  <div className="card-body text-sm p-4">
                    <h1 className="card-title text-sm line-clamp-2">
                      SMK Negeri 2 Sukoharjo
                    </h1>
                    <h1 className="text-gray-500 -mt-1">34km</h1>
                    <div className="flex flex-row items-center gap-2">
                      <TbHelmet className='text-black text-lg fill-green-500' />
                      <h1 className="text-gray-700 font-semibold">Sischa Ayu</h1>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-2">
                        <FaStar className='text-black text-lg fill-yellow-500' />
                        <h1 className="text-gray-700 font-semibold">4.7</h1>
                      </div>
                      <h1 className="text-gray-500 font-semibold">Rp24.000</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col justify-start">
                  <h1 className="font-bold tracking-wide">Kasih rating ke driver</h1>
                  <h1 className="text-[13px]">Biar driver makin semangat ✨</h1>
                </div>
              </div>
              <div className="flex flex-row click rounded-2xl p-5 gap-5 items-center drop-shadow-md my-5 bg-green-500/10 border border-green-600">
                <div className="">
                  <img className="rounded-full border-4 border-green-600 object-cover w-28 h-full" src="https://avatars.githubusercontent.com/u/93970726?v=4" alt="" />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-xl tracking-wide font-[Poppins]">Sischa Ayu</h1>
                  <h1 className="text-[16px] font-[Poppins] tracking-wide">B 123AA UD</h1>
                  <span className="my-2"></span>
                  <div className="flex flex-col items-start">
                    <div className="flex flex-row gap-2 items-center text-sm">
                      <FaLocationDot className='fill-amber-600' />
                      <h1 className="font-[Poppins] line-clamp-1">Rumah Kejaa</h1>
                    </div>
                    <div className="flex flex-col ml-[.8px] text-xs">
                      <GoDot />
                    </div>
                    <div className="flex flex-row gap-2 items-center text-sm">
                      <FaCircleDot className='fill-blue-600' />
                      <h1 className="font-[Poppins] line-clamp-1">SMK Negeri 2 Sukoharjo</h1>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2 mt-4 text-lg">
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                    <FaStarHalfAlt className='text-amber-500' />
                    <FaRegStar className='text-amber-500' />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col justify-start">
                  <h1 className="font-bold tracking-wide">Rekomendasi buatmu</h1>
                  <h1 className="text-[13px]">Tempat wisata yang ciamik 💖</h1>
                </div>
              </div>
              <div className="flex flex-row gap-3 overflow-x-auto py-5">
                {[...new Array(12)].map((x, i) => (
                  <div className={`flex flex-col rounded-2xl h-52 bg-[url('/bg/wisata-4.webp')] bg-center relative min-w-full`}>
                    <div className="rounded-2xl bg-gradient-to-b from-gray-200/5 via-gray-500/80 to-gray-800 absolute top-0 z-[1] h-full w-full flex flex-col p-4 text-white justify-end">
                      <h1 className="font-[poppins] font-bold text-2xl">Taman Pelangi</h1>
                      <p>Jl. Slamet riyadi No. 0, Jatisari, Indonesia, Negara Kita</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerHp>
    </>
  );
}
