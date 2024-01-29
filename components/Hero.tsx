import Image from "next/image"

import CustomButton from "@/components/CustomButton"


const Hero = () => {
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, Book, or rent a Car : Quickly and easily!
            </h1>
            <p className="hero__subtitle">
                Streamline your car rental experience with you effortless booking process.
            </p>
            
            <CustomButton/>
        </div>
    </div>
  )
}
export default Hero