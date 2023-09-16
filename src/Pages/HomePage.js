import React from 'react';

import ButtonGroup from '../Components/ButtonGroup';

const HomePage = () =>
{
    const printButtonLabel = (event) =>
    {
        alert(event.target.name);
        //window.location.href = "/" +event.target.name;
    }

    return(
        <div>
            title
            <div>
                <p>Select an insurance company you want to learn about</p>
                <div className='buttons'>
                    <ButtonGroup buttons={["One", "Two", "Three"]}
                        doSomethingAfterClick={printButtonLabel}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;