import React from "react";

import Grid from 'react-css-grid'

import vec from '../../img/vec.svg';
import Form from "./Form";
import Logo from "../../components/Logo";
import Qoutes from "../../components/Qoutes";

import './Style.css';

function SingIn() {
    return (
        <>
            <Grid width={320}>
                <aside className={'leftSide'}>
                    <Logo className='logo' />
                    <br/>
                    <Qoutes className='quot'/>
                    <img src={vec} alt="vec" className={'vec'}/>

                </aside>
                <section>
                    <Form/>
                </section>
            </Grid>
        </>
    );
}

export default SingIn;