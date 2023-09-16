import React from 'react';

const MainPage = () =>
{
    const start = async event =>
    {
        event.preventDefault();

        window.location.href = "/Home"
    }

    return(
        <div>
            title
            <div>
                <p>click this button to learn more about insurance</p>
                <button onClick={start}>Start</button>
            </div>
        </div>
    );
};

export default MainPage;