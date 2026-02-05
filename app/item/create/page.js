"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const CreateItem = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const router = useRouter()

    const handleSubmit = () => {
        try {
            fetch("http://localhost:3000/api/item/create", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    price: price,
                    image: image,
                    description: description,
                    email: "ダミーデータ"
                })
            })
            const jsonData = response.json()
            alert(jsonData.message)
            router.push("/")
            router.refresh()
        } catch {
            alert("アイテム作成失敗")
        }
    }

    return (
        <div>
            <h1>アイテム作成</h1>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="アイテム名" required/>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" name="price" placeholder="価格" required/>
                <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="画像" required/>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="description" placeholder="商品説明" required></textarea>
                <button>作成</button>
                </form>
        </div>
    )
}

export default CreateItem