import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchBarEmitter = new EventEmitter();
  searchBarForm;

  constructor(private formBuilder: FormBuilder) {
    this.searchBarForm = this.formBuilder.group(
      {
        search: ['']
      }
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  search(term, isEmpty = false): void {
    (isEmpty) ? this.searchBarEmitter.emit('') : this.searchBarEmitter.emit(term.value);
    }
}
