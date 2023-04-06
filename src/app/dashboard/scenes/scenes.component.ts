import { Component, OnInit, Input } from '@angular/core';
import { Scene } from 'src/app/models/scene.model';
@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent {
  @Input() scenes: Scene[] = [];

  constructor() {}

  ngOnInit(): void {}

}
