import Image from "next/image";
import style from './Search.module.css'

export default function SearchSection() {
    return (
        <div className={style.flexBox}>
            <input
                type="text"
                placeholder="Enter text..."
                className={style.customInput}
            />
            <div className={style.searchBtn}>
                <p>Search</p>
            </div>
        </div>
    );
}
