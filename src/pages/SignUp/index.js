import React from "react";

import scene from '../../img/scene.svg';
import Form from "./Form";
import Qoutes from "../../components/Qoutes";
import {ReactComponent as Logo} from '../../img/logo.svg';

import Grid from 'react-css-grid'
import './Style.css'

function SingUp() {
    return (
        <>
            <Grid width={320} grid-gab={0}>
                <aside>
                    <Logo className='logo' />
                    <Qoutes className='quot'/>
                    <div className={'right-img'}>
                        <img src={scene} alt="scene" />
                    </div>
                </aside>
                <section>
                    <Form/>
                </section>
            </Grid>
        </>
    );
}

export default SingUp;