import React from "react";

import Grid from 'react-css-grid'

import scene from '../../img/scene.svg';
import Form from "./Form";
import Logo from "../../components/Logo";
import Qoutes from "../../components/Qoutes";

import './Style.css'

function SingUp() {
    return (
        <>
            <Grid width={320}>
            <aside>
                <Logo className='logo' />
                <br/>
                <Qoutes className='quot'/>
                <img src={scene} alt="scene" />
            </aside>
            <section>
                <Form/>
            </section>
            </Grid>
        </>
    );
}

export default SingUp;