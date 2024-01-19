import { GraphQLError } from "graphql";
import { Modelopersona } from "../db/Schema.ts";
import {Persona} from "../types.ts"
import { sacarLugar } from "../controler/Telefono.ts";
import { sacarhora } from "../controler/hora.ts";
import { graphql } from "graphql";

export const Query = {

    getContact: async(_:unknown, args: {id:string}): Promise<Persona> => {

        const Persona = await Modelopersona.findById(args.id);

        if (!Persona) {
            throw new GraphQLError("No encontrado");
        }

        const telefono = Persona.telefono;
        const pais = await sacarLugar(telefono);
        const hora = await sacarhora(pais)

        return {
            id: Persona.id,
            name: Persona.name,
            telefono: Persona.telefono,
            pais: pais,
            hora: hora
            
        }
    },

    /*getContacts: async(_:unknown): Promise<Persona[]> => {

        const Personas = await Modelopersona.find();

        if(!Personas){
            throw new GraphQLError("No hay ninguna persona en base de datos")
        }

        
    }*/
    


}