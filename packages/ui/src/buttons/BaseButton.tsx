'use client'
import { Button } from "@mui/material"

type Props = {
  label?: string
}

export const BaseButton = ({ label = "Click me" }: Props) => {
  return <Button variant="contained">{label}</Button>
}

