import Orphanage from '../models/Orphanage';
import imagesView from "../views/images_view";

export default {
    render(orphanage: Orphanage){
        const { images, ...otherAttributes } = orphanage;
        return {
            ...otherAttributes,
            images: imagesView.renderMany(images)

        };
    },

    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage));
    }
};