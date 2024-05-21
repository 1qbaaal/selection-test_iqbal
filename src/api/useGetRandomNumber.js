'use client'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetRandomNumber = () =>{
  const { data } = useQuery({
    queryKey:['number'],
    queryFn: async() =>{
      return await axios.get('https://www.random.org/strings/?num=10&len=32&upperalpha=on&unique=off&format=plain')

    }
  })

  return{
    data
  }
}