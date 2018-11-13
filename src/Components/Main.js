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
            <p>
                <Trans>
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussions.
                </Trans>
            </p>
            <img src={mockup} className="Mockup" alt="screen mockup" />
        </main>
    )
}

export default Main