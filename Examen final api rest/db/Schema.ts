import mongoose from "npm:mongoose@8.0.1"
import { tipo1 } from "../types.ts"

const Schema = mongoose.Schema;

const Schema1 = new Schema({

})

export type Schema1type= mongoose.Document & Omit<tipo1, "id">

export const Modelo1 = mongoose.model<Schema1type>(" ", Schema1)