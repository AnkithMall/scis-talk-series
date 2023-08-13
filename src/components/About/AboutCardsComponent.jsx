import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  import { BsFillRocketTakeoffFill } from "react-icons/bs";
const AboutCardsComponent = (prop) => (
    <>
        <Card className="card mt-6 w-[288px] mx-10 sm:mx-6 mb-6 h-[288px] overflow-y-scroll">
            <CardBody >
                {/* <BsFillRocketTakeoffFill className="text-blue-500 w-12 h-12 mb-4 mx-auto" /> */}
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                    {prop.about.title}
                </Typography>
                <Typography className="text-center">
                    {prop.about.content}
                </Typography>
            </CardBody>
        </Card>
    </>
)

export default AboutCardsComponent ;