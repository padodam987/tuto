import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image: "../../public/assets/img/Auguste.png",
          title: "AVT Montbrun",
          description: "L'alcoolo",
        },
        {
          id: "m2",
          title: "LCL Joussaume",
          image: "../../public/images/Théo.png",
          description: "Haaan Yeaaah",
        },
        {
          id: "m3",
          title: "SM Thomin",
          image: "../../public/images/Quentin.png",
          description: "Le sicap mental",
        },
      ],
    };
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
