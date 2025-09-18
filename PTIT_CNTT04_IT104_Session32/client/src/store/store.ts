import {createStore} from "redux"
import { reducerCounter } from "./reduces/ReducerCount"

export const store = createStore(reducerCounter)