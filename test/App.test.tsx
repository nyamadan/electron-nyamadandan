import * as React from "react";
import * as renderer from "react-test-renderer";

test('hello("jest") to be "Hello Jest!!"', () => {
  const component = renderer.create(
    <a href="http://www.facebook.com">Facebook</a>,
  );
  const tree = component.toJSON();
});
