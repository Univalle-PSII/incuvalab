import express from 'express';
import { auth_required, getAll, getDocument } from '../../utils/index.js';
import { convertToOr, getQueryDate } from '../../utils/database.js';
import User from '../user/model.js';
import Categoria from './model.js';
//imports
const routes = express.Router();

async function searchCategoria(searchParams) {
  let query = {};
  if (searchParams?.all) searchParams = {
    all: searchParams?.all,
    //initJSnombre_categoria
nombre_categoria: searchParams?.all,
//endJSnombre_categoria
//initJSdescripcion
descripcion: searchParams?.all,
//endJSdescripcion
//fieldsSearch
    createdAt: searchParams?.all,
    updatedAt: searchParams?.all,
  }
  //initJSnombre_categoria
if (searchParams?.nombre_categoria) query.nombre_categoria = { $regex: searchParams.nombre_categoria, $options: 'i' };

//endJSnombre_categoria
//initJSdescripcion
if (searchParams?.descripcion) query.descripcion = { $regex: searchParams.descripcion, $options: 'i' };

//endJSdescripcion
//ifSearch
  if (searchParams?.last_user) {
    let id = await User.findOne({ name: { $regex: searchParams.last_user, $options: 'i' } }).exec()._id;
    if (id) query.last_user = { $in: id };
  }
  if (searchParams?.createdAt) {
    const date = getQueryDate(searchParams.createdAt);
    if (date) query.createdAt = date;
  }
  if (searchParams?.updatedAt) {
    const date = getQueryDate(searchParams.updatedAt);
    if (date) query.updatedAt = date;
  }
  if (searchParams?.all) query = convertToOr(query);
  return query;
}

//GET
routes.post('/list', async function (req, res) {
  if (!auth_required(req, res, ['read_categoria'], false)) return;
  if (req?.body?.query?.search) req.body.query.find = {
    ...req.body.query.find,
    ...await searchCategoria(req?.body?.query?.search)
  }
  const query = await getAll(Categoria, req, res);
  if (query) return res.status(200).json(query);
});

routes.post('/read', async function (req, res) {
  if (!auth_required(req, res, ['read_categoria'], false)) return;
  const query = await getDocument(Categoria, req, res);
  if (query) delete query._doc.password;
  if (query) return res.status(200).json(query);
});

//POST
routes.post('/create', async function (req, res) {
  if (!auth_required(req, res, ['create_categoria'], false)) return;
  try {
    var { categoria } = req.body;
    //validadores
    categoria.last_user = req.currentUser.id;
    //extrasCreate
    var query = await new Categoria(categoria).save();
    return res.status(200).json(query);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Datos Inválidos", error });
  }
});

//PUT
routes.put('/update/:id', async function (req, res) {
  if (!auth_required(req, res, ['update_categoria'], false)) return;
  const { id } = req.params;
  try {
    var { categoria } = req.body;
    categoria.last_user = req.currentUser.id;
    //extrasUpdate
    const document = await Categoria.findByIdAndUpdate(id, {
      $set: categoria
    }, { new: true });
    if (!document) {
      return res.status(404).json({ message: "Documento no encontrado" });
    }
    return res.status(200).json(document);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Datos Inválidos", error });
  }
});

//DELETE
routes.delete('/delete/:id', async function (req, res) {
  if (!auth_required(req, res, ['delete_categoria'], false)) return;
  const { id } = req.params;
  try {
    const categoria = await Categoria.findById(id);
    

//extrasDelete
    await Categoria.deleteOne({ _id: id });
    return res.status(200).json({ message: "Categoria Delete" })
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Datos Inválidos", error });
  }
});

export default routes;