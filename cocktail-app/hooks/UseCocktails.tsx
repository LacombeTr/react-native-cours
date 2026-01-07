import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const PAGE_SIZE = 20;

export const UseCocktails = () => {
    const [allCocktails, setAllCocktails] = useState<any[]>([]); // Tous les cocktails
    const [cocktailList, setCocktailList] = useState<any[]>([]); // Cocktails affichés
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchAllCocktails = async () => {
        setLoading(true);
        try {
            const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

            const promises = alphabet.map((letter) =>
                axios.get(
                    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
                )
            );

            const results = await Promise.all(promises);
            const allDrinks = results.flatMap((response) => response.data.drinks || []);

            setAllCocktails(allDrinks);
            
            setCocktailList(allDrinks.slice(0, PAGE_SIZE));
            setPage(1);
            setHasMore(allDrinks.length > PAGE_SIZE);
        } catch (error) {
            console.error("Error fetching cocktails:", error);
        } finally {
            setLoading(false);
        }
    };

    const loadMore = useCallback(() => {
        if (loadingMore || !hasMore) return;

        setLoadingMore(true);
        const nextPage = page + 1;
        const startIndex = page * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE;
        const newItems = allCocktails.slice(startIndex, endIndex);

        if (newItems.length > 0) {
            setCocktailList((prev) => [...prev, ...newItems]);
            setPage(nextPage);
            setHasMore(endIndex < allCocktails.length);
        } else {
            setHasMore(false);
        }
        setLoadingMore(false);
    }, [page, allCocktails, loadingMore, hasMore]);

    useEffect(() => {
        fetchAllCocktails();
    }, []);

    return {
        cocktailList,
        fetchAllCocktails,
        loading,
        loadMore,
        loadingMore,
        hasMore,
    };
};
