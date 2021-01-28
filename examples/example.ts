import Renderable from '../interfaces/Renderable';
import Rendered from '../decorators/Rendered';

class Example implements Renderable {
  @Rendered
  renderedField?: number;
  
  label: string;
  
  constructor(label: string) {
    this.label = label;
  }
  
  render() {
     console.log('Rerendering', this);
  }
}

const a = new A('a');
const b = new A('b');
a.rd = 5;
b.rd = 2;
