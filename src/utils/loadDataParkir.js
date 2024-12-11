import { saveToLocalStorage } from "./localStorageUtils"
import DataParkir from '../data/dataParkir.json'

export const loadDataParkir = () => {
    saveToLocalStorage('dataParkir', DataParkir);
}