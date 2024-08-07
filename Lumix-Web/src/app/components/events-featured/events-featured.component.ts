import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-events-featured',
  standalone: true,
  imports: [CarouselModule, CardModule, GalleriaModule],
  templateUrl: './events-featured.component.html',
  styleUrl: './events-featured.component.css'
})
export class EventsFeaturedComponent {
  @Input() events: EventModel[] = [];
  @Input() header: string = "Events";
  
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];
}
