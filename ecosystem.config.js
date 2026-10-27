module.exports = {
  apps: [
    {
      name: "sencillopay-landing",
      cwd: __dirname,
      // Ejecuta `next start` directamente para que PM2 gestione las señales del proceso.
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      // Next.js necesita tiempo para cerrar peticiones en curso al reiniciar.
      kill_timeout: 10000,
      time: true,
      env: {
        NODE_ENV: "production",
        PORT: 3006,
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
