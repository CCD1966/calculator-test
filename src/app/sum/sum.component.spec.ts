import { SumComponent } from './sum.component';

describe('Componente suma ', () => {
  let component: SumComponent;

  beforeEach(() => {
    component = new SumComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sum two values', () => {
    component.value1 = 5;
    component.value2 = 3;
    component.sum();
    expect(component.result).toBe(8);
  });
});
