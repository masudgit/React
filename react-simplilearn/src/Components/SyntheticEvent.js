import React from "react";



function SyntheticEvent() {
    function handleLink(e) {
        e.preventDefault();
        alert('You clicked a a link');
    }

    return (
        <a href="#" onClick={handleLink}>
            Click_Me
        </a>
    );
}
export default SyntheticEvent;