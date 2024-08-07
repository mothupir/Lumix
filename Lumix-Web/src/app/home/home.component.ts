import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { EventsFeaturedComponent } from "../components/events-featured/events-featured.component";
import { EventModel, EventStatus } from '../models/event.model';
import { CarouselModule } from 'primeng/carousel';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { CategoryModel } from '../models/category.model';
import { EventComponent } from "../components/event/event.component";
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, CardModule, EventsFeaturedComponent, EventComponent, CarouselModule, AutoCompleteModule, EventComponent, ScrollPanelModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor() {}

  categories: CategoryModel [] = [
    { id: 0, name: 'Top', active: true },
    { id: 1, name: 'Just In', active: false },
    { id: 2, name: 'Coming', active: false },
    { id: 3, name: 'Sport', active: false },
    { id: 4, name: 'Water', active: false },
    { id: 5, name: 'Marine', active: false },
    { id: 6, name: 'Life Style', active: false },
    { id: 7, name: 'Joburg', active: false },
    { id: 8, name: 'Music', active: false },
    { id: 9, name: 'Theatre', active: false },
    { id: 10, name: 'Art', active: false },
    { id: 11, name: 'Diving', active: false },
  ];

  suggestions: any[] = [];
  suggested: any;

  topEvents: EventModel[] = [];
  featuredEvents: EventModel[] = [];
  filteredEvents: EventModel[] = [];
    
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 12,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 6,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 3,
          numScroll: 1
      }
    ];

    this.topEvents = [
      {
        uuid: '1',
        name: 'Event 1',
        description: 'Description 1',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '2',
        name: 'Event 2',
        description: 'Description 2',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '1',
        name: 'Sport 1',
        description: 'Description 1',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '2',
        name: 'Sport 2',
        description: 'Description 2',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '1',
        name: 'Sport 1',
        description: 'Description 1',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '2',
        name: 'Sport 2',
        description: 'Description 2',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '1',
        name: 'Sport 1',
        description: 'Description 1',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '2',
        name: 'Sport 2',
        description: 'Description 2',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '1',
        name: 'Sport 1',
        description: 'Description 1',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '2',
        name: 'Sport 2',
        description: 'Description 2',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '1',
        name: 'Sport 1',
        description: 'Description 1',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '2',
        name: 'Sport 2',
        description: 'Description 2',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '1',
        name: 'Sport 1',
        description: 'Description 1',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '2',
        name: 'Sport 2',
        description: 'Description 2',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '1',
        name: 'Sport 1',
        description: 'Description 1',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '2',
        name: 'Sport 2',
        description: 'Description 2',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '1',
        name: 'Sport 1',
        description: 'Description 1',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
      {
        uuid: '2',
        name: 'Sport 2',
        description: 'Description 2',
        theme: 'Black and White',
        date: new Date('10-10-2024'),
        location: 'Pretoria, South Africa',
        status: EventStatus.ACTIVE
      },
    ];

    this.featuredEvents.push(...this.topEvents);

    this.filteredEvents.push(...this.topEvents);
  }

  filter(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];

    this.topEvents.forEach(e => {
      if (e.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        filtered.push(e);
      }
    });
    this.suggestions = filtered;
  }

  search() {
    const index = this.suggestions.indexOf(this.suggested);

    if (index != -1) {
      console.log(`Filtered Value: ${this.suggested.name}`);
    } else {
      console.log(`Search Value: ${this.suggested}`);
    }
  }

  categoryChanged(id: number) {
    this.categories.forEach(c => c.active = false);
    const category = this.categories.find(c => c.id == id);
    
    if (category) {
      category.active = true;
    }
  }
}
