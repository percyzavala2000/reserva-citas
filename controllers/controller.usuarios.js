import miModelo from "../models/ReservaCita.js";

const usuariosGET = async (req, res) => {
  //const q = req.query;
  //console.log(q);
  try {
    const resultado = await miModelo.find({});
    res.json(resultado);
  } catch (error) {
    console.log(error);
  }
};

const usuariosPOST = async (req, res, next) => {
  const modelos = new miModelo(req.body);
  try {
    await modelos.save();
    res.status(200).json({ mensaje: "Se guardo Correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

const usuariosPUT = async (req, res) => {
  //console.log(req.params.id);
  const id = req.params.id;
  try {
    const resultado = await miModelo.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.json({ mensaje: "se modifico correctamente", resultado });
  } catch (error) {
    console.log(error);
  }
};

const usuariosDelete = async (req, res) => {
  const id = req.params.id;
  try {
    const resultado = await miModelo.findByIdAndDelete({_id:id});

    res.json({ mensaje: "Se elimino la cita",resultado });
  } catch (error) {
    console.log(error);
  }
};
const usuariosPATCH = (req, res) => {
  res.json({ id: 1, nombre: "percy", estamos: "PATCH" });
};

export {
  usuariosGET,
  usuariosPOST,
  usuariosPUT,
  usuariosDelete,
  usuariosPATCH,
};
