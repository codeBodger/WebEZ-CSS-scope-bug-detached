import { EzComponent } from "@gsilber/webez";
import html from "./comp2.component.html";
import css from "./comp2.component.css";

export class Comp2Component extends EzComponent {
    constructor() {
        super(html, css);
    }
}
