import React from 'react';
import { Trans } from '@lingui/macro';
import mockup from '../images/screen-mockups.svg';

function Main(props) {
    return(
        <main>
            <h1>
                <Trans>
                    Build The Community Your Fans Will Love
                </Trans>
            </h1>
            <p className='blurb'>
                <Trans>
                    Huddle re-imagines the way we build communities. You have a voice,<br/>
                     but so does your audience. Create connections with your users as you <br/>
                     engage in genuine discussions.
                </Trans>
            </p>
            <img src={mockup} className="mockup" alt="screen mockup" />
        </main>
    )
}

export default Main