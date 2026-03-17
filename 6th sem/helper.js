import { realpathSync } from "fs"
import fs from "fs/promises"

export const writeData = (FILE,userData)=>{
  fs.appendFile(FILE,userData,"utf-8",(err)=>{
    if(err){
      return {message:"Error while adding the data"}
    }
    return {message:"User Registered SUccessfully"}
  })
}