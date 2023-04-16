import React from "react";
import { Link } from "react-router-dom";

const MailButton = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
        <button> {label} </button>
        </Link>
    );
};

export default MailButton;