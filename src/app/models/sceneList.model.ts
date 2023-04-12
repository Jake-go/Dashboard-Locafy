import { Scene } from './scene.model';

export class SceneList {

    public sceneList: Scene[];
    public content: {
        sceneList: Scene[];
    };

    constructor(sceneList: Scene[]) {
        this.sceneList = sceneList;
        this.content = {
            sceneList: sceneList
        };
    }
}