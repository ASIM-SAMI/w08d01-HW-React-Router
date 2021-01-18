import React from 'react'
import { useParams } from "react-router-dom";
import Member from '../components/Member'

export default function MemberPage(props) {
    const member = useParams()
    return (
        <div>
            <h1>{member.member}</h1>
            
        </div>
    )
}
