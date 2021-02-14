import Renderable from '../interfaces/Renderable';

export default function Rendered(constr: Renderable, key: string) {    
    Object.defineProperty(constr.constructor.prototype, key, {
        get() {
            return this[key];
        },
        set(v) {
            this[key] = v;
            this.render();
        }
    });
}
