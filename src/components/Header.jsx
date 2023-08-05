import { Button, Navbar } from 'flowbite-react';

const Header = () => (
    <div className='border-b-2'>
        <Navbar
            fluid
        >
            <Navbar.Brand href="https://uohyd.ac.in/">
                <img
                    alt="Uoh Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="./asset/University_of_Hyderabad_Logo.png"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    SCIS Talk Series
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 font-bold">
                <Button>
                    <a href="#schedule" className='font-bold'>
                        Schedule
                    </a>    
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#home"
                >
                    <span className='font-bold'>
                        Home
                    </span>
                </Navbar.Link>
                <Navbar.Link href="#about">
                    <span className='font-bold'>
                        About
                    </span>
                </Navbar.Link>
                <Navbar.Link href="#speaker">
                    <span className='font-bold' >
                        Speaker
                    </span>
                </Navbar.Link>
                {/* <Navbar.Link href="#schedule">
                    Schedule
                </Navbar.Link> */}
                <Navbar.Link href="#gallery">
                    <span className='font-bold' >
                        Gallery
                    </span>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default Header;