import { render, screen, fireEvent } from "@testing-library/react";
import { sum } from "./class3";

describe("class3",() => {
    test('test sum', () => { 
       expect(sum(20,30)).toBe(50);
     })
})
