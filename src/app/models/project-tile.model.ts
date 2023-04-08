import { Scene } from './scene.model';
import { SceneList } from './sceneList.model';

export class ProjectTile {
    id: number;
    title: string;
    teamMembers: string[];
    scenes: Scene[];
  
    constructor(id: number, title: string, teamMembers: string[], scenes?: Scene[]) {
      this.id = id;
      this.title = title;
      this.teamMembers = teamMembers;
      this.scenes = scenes || [];
    }
  }