import { Box, Stack } from "@mui/material"
import { InputComponent } from "./components/InputComponent"
import { useState } from "react"
import { ChipComponent } from "./components/ChipComponent"

export const Header = () => {
    const onChangeHandler = (value: string) => {
        setSearchValue(value);
    }

    const chipsData = ['Breakfast', 'Lunch', 'Dinner']
    const [searchValue, setSearchValue] = useState('');
    return (
        <>
            <Stack sx={{
                width: '100%',
                height: '40%'
            }}>

                <Box sx={{
                    padding: '2rem',
                    gap: '1rem'
                }}>
                    <h3>Discover Delicious Recipes</h3>
                    <p>Search from 100+ recipes</p>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '25%'
                    }}>
                        <InputComponent
                            value={searchValue}
                            onChange={onChangeHandler}
                        />
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '1rem',
                            marginLeft: '0.5rem'
                        }}>
                            {
                                chipsData.map((chip: string) => <>
                                    <Box sx={{
                                        paddingRight: '0.5rem'
                                    }}>
                                        <ChipComponent label={chip} />
                                    </Box>
                                </>)
                            }
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </>
    )
}