import { Component, OnInit } from '@angular/core';

import { Note } from '../shared/note';
import { NOTES } from '../shared/notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor() { }

  notes : Note[];

  ngOnInit() {
    this.notes = NOTES;
    console.log("Te note", this.notes);
  }

}
