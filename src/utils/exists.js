const checkExists = async (Model, query) => {
    try {
        const found = await Model.exists(query);
        return !!found;
    } catch (error) {
        console.error("Error verificando existencia:", error);
        return false;
    }
};


module.exports ={
    checkExists
}