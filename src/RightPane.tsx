import { Box, Divider, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { CardComponent } from "./components/CardComponent";
import { useRecipeStore } from "./Store/RecipeStore";
import { Pagination } from "./pages/Pagination";
interface Recipe {
    name: string;
    description: string;
    image: string;
}
const ITEMS_PER_PAGE = 10;

export const RightPane = () => {
    const recipes: Recipe[] = useRecipeStore((state) => state.recipes)
    const setRecipes = useRecipeStore((state) => state.setRecipes)
    const currentPage = useRecipeStore((state) => state.currentPage)
    const setCurrentPage = useRecipeStore((state) => state.setCurrentPage)
    const [displayPerPge, setDisplayPerPage] = useState<Recipe[]>();
    const onPrevClick = () => {
        const prePage = currentPage - 1;
        setCurrentPage(prePage)
        setDisplayPerPage(recipes.slice(prePage * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE))
    }
    const onNextClick = () => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage)
        setDisplayPerPage(recipes.slice(nextPage * ITEMS_PER_PAGE, (nextPage + 1) * ITEMS_PER_PAGE))
    }
    const getAllProducts = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/recipes?limit=50&skip=${0}`)
            const data = await response.json()
            setRecipes(data.recipes)
            setDisplayPerPage(data.recipes.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE))

        } catch (error) {
            console.error('Error fetching products:', error)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <>
            <Stack sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Box
                    sx={{
                        p: 3,
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        width: '100%',
                        height: '80%',
                        overflow: 'scroll'
                    }}
                >
                    {
                        displayPerPge && displayPerPge.map((item) => <>
                            <Box sx={{
                                display: 'flex',
                                flex: '0 0 1',
                                minWidth: '0',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginBottom: '2rem'
                            }}>
                                <p>{item.name}</p>
                                <p>{item.description}</p>
                                <CardComponent src={item.image} name={item.name} />
                            </Box>
                        </>)
                    }
                </Box>
                <Divider />
                <Stack className="pagination" sx={{ marginTop: '1rem' }}>
                    <Pagination currentPage={currentPage} onPrevClick={onPrevClick} onNextClick={onNextClick} />
                </Stack>
            </Stack>
        </>
    )
}