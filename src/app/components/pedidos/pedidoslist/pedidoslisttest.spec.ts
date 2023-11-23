// pedidoslist.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoslistComponent } from './pedidoslist.component';
import { render, screen, fireEvent, waitFor } from '@testing-library/angular';
import { HttpClientModule } from '@angular/common/http';
import { PedidosService } from 'src/app/services/pedidos.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';

describe('PedidoslistComponent', () => {
  let fixture: ComponentFixture<PedidoslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidoslistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoslistComponent);
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PedidoslistComponent],
      providers:[LoginserviceService],
    }).compileComponents();
  
    fixture = TestBed.createComponent(PedidoslistComponent);
  });

  it('deve renderizar a tabela corretamente', async () => {
    const { getByText, getByRole } = await render(PedidoslistComponent);

    expect(getByText('Listagem de pedidos!')).toBeTruthy();
    expect(getByRole('button', { name: /Adicionar/i })).toBeTruthy();
  });

  it('deve abrir o modal ao clicar em "Adicionar"', async () => {
    const { getByRole, getByText } = await render(PedidoslistComponent);

    fireEvent.click(getByRole('button', { name: /Adicionar/i }));
    await fixture.whenStable();

    await waitFor(()=>{
    expect(getByText('Modal title')).toBeTruthy();
    })
  });

  // Adicione mais testes conforme necessário
});
