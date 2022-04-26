import * as React from "react"

function ScanIcon (props) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M22.631 13.014H1.5M20.75 8.778V6.825A3.335 3.335 0 0017.425 3.5h-1.644M3.382 8.778V6.82a3.32 3.32 0 013.316-3.32l1.68-.001M20.75 13.014v4.531a3.335 3.335 0 01-3.325 3.325h-1.644M3.382 13.014v4.535a3.32 3.32 0 003.316 3.32l1.68.002"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ScanIcon
