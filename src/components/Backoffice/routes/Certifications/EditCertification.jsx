import React from 'react'
import { useParams } from 'react-router-dom'

export default function EditCertification() {
    const {id} = useParams()
  return (
    <div>CreateCertification {id} </div>
  )
}
