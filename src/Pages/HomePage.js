import React from 'react';

const HomePage = () =>
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
                <p>here will be a list of other insurance companies</p>
                <button onClick={start}>Start</button>
            </div>
        </div>
    );
};

export default HomePage;