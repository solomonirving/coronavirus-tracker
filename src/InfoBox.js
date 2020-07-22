import React from 'react';
import './InfoBox.css';
import {Card, CardContent, Typography } from "@material-ui/core";

//pass props title, cases etc. by destructuring 
function InfoBox({title, cases, isRed, active, total, ...props}) {
    return (
        <Card 
        onClick={props.onClick} className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"} `}>
            <CardContent>
                {/* title */}
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>
                {/* # of cases */}
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>
                {/* ex: 1.2 million total */}
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
        
            </CardContent>
        </Card>
    )
}

export default InfoBox
