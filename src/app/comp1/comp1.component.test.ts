import { describe, expect, test, beforeAll } from "@jest/globals";
import { Comp1Component } from "./comp1.component";
import { bootstrap } from "@gsilber/webez";

describe("Comp1Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Comp1Component>(Comp1Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Comp1Component);
        });
    });
});
