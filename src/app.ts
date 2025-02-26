import { envs } from "./config/env";
import { Server } from "./presentation/server";


(async () => {
  main()
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  })
  server.start()
}

// Me quede en la parte de Variables de Entorno, Curso de Node JS Seccion 13