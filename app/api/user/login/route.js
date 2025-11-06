import { NextResponse } from "next/server"
import connectDB from "@/app/utils/database"
import { UserModel } from "@/app/utils/schemaModels"

export async function POST(request){
    const reqBody = await request.json()
    try{
        await connectDB()
        const savedUserData = await UserModel.findOne({email: reqBody.email})
        if (savedUserData) {
            if (reqBody.password === savedUserData.password) {
                return NextResponse.json({message: "ログイン成功"})
            } else {
                return NextResponse.json({message: "ログイン失敗：パスワードが間違っています"})
            }
        } else {
            return NextResponse.json({message: "ログイン失敗：ユーザー登録をしてください"})
        }
    }catch{
        return NextResponse.json({message: "ログイン失敗"})
    }
}