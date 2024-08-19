import { create } from "zustand";

interface LocationStore{
    video:string;
    setVideo: (video:string)=>void
}

export const useLocationStore = create<LocationStore>(set=>({
    video:'',
    setVideo:(video:string)=>{set({video:video})}
}))