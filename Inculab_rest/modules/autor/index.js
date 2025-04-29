//initJSfoto
import { deleteFiles } from "../storageGoogle/index.js";
//endJSfoto
import express from 'express';
import { auth_required, getAll, getDocument } from '../../utils/index.js';
import { convertToOr, getQueryDate } from '../../utils/database.js';
import User from '../user/model.js';
import Autor from './model.js';
//imports
const routes = express.Router();

async function searchAutor(searchParams) {
  let query = {};
  if (searchParams?.all) searchParams = {
    all: searchParams?.all,
    //initJSnombre
nombre: searchParams?.all,
//endJSnombre
//initJSfoto
foto: searchParams?.all,
//endJSfoto
//initJSbiografia
biografia: searchParams?.all,
//endJSbiografia
//initJSprofesion
profesion: searchParams?.all,
//endJSprofesion
//fieldsSearch
    createdAt: searchParams?.all,
    updatedAt: searchParams?.all,
  }
  //initJSnombre
if (searchParams?.nombre) query.nombre = { $regex: searchParams.nombre, $options: 'i' };

//endJSnombre

//initJSbiografia
if (searchParams?.biografia) query.biografia = { $regex: searchParams.biografia, $options: 'i' };

//endJSbiografia
//initJSprofesion
if (searchParams?.profesion) query.profesion = { $regex: searchParams.profesion, $options: 'i' };

//endJSprofesion
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
  if (!auth_required(req, res, ['read_autor'], false)) return;
  if (req?.body?.query?.search) req.body.query.find = {
    ...req.body.query.find,
    ...await searchAutor(req?.body?.query?.search)
  }
  const query = await getAll(Autor, req, res);
  if (query) return res.status(200).json(query);
});

routes.post('/read', async function (req, res) {
  if (!auth_required(req, res, ['read_autor'], false)) return;
  const query = await getDocument(Autor, req, res);
  if (query) delete query._doc.password;
  if (query) return res.status(200).json(query);
});

//POST
routes.post('/create', async function (req, res) {
  if (!auth_required(req, res, ['create_autor'], false)) return;
  try {
    var { autor } = req.body;
    //validadores
    autor.last_user = req.currentUser.id;
    //extrasCreate
    var query = await new Autor(autor).save();
    return res.status(200).json(query);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Datos Inválidos", error });
  }
});

//PUT
routes.put('/update/:id', async function (req, res) {
  if (!auth_required(req, res, ['update_autor'], false)) return;
  const { id } = req.params;
  try {
    var { autor } = req.body;
    autor.last_user = req.currentUser.id;
    //extrasUpdate
    const document = await Autor.findByIdAndUpdate(id, {
      $set: autor
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
  if (!auth_required(req, res, ['delete_autor'], false)) return;
  const { id } = req.params;
  try {
    const autor = await Autor.findById(id);
    
//initJSfoto
await deleteFiles(autor?.foto);
//endJSfoto


//extrasDelete
    await Autor.deleteOne({ _id: id });
    return res.status(200).json({ message: "Autor Delete" })
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Datos Inválidos", error });
  }
});

export default routes;