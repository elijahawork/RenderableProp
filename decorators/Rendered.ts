import Renderable from '../interfaces/Renderable';

export default function Rendered(constr: Renderable, key: string) {    
    Object.defineProperty(constr.constructor.prototype, key, {
        get() {
            return this.value;
        },
        set(v) {
            this.value = v;
            this.render();
        }
    });
}
