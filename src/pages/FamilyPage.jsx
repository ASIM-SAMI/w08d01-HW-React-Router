import React from 'react'
import { useParams } from "react-router-dom";
import Member from '../components/Member'

export default function FamilyPage(props) {
    const family = useParams()
    

    const members = props.familySelected.people.map(member =>{
        return (
            <Member member={member}/>
        )
    })

    return (
        <div>
            
            {members}
            
        </div>
    )
}
