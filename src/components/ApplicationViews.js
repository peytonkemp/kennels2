import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>
        </>
    )
}

            // <LocationProvider>
            //     <Route exact path="/">
            //         <LocationList />
            //     </Route>
            // </LocationProvider>