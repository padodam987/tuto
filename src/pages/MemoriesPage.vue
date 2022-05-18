<template>
  <base-layout
    pageTitle="Centre de Développement des Applications de la Défense de Bordeaux (CDAD-BDX)"
  >
    <ion-list>
      <ion-item
        v-for="memory in memories"
        :router-link="`/memories/${memory.id}`"
        :key="memory.id"
      >
        <ion-thumbnail slot="start">
          <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>

        <ion-label>
          {{ memory.title }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail } from "@ionic/vue";

export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
  },
  data() {
    return {
      memories: [
        {
          id: "m1",
          title: "SGT Montbrun",
          image: "../../public/images/Auguste.jpg",
          description: "L'alcoolo",
        },
        {
          id: "m2",
          title: "SGT Joussaume",
          image: "../../public/images/Théo.jpg",
          description: "Gros bg",
        },
        {
          id: "m3",
          title: "SGT Thomin",
          image: "../../public/images/Quentin.jpg",
          description: "Le sicap",
        },
      ],
    };
  },
};
</script>
