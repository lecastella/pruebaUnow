import { FormControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, debounceTime, distinctUntilChanged, tap, filter } from 'rxjs/operators';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  inputSearch = new FormControl('');
  @Output() submitted = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.onChange();

  }

  onChange(): void {
    this.inputSearch.valueChanges
    .pipe(
      map((search: string) => search.trim()),
      debounceTime(350),
      distinctUntilChanged(),
      filter((search: string) => search !== ''),
      tap((search: string) => this.submitted.emit(search))
    )
    .subscribe();
  }

}
