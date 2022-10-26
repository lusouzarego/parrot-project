

import NavBar from "../../components/NavBar"
import FeedInput from "../../components/FeedInput"
import NovoComit from "../../components/NovoComentário"
import LocaLComit from "../../components/LocalComit"

export default function Feed(){
    return (
        <div>
            <NavBar/>
            <FeedInput/>
            <LocaLComit/>
        </div>
    )
}