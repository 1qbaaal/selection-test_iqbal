'use client'
import { useGetRandomNumber } from "~/api/useGetRandomNumber"

export const useGetRandomNumberQuery = () => {
  const { data } = useGetRandomNumber()

  return{
    data
  }
}