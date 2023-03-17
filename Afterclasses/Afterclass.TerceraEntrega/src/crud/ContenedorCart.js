class ContenedorCart {
    constructor(model) {
        this.model = model;
    }

    async getAll() {
        try {
            const response = await this.model.find();

            return response;
        } catch (err) {
            throw new Error("Error getting resources");
        }
    }

    async createCart(user, products) {
        try {
            /* const { timestamp, products } = req.body; */
            await this.model.create({ user, products });
        } catch (err) {
            throw new Error();
        }
    };

}

export default ContenedorCart;