import {FETCH_COSTUMERS} from '../constants/fetchCostumers'
import { createAction } from 'redux-actions'

const customerData = [
  {
    id: "30000001",
    dni: "30000001",
    name: "Pablo Alborán",
    age: 30,
    avatar: "m",
  },
  {
    id: "500000",
    dni: "500000",
    name: "José Enrique",
    age: 40,
    avatar: "m",
  },
  {
    dni: "6868686",
    name: "Gabriel Pacheco",
    age: 10,
    avatar: "m",
    id: "XSCfaW5",
  },
  {
    name: "Doris Alonso",
    dni: "99999",
    age: 11,
    avatar: "w",
    id: "kxmVQVd",
  },
  {
    id: "30000001",
    dni: "30000001",
    name: "Eliana Guerrero",
    age: 30,
    avatar: "w",
  },
  {
    id: "500000",
    dni: "500000",
    name: "Arianne Camila",
    age: 40,
    avatar: "w",
  },
  {
    dni: "6868686",
    name: "Jennifer Marques",
    age: 10,
    avatar: "w",
    id: "XSCfaW5",
  },
  {
    name: "Jose Daniel Tapiquén",
    dni: "99999",
    age: 11,
    avatar: "m",
    id: "kxmVQVd",
  },
  {
    id: "30000001",
    dni: "30000001",
    name: "Leonella Berroterán",
    age: 30,
    avatar: "w",
  },
  {
    id: "500000",
    dni: "500000",
    name: "Maria Fernanda Gonzalez",
    age: 40,
    avatar: "w",
  },
  {
    dni: "6868686",
    name: "José Tirado",
    age: 10,
    avatar: "m",
    id: "XSCfaW5",
  },
  {
    name: "Fibra TV",
    dni: "99999",
    age: 11,
    avatar: "e",
    id: "kxmVQVd",
  },
  {
    id: "30000001",
    dni: "30000001",
    name: "María Ortiz",
    age: 30,
    avatar: "w",
  },
  {
    id: "500000",
    dni: "500000",
    name: "Alejandro Hadyar",
    age: 40,
    avatar: "m",
  },
  {
    dni: "6868686",
    name: "César Rivas",
    age: 10,
    avatar: "m",
    id: "XSCfaW5",
  },
  {
    name: "Manuel Carrero",
    dni: "99999",
    age: 11,
    avatar: "m",
    id: "kxmVQVd",
  },
];

export const _fetchCostumers = createAction(FETCH_COSTUMERS, () => customerData);