import mongoose from 'mongoose';
const {Schema}=mongoose;

const reservacionSchema= new Schema(
    {
    nombre:{
        type:String,
        trim:true
    },
    propietario: {
        type: String,
        trim: true,
      },
      telefono: {
        type: Number,
        trim: true,
      },
      fecha: {
        type: String,
        trim: true,
      },
      hora: {
        type: String,
        trim: true,
      },
    
      sintomas: {
        type: String,
        trim: true,
      }
})

const miModelo=mongoose.model('Reservaremos',reservacionSchema);

export default miModelo;