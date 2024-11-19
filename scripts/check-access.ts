import { accesses, accessProps } from "@/configs/accesses";

const keys: string[] = [];
function main() {
  console.log("checking accesses.ts");
  for (const access of accesses) {
    if (keys.includes(access.key)) {
      throw new Error(`duplicate key: ${access.key}, please check your accesses.ts`);
    }
    keys.push(access.key);
    visitChildren(access);
  }
  console.log("checking accesses.ts done");
}

function visitChildren(access: accessProps) {
  if (access.children) {
    for (const child of access.children) {
      if (keys.includes(child.key)) {
        throw new Error(`duplicate key: ${child.key}, please check your accesses.ts`);
      }
      keys.push(child.key);
      visitChildren(child);
    }
  }
}

main();
