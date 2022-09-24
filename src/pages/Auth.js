import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

const Auth = ({ setIn }) => {

    const [sw, setSw] = useState(false)

    return (
        <div>
            {sw ?
                <Login setSw={setSw} setIn={setIn} /> :
                <Signup setSw={setSw} setIn={setIn} />
            }
        </div>
    )
}

export default Auth