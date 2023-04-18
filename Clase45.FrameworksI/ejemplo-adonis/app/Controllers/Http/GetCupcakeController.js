const Cupcake = use("App/Models/Cupcake");

class GetCupcakeController {
  async index({ view }) {
    const response = (await Cupcake.all()).toJSON();

    return view.render("cupcake", { cupcakes: response });
  }
}

module.exports = GetCupcakeController;
