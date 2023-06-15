import fs from "fs"
import { resolve } from "path"

import Manager from "@/manager"

export default function (manager: Manager) {
  const path = resolve(__dirname)
  fs.readdir(path, { encoding: "utf-8" }, (error, files) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    files.forEach((name) => {
      if (/index\.[ts|js]/i.test(name)) return;

      import(resolve(__dirname, name))
        .then(controller => controller.default(manager))
        .catch((e) => {
          console.error(e);
          process.exit(1);
        })
    })

  })
}