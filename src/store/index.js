import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image: "https://uploads.lebonbon.fr/source/2017/nuit/juin/2627_5806.jpg",
          title: "AVT Montbrun",
          description: "L'alcoolo",
        },
        {
          id: "m2",
          title: "LCL Joussaume",
          image: "https://pbs.twimg.com/media/EB3h6NEWkAES0Ic.jpg",
          description: "Haaan Yeaaah",
        },
        {
          id: "m3",
          title: "AV1 Thomin",
          image: "https://i.la-croix.com/350x250/smart/2015/03/20/1293464/Journee-mondiale-trisomie-21-pour-sensibiliser-sujet-sensible_0.jpg",
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
