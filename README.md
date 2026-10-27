# sencillopay — Landing comercial

Landing page B2B para **sencillopay**, una plataforma SaaS de integración directa y conciliación de pagos para empresas en Venezuela. La propuesta está construida de punta a punta sobre el modelo de **cero custodia de fondos**: el dinero se abona directamente en la cuenta bancaria del comercio y sencillopay actúa únicamente como capa de inteligencia, automatización y conciliación.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **lucide-react** para iconografía
- Tipografía: **Archivo** (display) + **IBM Plex Sans** (UI) + **IBM Plex Mono** (datos), vía `next/font`

## Ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para producción:

```bash
npm run build
npm run start
```

## Estructura

```
app/
  page.tsx                 # Composición de la landing
  layout.tsx               # Fuentes, metadata y grano global
  globals.css              # Design system, paleta y animaciones
  privacidad/page.tsx      # Política de privacidad
  terminos/page.tsx        # Términos y condiciones
  not-found.tsx            # 404
  robots.ts / sitemap.ts   # SEO
  icon.svg                 # Favicon de marca
components/
  site-nav.tsx             # Navegación fija + menú móvil
  hero.tsx                 # Hero y CTAs
  hero-dashboard.tsx       # Mockup de conciliación directa
  problem-solution.tsx     # Custodia vs. integración directa
  how-it-works.tsx         # Flujo del dinero + 4 pasos
  simulator.tsx            # Simulador de conciliación directa
  benefits.tsx             # Bento de beneficios + métricas
  pricing.tsx              # Planes SaaS por volumen y sucursales
  contact.tsx              # Formulario de diagnóstico
  footer.tsx               # Enlaces institucionales + aviso legal
  logo.tsx / stamp.tsx / reveal.tsx / section-label.tsx
```

## Propuesta implementada

- **Cero custodia:** todo el copy, el panel de producto y el simulador muestran el abono directo a la cuenta jurídica del comercio.
- **Núcleo del servicio:** conexión bancaria API/C2P, links de cobro, notificación instantánea del banco, match por referencia + monto + RIF/cédula, comprobante y factura por WhatsApp, webhook al ERP.
- **Ventajas:** disponibilidad inmediata, cero riesgo de intermediación y sincronización con sistemas administrativos.
- **Monetización:** planes mensuales por volumen de conciliaciones y sucursales, fee de uso transparente de WhatsApp y 0% de comisión sobre las ventas.
- **Simulador:** método, monto, referencia, RIF/cédula y banco emisor; estados `idle`, `processing` y `matched`; resultado con cuenta destino, retención cero, WhatsApp y webhook.
- **Calidad:** auditoría Lighthouse con **100** en Accesibilidad, Best Practices y SEO.

## Antes de publicar

1. **Marca y datos:** confirma la razón social, correos, teléfonos, dirección y enlaces de WhatsApp reales.
2. **Formulario:** el envío está simulado en el cliente. Conéctalo a un endpoint (`app/api/contacto/route.ts`), CRM o proveedor de correo.
3. **Simulador:** es una demo visual; no procesa pagos ni mueve dinero real.
4. **Precios:** valida las tarifas SaaS, volúmenes, fee de notificaciones, impuestos (IVA/IGTF) y condiciones comerciales.
5. **Legal:** haz revisar la política de privacidad, los términos y el aviso de ausencia de custodia por asesoría legal venezolana.
6. **Bancos:** la tira de bancos es referencial. Valida convenios, autorizaciones y uso de marcas de terceros.
7. **Dominio:** actualiza `metadataBase`, `robots.ts` y `sitemap.ts` si el dominio final no es `sencillopay.com`.

## Notas de diseño

- Identidad “infraestructura financiera”: papel hueso, tinta casi negra y un único acento naranja de señal. Sin glows, sin degradados y sin tarjetas de cristal.
- Titulares en Archivo, en mayúsculas y con tracking cerrado; UI en IBM Plex Sans; datos y etiquetas en IBM Plex Mono.
- Geometría dura: bordes de 1 px, esquinas rectas, reglas tipo estado de cuenta y sombras sólidas en lugar de difusas.
- El sello circular “0% retenido” y la retícula de papel funcionan como motivos de marca en el hero, el footer y las páginas legales.
- Las superficies de producto (consola y simulador) se mantienen oscuras para que se lean como pantallas dentro de un documento claro.
- Sin imágenes externas: dashboard, diagramas y mockups construidos con CSS/SVG.
- Animaciones respetando `prefers-reduced-motion`.
