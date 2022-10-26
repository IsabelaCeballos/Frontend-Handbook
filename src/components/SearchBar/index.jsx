import { useState } from "react"

/*Syled Components */
import { BAR__container, SEARCH__input, CONTAINER_ICON__button } from "./styles"

/*Assets */
import { SearchIcon } from "../../assets/SearchIcon"
import { EquisIcon } from "../../assets/EquisIcon"

export const SearchBar = (props) => {
    const {placeHolder} = props;
    const [deleteSearch, setDeleteSearch] = useState("hidden");
    const [contentInput, setContentInput] = useState("");

    const handlerInput = (evt) => {
        evt.target.value !== "" ? setDeleteSearch("visible") : setDeleteSearch("hidden");
        setContentInput(evt.target.value);
        // console.log(contentInput);
    }

    return (
        <>
            <BAR__container>
                <SearchIcon width="14px" height="14px" />
                <SEARCH__input placeholder={placeHolder} value={contentInput} onChange={(evt) => handlerInput(evt)}/>
                <CONTAINER_ICON__button visibility={deleteSearch} onClick={() => {setContentInput(""); setDeleteSearch("hidden")}}>
                    <EquisIcon width="11px" height="12px" colorFill="#EAB686"/>
                </CONTAINER_ICON__button>
            </BAR__container>
        </>
    )
}