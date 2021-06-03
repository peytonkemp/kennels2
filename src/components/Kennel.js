import React from "react"
// import { Animal } from "./animal/Animal"
import "./Kennel.css"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
// import { CustomerProvider } from "./customer/CustomerProvider"
// import { CustomerList } from "./customer/CustomerList"
// import { EmployeeProvider } from "./employee/EmployeeProvider"
// import { EmployeeList } from "./employee/EmployeeList"
// import { LocationProvider } from "./location/LocationProvider"
// import { LocationList } from "./location/LocationList"


export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>

        </article>
    </>
)

            // <CustomerProvider>
            //     <CustomerList />
            // </CustomerProvider>

            // <EmployeeProvider>
            //     <EmployeeList />
            // </EmployeeProvider>

            // <LocationProvider>
            //     <LocationList />
            // </LocationProvider>