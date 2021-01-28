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

const a = new Example('a');
const b = new Example('b');
a.renderedField = 5;
b.renderedField = 2;
