import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {MessageService} from 'primeng/api';
import {Iarticle} from '../../model/article-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-manage',
  templateUrl: './form-manage.component.html',
  styleUrls: ['./form-manage.component.scss']
})

export class FormManageComponent implements OnInit {

  @Input() product: Iarticle = null;
  public articleRegisteredForm: FormGroup = null;
  disabled = true;

  public constructor(private productService: ProductsService, private messageService: MessageService, private formBuilder: FormBuilder) {
    this.articleRegisteredForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      price: ['', [Validators.required, Validators.pattern('^([0-9][0-9.,]{0,7}|10000)$')]],
      image: ['', [Validators.required, Validators.maxLength(200)]],
      stars: ['', [Validators.required, Validators.pattern('^[0-5][1-9.]{0,2}$')]]
    });
  }
  public onNew(): void {
    if (this.articleRegisteredForm.valid) {
      this.productService.createProduct(this.product).subscribe((res: any) => {
        this.messageService.add({severity: 'success', summary: '¡Genial!', detail: 'El artículo se ha creado'});
        this.product = res;
      });
    }
  }
  public onSubmit(): void {
    if (this.articleRegisteredForm.valid) {
      if (this.product.id === '') {
        this.productService.createProduct(this.product).subscribe((res: any) => {
          this.messageService.add({severity: 'success', summary: '¡Genial!', detail: 'El artículo se ha creado'});
          this.product = res;
        });
      } else {
        this.productService.updateProduct(this.product).subscribe((res: any) => {
          this.messageService.add({severity: 'success', summary: '¡Genial!', detail: 'El artículo ha sido actualizado'});
        });
      }
    } else {
      this.messageService.add({severity: 'error', summary: '!ooOps¡ Algo ha ido mal', detail: 'Es obligatorio completar todos los campos'});
    }
  }

  public onDelete(): void {
    if (this.product.id !== '') {
      this.productService.deleteProduct(this.product).subscribe((res: any) => {
        this.messageService.add({severity: 'success', summary: '¡Genial!', detail: 'El artículo ha sido borrado'});
        this.product.id = '';
        this.product.name = '';
        this.product.description = '';
        this.product.stars = '';
        this.product.image = '';
        this.product.price = '';
      });
    }
  }
  ngOnInit(): void {
  }
}
