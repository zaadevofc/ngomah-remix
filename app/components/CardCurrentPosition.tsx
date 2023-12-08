
const CardCurrentPosition = () => {
    return (
        <>
            <div className="flex flex-col mt-16 mx-4">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col justify-start">
                        <h1 className="font-bold tracking-wide">Lokasi mu sekarang 📍</h1>
                        <h1 className="text-[13px]">Bisa langsung cuss kalo mau pergi ~</h1>
                    </div>
                    <p className="text-sm default-btn">Refresh</p>
                </div>
                <div className="flex flex-col border-2 border-green-600 mt-5 p-3 rounded-2xl">
                    <h1 className="font-[poppins] text-lg font-semibold line-clamp-1">SMK Negeri 2 Sukoharjo</h1>
                    <h1 className="font-[poppins] text-sm text-slate-500 line-clamp-2">Jl. Raya Sukoharjo - Wonogiri, Begajah, Sukoharjo 57515</h1>
                </div>
                <div className="flex flex-row gap-3 items-center justify-between mt-3">
                    <h1 className="default-btn text-sm !w-full set-amber">Salin Alamat</h1>
                    <h1 className="default-btn text-sm !w-full">Pakai Lokasi</h1>
                </div>
            </div>
        </>
    )
}

export default CardCurrentPosition