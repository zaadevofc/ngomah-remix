import { Link } from '@remix-run/react'

const Navbar = () => {
    return (
        <>
            <div className="bg-white drop-shadow-md flex flex-row justify-between w-full items-center py-3 px-5 gap-5 rounded-b-2xl">
                <input type="text" placeholder="Mau pergi kemana hari ini?" className="input input-sm p-5 py-6 input-bordered w-full" />
                <Link className="w-12" to={'/profile'}>
                    <img className="w-auto rounded-full click" src="https://avatars.githubusercontent.com/u/93970726?v=4" alt="" />
                </Link>
            </div>
        </>
    )
}

export default Navbar