import SectionHeader from "@components/common/section-header";
import { FaArrowRight } from "react-icons/fa6";

interface CrewProps {
    heading: string;
}

interface Pilot {
    name: string;
    image: string;
    color: string;
    role: string;
    description: string;
}

interface PilotCardProps {
    PilotData: Pilot;
}

const pilots = [
    {
        name: "Ritik FPV",
        color: '#2D3193',
        image: "https://res.cloudinary.com/dmlbvaapl/image/upload/v1714175249/Pilots/Ritik_guohps.jpg",
        role: "Pilot",
        description: "Ritik is a pilot with 5 years of experience. He has flown over 1000 hours and has a 100% safety record."
    },
    {
        name: "ItspFPV",
        color: '#1FD31C',
        image: "https://res.cloudinary.com/dmlbvaapl/image/upload/v1714175249/Pilots/Prashant_uwx18a.jpg",
        role: "Pilot",
        description: "Prashant is a pilot with 5 years of experience. He has flown over 1000 hours and has a 0% safety record."
    }
]

export default function Crew({ heading }: CrewProps) {
    return (
        <div className="flex flex-col justify-start my-10">
            <SectionHeader sectionHeading={heading} />
            <div className="flex">
                {pilots.map((pilot) => {
                    return (
                        <>
                            <PilotCard key={pilot.name} PilotData={pilot} />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

const PilotCard = ({ PilotData }: PilotCardProps) => {

    return (
        <div className="flex flex-col items-center mx-5 justify-center cursor-pointer group">
            <div className="mb-3">
                <img
                    style={{
                        border: `5px solid ${PilotData.color}`,
                        borderRadius: '50%'
                    }}
                    className={`rounded-full border-[${PilotData.color}] h-64 w-64`}
                    src={PilotData.image}
                    alt={PilotData.name}
                />
            </div>
            <div className="flex justify-around text-white items-center">
                <h2 className={`text-md font-bold text-white group-hover:text-yellow-500 mx-4`}>{PilotData.name}</h2>
                <FaArrowRight className=" text-xl hidden group-hover:block group-hover:text-yellow-500 ease-in-out animate-bounce" />
            </div>
        </div>
    )
}