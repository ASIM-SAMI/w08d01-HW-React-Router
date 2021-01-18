import React from 'react'
import GOT from '../gameOfThrones'
import Family from '../components/Family'

export default function Families(props) {

    const families = GOT.map(family =>{
        return (
        <Family family={family} setFamilySelected={props.setFamilySelected}/>
        )
    })

    return (
        <div>
            {families}
        </div>
    )
}
