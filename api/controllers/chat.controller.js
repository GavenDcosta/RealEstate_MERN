import prisma from "../lib/prisma.js"


export const getChats = async (req, res) => {
    try{
       

       res.status(200).json(users)

    }catch(error){
        console.log(error)
        res.status(500).json({message: "Failed to get Chats"})
    }
}

export const getChat = async (req, res) => {
    try{
       

       res.status(200).json(users)

    }catch(error){
        console.log(error)
        res.status(500).json({message: "Failed to get Chat"})
    }
}

export const addChat = async (req, res) => {
    try{
       

       res.status(200).json(users)

    }catch(error){
        console.log(error)
        res.status(500).json({message: "Failed to add Chats"})
    }
}

export const readChat = async (req, res) => {
    try{
       

       res.status(200).json(users)

    }catch(error){
        console.log(error)
        res.status(500).json({message: "Failed to read Chats"})
    }
}
