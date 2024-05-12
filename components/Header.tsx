import Link from "next/link"


const Header = () => {
    return (
        <header>
            <ul className="flex flex-row justify-evenly bg-indigo-500">
                <nav>
                    <Link href="/" >Home</Link>
                </nav>

                <nav>
                    <Link href="/signup" >Signup</Link>
                </nav>
            </ul>
        </header>
    )
}

export default Header