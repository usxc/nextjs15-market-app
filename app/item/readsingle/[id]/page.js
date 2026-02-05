const getSingleItem = async(id) => {
    const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`)
    const jsonData = await response.json()
    console.log(jsonData.singleItem)
}

const ReadSingleItem = async(context) => {
    const params = await context.params
    getSingleItem(params.id)
    return (
        <h1>個別アイテムページ</h1>
    )
}

export default ReadSingleItem