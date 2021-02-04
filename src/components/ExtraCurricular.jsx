import React from 'react';
import styles from './ExtraCurricular.module.css'

export default function ExtraCurricular() {
    return (
        <div className={styles.extraCurricular} id="extraCurricular">
            <h1 className={styles.heading}>Extra Curricular</h1>
            <iframe style={{height:"80px", width:"300px", border:"none"}} frameborder="0" src="https://counts.live/embeds/youtube-subscriber-count/UCqCfUJlx68rrxTZ4q95SNJQ/small" />
        </div>
    )
}
