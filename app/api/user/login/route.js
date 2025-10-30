import { NextResponse } from "next/server"
import connectDB from "@/app/utils/database"
import { UserModel } from "@/app/utils/schemaModels"

export async function POST(request){
    const reqBody = await request.json()
    try{
        await connectDB()
        const savedUserData = await UserModel.findOne({email: reqBody.email})
        console.log(savedUserData)
        return NextResponse.json({message: "ログイン成功"})
    }catch{
        return NextResponse.json({message: "ログイン失敗"})
    }
}