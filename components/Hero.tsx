'use client'

import Image from "next/image"
import CustomButton from "@/components/CustomButton"


const Hero = () => {
    const handleScroll = () => {
        alert("You clicked")
    }    
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, Book, or rent a Car : Quickly and easily!
            </h1>
            <p className="hero__subtitle">
                Streamline your car rental experience with you effortless booking process.
            </p>
            
            <CustomButton 
                title="Explore Cars"
                containerStyles='bg-primary-blue text-white rounded-full mt-10'
                handleClick={handleScroll}
            />

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src={'/hero-bg.png'} alt="blue-bg" fill className="object-contain"/>
                    <Image src={'/hero.png'} alt="car" fill className="object-contain"/>
                </div>

            </div>
            
        </div>
    </div>
  )
}
export default Hero