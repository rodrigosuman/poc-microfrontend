import { Fragment } from "react"
import styles from "./SearchEngine.module.css";

const SearchEngine = () => {
    return (
        <form className={styles["search-engine"]} onSubmit={e => e.preventDefault()}>
            <input type="text" name="search-engine-input" placeholder="Pesquise aqui..."/>
            <button>Buscar</button>
        </form>
    )
}
export default SearchEngine