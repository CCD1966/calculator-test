import { SumComponent } from './sum.component';

describe('Componente suma ', () => {
  let component: SumComponent;

  beforeEach(() => {
    component = new SumComponent();
  });

  it('Se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('sumamos dos valores', () => {
    component.value1 = 5;
    component.value2 = 3;
    component.sum();
    expect(component.result).toBe(8);
  });
});
