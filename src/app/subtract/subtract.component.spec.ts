import { SubtractComponent } from './subtract.component';

describe('Componente resta', () => {
  let component: SubtractComponent;

  beforeEach(() => {
    component = new SubtractComponent();
  });

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });

  it('Debe restar dos valores', () => {
    component.value1 = 5;
    component.value2 = 3;
    component.subtract();
    expect(component.result).toBe(2);
  });
});
