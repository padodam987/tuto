<template>
    <base-layout pageTitle="All Memories">
            <ion-list>
                <ion-item router-link="/memories/1">A trip into the mountais</ion-item>
                <ion-item>Surfing the sea side</ion-item>
                <ion-item>Good eating</ion-item>
            </ion-list>
       </base-layout>
</template>

<script>
import { 
    IonList,
    IonItem,
    BaseLayout 
    } from '@ionic/vue';

export default {
    components: {
        IonList,
        IonItem,
        BaseLayout 
    }
}
</script>