/**this test used to make sure of the accesses config is still on the format track */

import { accesses, accessProps } from "./accesses";

function flatAccess() {
  const flattenRecursively: (access: accessProps) => accessProps[] = (access: accessProps) => {
    if (access.children) {
      return [access, ...access.children.flatMap(flattenRecursively)];
    }
    return [access];
  };

  const flatAccesses: accessProps[] = accesses.flatMap(flattenRecursively);
  return flatAccesses;
}

describe("accesses.test.tsx", () => {
  it("should not duplicate key", () => {
    const accessKeys: string[] = [];
    for (const access of flatAccess()) {
      expect(accessKeys.includes(access.key)).toBe(false);
      accessKeys.push(access.key);
    }
  });
});
