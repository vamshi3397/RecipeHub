import { create } from "zustand"

interface RecipeStore {
    recipes: [],
    setRecipes: (recipes: []) => void,
    currentPage: number,
    setCurrentPage: (page: number) => void
}

export const useRecipeStore = create<RecipeStore>((set) => ({
    recipes: [],
    setRecipes: (recipes) => set({recipes}),
    currentPage: 0,
    setCurrentPage: (page) => set({currentPage: page})
}))