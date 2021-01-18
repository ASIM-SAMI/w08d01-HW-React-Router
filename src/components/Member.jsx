import React from 'react'
import {Link} from 'react-router-dom'

export default function Member(props) {
    return (
        <div>
             <Link to={`/members/${props.member.name}`}>{props.member.name}</Link>
        </div>
    )
}
