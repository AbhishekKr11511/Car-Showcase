"use client"

import { useState } from "react"
import { CustomeButtonProps } from "@/types"

const CustomButton = ({title, containerStyles, handleClick} : CustomeButtonProps) => {
    
  return (
    <button
        disabled={false}
        type="button"
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
        
    >
        <span className="flex-1">
            {title}
        </span>
    </button>
  )
}
export default CustomButton