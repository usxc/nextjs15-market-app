const getSingleItem = async(id) => {
    console.log(id)
    // const response = await fetch("")
}

const ReadSingleItem = async(context) => {
    const params = await context.params
    getSingleItem(params.id)
    return (
        <h1>個別アイテムページ</h1>
    )
}

export default ReadSingleItem