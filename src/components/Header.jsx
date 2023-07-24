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
            <div className="flex md:order-2">
                <Button>
                    Feedback
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#home"
                >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#about">
                    About
                </Navbar.Link>
                <Navbar.Link href="#speaker">
                    Speaker
                </Navbar.Link>
                <Navbar.Link href="#schedule">
                    Schedule
                </Navbar.Link>
                <Navbar.Link href="#gallery">
                    Gallery
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default Header;