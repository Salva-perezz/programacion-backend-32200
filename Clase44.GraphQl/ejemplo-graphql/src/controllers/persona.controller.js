import crypto from "crypto";
import Persona from "../classes/persona.class.js";

const personasMap = {};

const createPersona = ({ datos }) => {
  const id = crypto.randomBytes(10).toString("hex");
  const createdPersona = new Persona(id, datos);

  personasMap[id] = createdPersona;

  return createdPersona;
};

const getPersona = ({ id }) => {
  if (!personasMap[id]) throw new Error("Persona no existe");

  return personasMap[id];
};

const updatePersona = ({ id, datos }) => {
  if (!personasMap[id]) throw new Error("Persona no existe");

  const updatedPersona = new Persona(id, datos);

  personasMap[id] = updatedPersona;

  return updatedPersona;
};

const deletePersona = ({ id }) => {
  if (!personasMap[id]) throw new Error("Persona no existe");

  const deletedPersona = personasMap[id];

  delete personasMap[id];

  return deletedPersona;
};

export default {
  createPersona,
  getPersona,
  updatePersona,
  deletePersona,
};
