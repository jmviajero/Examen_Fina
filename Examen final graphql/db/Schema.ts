import mongoose from "npm:mongoose@8.0.1"
import {Persona} from "../types.ts"

const Schema = mongoose.Schema;

const schemaexamen = new Schema({
    name: {types: String},
    telefono: {types: String}
})

export type modeloPersonatipo = mongoose.Document & Omit<Persona, "id" | "hora" | "pais">

export const Modelopersona = mongoose.model<modeloPersonatipo>("Persona", schemaexamen)