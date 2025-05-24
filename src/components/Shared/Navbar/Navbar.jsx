import Image from "next/image";
import Menubar from "./Menubar/Menubar";
import style from './Navbar.module.css'
import HeaderMain from "./HeaderMain/HeaderMain";
import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <Link href='/'>
                <Image
                    src='/images/navbar/b5b731c4b6fbcc3a210ca6ed2cd6b76b3e6d8024.jpg'
                    alt=""
                    height={114}
                    width={1280}
                    className={style.navImage}
                />
            </Link>
            <Menubar />
            <HeaderMain />
        </div>
    );
}
