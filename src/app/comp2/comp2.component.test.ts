import { describe, expect, test, beforeAll } from "@jest/globals";
import { Comp2Component } from "./comp2.component";
import { bootstrap } from "@gsilber/webez";

describe("Comp2Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Comp2Component>(Comp2Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Comp2Component);
        });
    });
});
