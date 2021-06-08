import React from "react"
import "./Kennel.css"
import { AnimalProvider } from "./animals/AnimalProvider"
import { AnimalList } from "./animals/AnimalList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
// import { LocationProvider } from "./location/LocationProvider"
// import { LocationList } from "./location/LocationList"
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";


export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

    </>
)

        // <h2>Animals</h2>
        // <article className="animals">
        //     <AnimalProvider>    
        //         <AnimalList />
        //     </AnimalProvider>
        // </article>
        // <article className="customers">
        //     <CustomerProvider>
        //         <CustomerList />
        //     </CustomerProvider>
        // </article>
        // <article className="employees">
        //     <EmployeeProvider>
        //         <EmployeeList />
        //     </EmployeeProvider>
        // </article>

            // <EmployeeProvider>
            //     <EmployeeList />
            // </EmployeeProvider>

            // <LocationProvider>
            //     <LocationList />
            // </LocationProvider>