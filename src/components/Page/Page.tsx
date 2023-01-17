import { useState } from "react"
import Nav from "../Nav/Nav"
import Header from "../Header/Header"
const Page = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="font-sans font-medium text-lg">
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
    )
}
export default Page