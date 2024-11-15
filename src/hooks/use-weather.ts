import type { Coordinates } from "@/api/types"
import { useQuery } from "@tanstack/react-query"


export useWeatherQuery(coordinates: Coordinates | null){
    useQuery({
        queryKey: ["weather"],
    })
}