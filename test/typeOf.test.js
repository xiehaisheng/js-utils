import { Util } from "../dist/bundle.es";

test("typeOf 123 should be Number", () => {
  expect(Util.typeOf(123)).toBe("Number");
});

test('typeOf "abc" should be String', () => {
  expect(Util.typeOf("abc")).toBe("String");
});
