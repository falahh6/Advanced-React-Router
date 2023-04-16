import { Outlet } from "react-router-dom"
import MainNavigation from "../layouts/MainNavigation"

const Root = () => {
    return <>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </>
}

export default Root;