import { SubtractComponent } from './subtract.component';

describe('Componente resta', () => {
  let component: SubtractComponent;

  beforeEach(() => {
    component = new SubtractComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subtract two values', () => {
    component.value1 = 5;
    component.value2 = 3;
    component.subtract();
    expect(component.result).toBe(1);
  });
});
