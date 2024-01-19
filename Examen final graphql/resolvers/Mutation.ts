import { sacarLugar } from "../controler/Telefono.ts";
import { modeloPersonatipo } from "../db/Schema.ts";
import { Modelopersona } from "../db/Schema.ts";
import { Persona } from "../types.ts";
import { GraphQLError } from "npm:graphql@16.8.1";

export const Mutation = {
    addContact: async(_:unknown, args: {name: string, telefono: string}): Promise<modeloPersonatipo> => {

        const name = args.name;
        const telefono = args.telefono;

        const Persona = await new Modelopersona({
            name: name,
            telefono: telefono,
        })

        await Persona.save();
        return Persona

    },

    deleteContact: async(_:unknown, args: {id: string}): Promise<Boolean> => {

        const id = args.id;

        const borrar = await Modelopersona.findByIdAndDelete(id)
        if (!borrar){
            return false;
        }

        return true
    },

    updateContact: async(_:unknown, args: {id:string, name:string, telefono:string}): Promise<modeloPersonatipo> => {

        const Persona = await Modelopersona.findByIdAndUpdate(args.id, {
            name: args.name,
            telefono: args.telefono
        }, { new: true});


        if(!Persona){
            throw new GraphQLError("No se ha encontrado");
        }

        return Persona;
    }
}