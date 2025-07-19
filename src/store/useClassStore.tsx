"use client"
import { classes } from "@/data/classData";
import {create} from "zustand"

interface ClassAction {
    classData: ClassRoom[];
    updateClassData: (id: number, updatedData: Partial<ClassRoom>) => void
}
 
export const useClassStore = create<ClassAction>((set) => (
    {
        classData: classes,
        updateClassData: (id: number, updatedData: Partial<ClassRoom>) => {
            set((state: { classData: any[] }) => ({
                classData: state.classData.map((item) => item.id === id ? {...item, updatedData} : item)
            }))
        }
    }
))
