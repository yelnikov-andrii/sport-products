import { VariantSport } from "../models/Variant.js";

const getAll = async (req, res) => {
  const { productId } = req.params;
  const variants = await VariantSport.findAll({where: {
    ProductSportId: productId,
  }});
  res.send(variants);
}

const create = async (req, res) => {
  const { name_ukr, name_en, quantity, productId } = req.body;

  const newVariant = { name_ukr, name_en, quantity, ProductSportId: productId }

  await VariantSport.create(newVariant);
  res.send(newVariant);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const variant = await VariantSport.findByPk(id);

    if (!variant) {
      return res.status(404).send("Вариант товара не найден");
    }

    variant.quantity = quantity;

    await variant.save();

    res.send(variant);
  } catch (error) {
    console.error("Ошибка при обновлении варианта товара:", error);
    res.status(500).send("Ошибка сервера");
  }
};

export const VariantController = {
  getAll,
  create,
  update
}