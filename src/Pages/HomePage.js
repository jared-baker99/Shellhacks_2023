import React from 'react';

import ButtonGroup from '../Components/ButtonGroup';

const HomePage = () =>
{
    const printButtonLabel = (event) =>
    {
        alert(event.target.name);
        if (event.target.name === "Life"){
            window.location.href = "/life";
        }
    }

    return(
        <div>
            title
            <div>
                <p>Select an insurance company you want to learn about</p>
                <div className='buttons'>
                    <ButtonGroup buttons={["Life", "Two", "Three"]}
                        doSomethingAfterClick={printButtonLabel}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;