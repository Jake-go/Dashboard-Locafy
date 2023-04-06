import { Scene } from './scene.model';

export class ProjectTile {
    title: string;
    teamMembers: string[];
    scenes: Scene[];
  
    constructor(title: string, teamMembers: string[], scenes?: Scene[]) {
      this.title = title;
      this.teamMembers = teamMembers;
      this.scenes = scenes || [];
    }
  }