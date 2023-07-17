import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  import { BsFillRocketTakeoffFill } from "react-icons/bs";
const AboutCardsComponent = (prop) => (
    <>
        <Card className="card mt-6 w-[280px] mx-10 sm:mx-7 mb-6 h-[280px] overflow-y-scroll">
            <CardBody >
                <BsFillRocketTakeoffFill className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                    UI/UX Review Check
                </Typography>
                <Typography className="text-center">
                    Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
                </Typography>
            </CardBody>
        </Card>
    </>
)

export default AboutCardsComponent ;