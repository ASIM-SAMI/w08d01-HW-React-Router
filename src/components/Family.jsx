import React from 'react'
import {Link} from 'react-router-dom'

export default function Family(props) {
    return (
        <div>
            <Link to={`/families/${props.family.name}`} onClick={()=> props.setFamilySelected(props.family)}>{props.family.name}</Link>
        </div>
    )
}
