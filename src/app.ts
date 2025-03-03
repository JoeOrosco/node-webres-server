import { envs } from "./config/env";
import { AppRutes } from "./presentation/routes";
import { Server } from "./presentation/server";


(async () => {
  main()
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRutes.routes
  })
  server.start()
}

// Me quede en la parte de Todo Controller, Curso de Node JS Seccion 14