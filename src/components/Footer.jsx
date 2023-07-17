const Footer = () => (
    <footer className="bg-[#e9ecef] w-full shadow dark:bg-gray-900 relative">
            <div className="w-full max-w-screen-xl mx-auto md:py-8 flex item-center">
                <div className="basis-2/3 ">
                    <div>
                        <a href="https://uohyd.ac.in/" className="flex items-center mb-4 sm:mb-0">
                            <img src="./asset/University_of_Hyderabad_Logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">University Of University</span>
                        </a>
                    </div>
                    <ul className="flex flex-wrap items-center m-10 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="basis-1/3 mx-28">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.5222447205475!2d78.33190287188053!3d17.455454829030632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb933a724ba1b3%3A0xb8c33c1053792fe5!2sNew%20SCIS%20Building!5e0!3m2!1sen!2sin!4v1689338887999!5m2!1sen!2sin"
                        width="500"
                        height="300"
                        style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl "></iframe>
                </div>
            </div>
            <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 m-4 pb-3">© 2023 <a href="https://uohyd.ac.in" className="hover:underline">University Of Hyderabad</a>. All Rights Reserved.</span>
        </footer>
)

export default Footer;