import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() product: any;
  @Input() editing = false;
  clickCount: any = 0;
  timeout;

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  public clickLogoEvent(event): void {
    this.clickCount++;
    this.timeout = setTimeout(() => {
      this.clickCount = 0;
    }, 400);

    if (this.clickCount === 3) {
      this.messageService.add({severity:'warn', life: 2000, summary:'¡Que pesao!', detail:'Deja de hacer click que ahí no es...'});
    } else {
      clearTimeout(this.timeout);
    }
  }
}
