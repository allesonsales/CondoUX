import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  OnDestroy,
  Output,
} from '@angular/core';
import { ModalService } from '../../../../../modal.services';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SucessoComponent } from './sucesso/sucesso.component';
import { ErroComponent } from './erro/erro.component';
import { ErroInternoComponent } from './erro-interno/erro-interno.component';
import { error } from 'console';

@Component({
  selector: 'app-modal',
  imports: [
    CommonModule,
    FormsModule,
    SucessoComponent,
    ErroComponent,
    ErroInternoComponent,
  ],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  private modalSubscription!: Subscription;
  sucessoAberto: boolean = false;
  erroAberto: boolean = false;
  erroInternoAberto: boolean = false;
  mensagemErro: string = '';
  loading: boolean = false;

  constructor(private modalService: ModalService, private http: HttpClient) {}

  ngOnInit() {
    this.modalSubscription = this.modalService.isOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  ngOnDestroy() {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }

  abrirModalSucesso() {
    this.fecharModal();
    this.sucessoAberto = true;
  }

  fecharModalSucesso() {
    this.sucessoAberto = false;
  }

  abrirModalErro() {
    this.erroAberto = true;
  }

  fecharModalErro() {
    this.erroAberto = false;
  }

  abrirModalErroInterno() {
    this.erroInternoAberto = true;
  }

  fecharModalErroInterno() {
    this.erroInternoAberto = false;
    console.log('clicou');
  }

  fecharModal() {
    this.modalService.closeModal();
    document.body.classList.remove('no-scroll');
  }

  mascaraCnpj() {
    let valor = this.form.cnpj.replace(/\D/g, '');

    if (valor.length > 14) {
      valor = valor.substring(0, 14);
    }

    let valorFormatado = '';

    for (let i = 0; i < valor.length; i++) {
      valorFormatado += valor[i];
      if (i === 1 || i === 4) {
        valorFormatado += '.';
      } else if (i === 7) {
        valorFormatado += '/';
      } else if (i === 11) {
        valorFormatado += '-';
      }
    }

    this.form.cnpj = valorFormatado;
  }

  form = {
    nome: '',
    cnpj: '',
    email: '',
    telefone: '',
  };

  mascararTel(): void {
    let valor = this.form.telefone.replace(/\D/g, '');

    if (valor.length > 16) {
      valor = valor.substring(0, 16);
    }

    let telFormatado = '';

    for (let i = 0; i < valor.length; i++) {
      if (i === 0) {
        telFormatado += '(' + valor[i];
      } else if (i === 1) {
        telFormatado += valor[i];
      } else if (i === 2) {
        telFormatado += ') ' + valor[i];
      } else if (i > 3 && i < 7) {
        telFormatado += valor[i];
      } else if (i === 7) {
        telFormatado += '-' + valor[i];
      } else {
        telFormatado += valor[i];
      }
    }

    this.form.telefone = telFormatado;
  }

  mapearErro(status: number) {
    switch (status) {
      case 0:
        return 'Não foi possível se conectar ao servidor. Verifique sua conexão com a internet.';
      case 400:
        return 'Dados inválidos. Verifique os campos e tente novamente.';
      case 401:
        return 'Você não tem autorização para executar essa ação.';
      case 403:
        return 'Acesso negado.';
      case 404:
        return 'Recurso não encontrado.';
      case 500:
        return 'Erro interno no servidor. Tente novamente mais tarde.';
      default:
        return 'Erro inesperado. Tente novamente.';
    }
  }

  async enviarFormulario() {
    if (
      !this.form.nome ||
      !this.form.cnpj ||
      !this.form.email ||
      !this.form.telefone
    ) {
      this.abrirModalErro();
      return;
    }
    this.loading = true;

    try {
      await this.http
        .post('http://192.168.15.10:32780/api/contato-site', this.form)
        .toPromise();
      this.abrirModalSucesso();
    } catch (erro: any) {
      this.mensagemErro = this.mapearErro(erro.status);
      console.error('Erro:', erro);
      this.abrirModalErroInterno();
    } finally {
      this.loading = false;
    }
  }
}
