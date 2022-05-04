<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>All Memories</ion-title>
            </ion-toolbar>
        </ion-header>  
        <ion-content>
            <ion-list>
                <ion-item>Nainoa</ion-item>
                <ion-item>Naina</ion-item>
                <ion-item>Narii</ion-item>
            </ion-list>
        </ion-content>      
    </ion-page>
</template>

<script>
import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonList,
    IonItem 
    } from '@ionic/vue';

export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonList,
        IonItem 
    }
}
</script>