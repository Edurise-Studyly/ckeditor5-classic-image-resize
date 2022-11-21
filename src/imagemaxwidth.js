import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ImageMaxWidthEditing from "./imagemaxwidth/imagemaxwidthediting";
import ImageMaxWidthUi from "./imagemaxwidth/imagemaxwidthui";
//TODO: merge STU-1225 into testing from this repo and remove this todo
export default class ImageMaxWidth extends Plugin {

    static get requires() {
        return [ ImageMaxWidthEditing, ImageMaxWidthUi ];
    }

    /**
     * @inheritDoc
     */
    static get pluginName() {
        return 'ImageMaxWidth';
    }
}
