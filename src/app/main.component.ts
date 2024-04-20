import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from "@gsilber/webez";
import { Comp1Component } from "./comp1/comp1.component";
import { Comp2Component } from "./comp2/comp2.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    private comp1: Comp1Component = new Comp1Component();
    private comp2: Comp2Component = new Comp2Component();

    constructor() {
        super(html, css);
        this.addComponent(this.comp1, "comp1");
        this.addComponent(this.comp2, "comp2");
    }
}
