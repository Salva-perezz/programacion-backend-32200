class BaseRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async getById(id) {
    return await this.dao.findById(id);
  }

  async create(newEntoty) {
    return await this.dao.create(newEntoty);
  }

  async update(id, updateData) {
    return await this.dao.update({ _id: id }, updateData);
  }

  async delete(id) {
    return await this.dao.deleteOne({ _id: id });
  }
}

class ProductRepository extends BaseRepository {
  constructor(productDao) {
    super(productDao);
  }

  async buyProduct(userId, productId) {
    // Logica para comprar ese producto
  }
}

class UserRepository extends BaseRepository {
  constructor(userDao) {
    super(userDao);
  }

  async changePassword(userId, productId) {
    // Logica para cambiar contraseña
  }
}
