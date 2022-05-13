<template>
    <base-layout pageTitle="All Memories">
            <ion-list>
                <ion-item v-for="memory in memories" 
                :rooter-link="`/memories/${memory.id}`"
                :key="memory.id"
                >
                
                {{memory.title}}
                </ion-item>
                
            </ion-list>
       </base-layout>
</template>

<script>
import { 
    IonList,
    IonItem,
    IonImg 
    } from '@ionic/vue';

export default {
    components: {
        IonList,
        IonItem,
        IonImg
    },
    data() {
        return {
            memories: [
                { id: 'm1', 
                image: "",
                title: "A trip into the mountains", 
                description: "It was a really nice trip",
                },         
                { id: 'm2', 
                title: "Surfing the sea side", 
                description: "Feeling the cool breeze",
                },    
                { id: 'm3', 
                title: "Good eating", 
                description: "Really tasty",
                },    
            ],
        };
    }
}
</script>