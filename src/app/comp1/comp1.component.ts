import { EzComponent } from "@gsilber/webez";
import html from "./comp1.component.html";
import css from "./comp1.component.css";

export class Comp1Component extends EzComponent {
    constructor() {
        super(html, css);
    }
}
