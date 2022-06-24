import React, { Component } from 'react';
import styles from '../css/style.module.css'
import SubContent from './subContent';
import Advertisement from './advert';

class Main extends Component{

    render(){
        return(
            <div id={styles.main}>
                <SubContent />
                <SubContent />
                <SubContent />
                <Advertisement />
            </div>
        )
    }
}

export default Main