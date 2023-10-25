import { BrandSport } from "../models/Brand.js";

const getAll = async (req, res) => {
  const brands = await BrandSport.findAll();
  res.send(brands);
}

const getOneById = async(req, res) => {
  const { brandId } = req.params;

  const brand = await BrandSport.findOne({where: {
    id: brandId
  }});

  res.send(brand);
}

const create = async (req, res) => {
  const { name } = req.body;
    const newBrand = await BrandSport.create({ name });

  res.send(newBrand);
}

export const BrandController = {
  getAll,
  create,
  getOneById
}