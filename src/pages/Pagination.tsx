import { Stack } from "@mui/material"
import { ButtonComponent } from "../components/ButtonComponent"

export const Pagination = ({currentPage, onPrevClick, onNextClick}) => { 
    return (
        <>
            <Stack>
                <ButtonComponent label={"Prev"} disabled={currentPage === 0} variant={"text"} onClick={onPrevClick}
                ></ButtonComponent>
                <p>Current Page: {currentPage}</p>
                <ButtonComponent label={"Next"} variant={"text"} onClick={onNextClick}></ButtonComponent>
            </Stack>
        </>
    )
}