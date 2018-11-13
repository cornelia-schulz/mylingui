import React from 'react';
import { Trans } from '@lingui/macro';

function SignUp(props) {
    return(
        <div className='signup'>
            <h2>
                <Trans>
                    Sign Up For Early Access
                </Trans>
            </h2>
            <input type='text' name='email' />
            <button type='submit'><Trans>Register</Trans></button>
        </div>
    )
}

export default SignUp