import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import style from './Menubar.module.css'

export default function Menubar() {
  return (
    <div className={style.mainDiv}>
      <div className={style.container}>
        <div className={style.menubarContainer}>
          <div className={style.flexRow}>
            <p className={style.menuText}>Sell On Biztrade</p>
            <IoMdArrowDropdown />
            <p className={style.divider}>|</p>
          </div>

          <div className={style.flexRow}>
            <p className={style.menuText}>Help</p>
            <IoMdArrowDropdown />
            <p className={style.divider}>|</p>
          </div>

          <div className={style.flexRow}>
            <p className={style.menuText}>About Us</p>
            <p className={style.divider}>|</p>
          </div>

          <div className={style.flexRow}>
            <p className={style.menuText}>Blog</p>
            <p className={style.divider}>|</p>
          </div>

          <div className={style.flexRow}>
            <p className={style.menuText}>Sign In</p>
            <p className={style.divider}>|</p>
          </div>

          <div className={style.flexRow}>
            <p className={style.menuText}>Register</p>
            <IoMdArrowDropdown />
            <p className={style.divider}>|</p>
          </div>

          <div className={style.flexRow}>
            <RiAccountCircleFill />
            <p className={style.menuText}>Account</p>
            <p className={style.divider}>|</p>
          </div>
        </div>
      </div>
    </div>
  );
}
