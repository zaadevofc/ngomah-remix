import { useLocation } from '@remix-run/react';
import { TbHistory, TbHome, TbMessageCircle, TbStar } from 'react-icons/tb';
import { Link } from 'react-router-dom';

let list = [
    { title: 'Beranda', icon: TbHome, class: 'nav-bottom-l-active', href: '/' },
    { title: 'Pesan', icon: TbMessageCircle, class: 'nav-bottom-active', href: '/pesan' },
    { title: 'Riwayat', icon: TbHistory, class: 'nav-bottom-active', href: '/riwayat' },
    { title: 'Favorit', icon: TbStar, class: 'nav-bottom-r-active', href: '/favorit' },
]

const BottomBar = () => {
    const { pathname } = useLocation();
    return (
        <>
            <div className="btm-nav z-[99999] rounded-t-3xl drop-shadow-md default-border sm:max-w-sm flex mx-auto">
                {list.map((x, i) => (
                    <Link to={x.href} className={`${x.href == pathname && x.class} duration-300`}>
                        <x.icon className='text-2xl text-green-600 fill-green-500/50' />
                        <p className="text-[10px]">{x.title}</p>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default BottomBar