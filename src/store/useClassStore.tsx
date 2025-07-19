"use client"
import { classes } from "@/data/classData";
import {create} from "zustand"

interface ClassAction {
    classData: DataKelas[];
    updateClassData: (id: number, updatedData: Partial<DataKelas>) => void
}
 
export const useClassStore = create<ClassAction>((set) => (
    {
        classData: classes,
        updateClassData: (id: number, updatedData: Partial<DataKelas>) => {
            set((state) => ({
                classData: state.classData.map((item) => item.id === id ? {...item, updatedData} : item)
            }))
        }
    }
))
