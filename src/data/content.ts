// import { Topic } from "../models"

export const fetchData = async()=>{
  fetch('./data.json').then((respons)=>{
    console.log(respons)
  })
}