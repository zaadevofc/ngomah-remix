import { useEffect, useState } from 'react'

const Loading = () => {
  const [view, setView] = useState(false)
  useEffect(() => setView(true), [])

  return (
    <div className={`${view && 'opacity-100'} opacity-0 flex flex-col justify-center items-center min-h-screen p-8 duration-[2.5s]`}>
        <img className="w-36" src="/logo.png" alt="" />
        <h1 className="font-['Aoboshi_One'] text-4xl">Ngomah</h1>
        <h1 className="font-['Aoboshi_One'] text-slate-500 tracking-wide mt-1">Ngojek Muslimah</h1>
    </div>
  )
}

export default Loading