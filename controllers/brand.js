import { BrandPhoto, BrandSport } from "../models/Brand.js";

const getAll = async (req, res) => {
  const brands = await BrandSport.findAll();
  res.send(brands);
}

const getOneById = async (req, res) => {
  const { brandId } = req.params;

  const brand = await BrandSport.findOne({
    where: {
      id: brandId
    }
  });

  res.send(brand);
}

const create = async (req, res) => {
  const { name } = req.body;
  const newBrand = await BrandSport.create({ name });

  res.send(newBrand);
}

// const updateBrands = async (req, res) => {
//   try {
//     const photos = await BrandPhoto.findAll();
//     const brands = await BrandSport.findAll();

//     if (photos.length < brands.length) {
//       return res.status(400).json({ error: 'Недостаточно фото для всех брендов' });
//     }

//     for (let i = 0; i < brands.length; i++) {
//       const brand = brands[i];
//       const photo = photos[i];

//       brand.img = photo.imageUrl;
//       await brand.save();
//     }

//     res.json({ message: 'Бренды успешно обновлены' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Внутренняя ошибка сервера' });
//   }
// };

export const BrandController = {
  getAll,
  create,
  getOneById,
  // updateBrands
}