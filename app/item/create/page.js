"use client"
import { useState } from "react"

const CreateItem = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div>
            <h1>アイテム作成</h1>
            <form>
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