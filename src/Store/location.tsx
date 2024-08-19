import { create } from "zustand";

interface LocationStore{
    video:string;
    id:string;
    setId: (id:string)=>void;
    setVideo: (video:string)=>void
}

export const useLocationStore = create<LocationStore>(set=>({
    video:'',
    setVideo:(video:string)=>{set({video:video})},
    id:'',
    setId: (id:string)=>{set({id})}
}))