import { Scene } from './scene.model';

export class SceneList {

    private id: number;
    public sceneList: Scene[];

    constructor(sceneList: Scene[]) {
        this.id = 0;
        this.sceneList = sceneList;
    }
}