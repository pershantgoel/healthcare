const detailsCrud= {
    detOperations:[],
    add()
    {

    },
    search(id,pwd)
    {
    console.log("search called");
    return this.detOperations.filter(y=>y.id==id && y.password==pwd );     
    },
    delete()
    {

    }
}