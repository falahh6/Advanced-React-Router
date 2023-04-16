import { Outlet  } from "react-router-dom"
import MainNavigation from "../layouts/MainNavigation"

const Root = () => {
    // const navigation = useNavigation();
    return <>
        <MainNavigation />
        <main>
          {/* {  navigation.state === 'loading' ? <p>Loading....</p> : } */}
          <Outlet />
        </main>
    </>
}

export default Root;