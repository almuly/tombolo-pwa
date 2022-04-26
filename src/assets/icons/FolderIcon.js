import * as React from "react"

function FolderIcon(props) {
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
                fill="none"
                clipRule="evenodd"
                d="M21.445 15.758c0 3.578-2.109 5.687-5.687 5.687H7.972c-3.588 0-5.696-2.109-5.696-5.687V7.963c0-3.579 1.314-5.687 4.892-5.687h2c.718 0 1.394.338 1.825.913l.913 1.214a2.291 2.291 0 001.825.912h2.83c3.587 0 4.911 1.826 4.911 5.477l-.027 4.966z"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fill="none"
                d="M7.059 14.49h9.593"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default FolderIcon
