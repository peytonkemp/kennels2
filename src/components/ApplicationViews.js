import React from "react"
import { Route } from "react-router-dom"
// import { LocationProvider } from "./locations/LocationProvider"
// import { LocationList } from "./locations/LocationList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { AnimalProvider } from "./animals/AnimalProvider"
import { AnimalList } from "./animals/AnimalList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"

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

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}

            // <LocationProvider>
            //     <Route exact path="/">
            //         <LocationList />
            //     </Route>
            // </LocationProvider>