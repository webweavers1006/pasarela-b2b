import type { Metadata } from "next";
import { LegalSection, LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo sencillopay recopila, usa y protege la información de empresas y personas que interactúan con la plataforma de conciliación directa.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="sencillopay · Legal"
      title="Política de privacidad"
      updated="Octubre de 2026"
      intro="En sencillopay tratamos la información con el mismo cuidado con el que tratamos cada conciliación. Esta política explica qué datos recopilamos, para qué los usamos y cómo puedes ejercer tus derechos como titular."
    >
      <LegalSection title="1. Quiénes somos">
        <p>
          sencillopay, C.A. es una empresa venezolana dedicada al software de
          conciliación, integración bancaria y automatización de notificaciones
          para empresas. Para efectos de esta política, sencillopay actúa como
          responsable del tratamiento de los datos recopilados a través de este
          sitio web.
        </p>
        <p>
          sencillopay no es una entidad financiera ni presta servicios de
          intermediación, recaudación o liquidación de fondos. La plataforma no
          recibe, retiene ni custodia el dinero de las empresas.
        </p>
      </LegalSection>

      <LegalSection title="2. Datos que recopilamos">
        <p>
          Recopilamos únicamente la información necesaria para atender tu
          solicitud comercial y operar el servicio:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-signal-600">
          <li>
            Datos de identificación y contacto corporativo: nombre, empresa,
            correo electrónico, teléfono, volumen estimado de conciliaciones y
            número de sucursales.
          </li>
          <li>
            Información de conexión bancaria autorizada por la empresa:
            identificadores de comercio, cuentas bancarias enmascaradas, tokens
            de acceso de solo lectura y configuraciones de integración.
          </li>
          <li>
            Metadatos de transacciones necesarios para conciliar: referencia,
            monto, fecha, banco emisor, RIF o cédula del pagador y estado de la
            notificación bancaria.
          </li>
          <li>
            Datos técnicos de navegación: dirección IP, tipo de dispositivo,
            páginas visitadas y eventos de uso, con fines de seguridad y mejora
            del producto.
          </li>
        </ul>
        <p>
          No recopilamos claves de banca en línea, credenciales de acceso ni
          números completos de tarjetas. La conexión con la cuenta bancaria se
          realiza mediante mecanismos de autorización y tokens de solo lectura
          proporcionados por la propia empresa.
        </p>
      </LegalSection>

      <LegalSection title="3. Cómo usamos la información">
        <ul className="list-disc space-y-1.5 pl-5 marker:text-signal-600">
          <li>Coordinar diagnósticos y responder solicitudes comerciales.</li>
          <li>
            Prestar, mantener y mejorar los servicios de conciliación,
            notificación y sincronización con sistemas administrativos.
          </li>
          <li>
            Prevenir fraude, validar identidad y proteger la seguridad de la
            plataforma.
          </li>
          <li>
            Cumplir obligaciones legales, regulatorias y requerimientos de
            autoridades competentes.
          </li>
        </ul>
        <p>
          No vendemos tu información personal. Solo compartimos datos con
          proveedores que apoyan la operación, bajo acuerdos de confidencialidad,
          y con entidades reguladas cuando la ley lo exige.
        </p>
      </LegalSection>

      <LegalSection title="4. Conexión bancaria, pagos y terceros">
        <p>
          La empresa conecta su cuenta bancaria a través de una integración API o
          C2P. A partir de esa conexión, sencillopay recibe notificaciones y
          metadatos de las transacciones para conciliarlas por referencia, monto
          y RIF o cédula. La plataforma no ordena débitos, no recibe dinero, no
          lo retiene y no lo liquida: los pagos se abonan directamente en la
          cuenta jurídica del comercio.
        </p>
        <p>
          Las notificaciones por WhatsApp se envían a través de la plataforma
          WhatsApp Business y proveedores tecnológicos autorizados. Los datos
          compartidos se limitan a lo necesario para entregar el comprobante, la
          factura o el enlace de cobro correspondiente. Las marcas de terceros
          pertenecen a sus respectivos titulares.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="5. Cookies y tecnologías similares">
        <p>
          Utilizamos cookies técnicas necesarias para el funcionamiento del
          sitio y cookies analíticas para comprender cómo se utiliza. Puedes
          configurar tu navegador para bloquear o eliminar cookies; algunas
          funciones del sitio podrían dejar de estar disponibles.
        </p>
      </LegalSection>

      <LegalSection title="6. Conservación y derechos">
        <p>
          Conservamos la información durante el tiempo necesario para cumplir
          las finalidades descritas y las obligaciones legales aplicables.
          Puedes solicitar acceso, rectificación, actualización o supresión de
          tus datos escribiendo a{" "}
          <a
            href="mailto:privacidad@sencillopay.com"
            className="text-signal-700 underline decoration-signal-600/30 underline-offset-4"
          >
            privacidad@sencillopay.com
          </a>
          . Atenderemos tu solicitud en los plazos previstos por la normativa
          venezolana aplicable.
        </p>
      </LegalSection>

      <LegalSection title="7. Seguridad">
        <p>
          Aplicamos medidas técnicas y organizativas razonables para proteger la
          información, incluyendo cifrado en tránsito, control de accesos,
          tokens de solo lectura y monitoreo de la plataforma. Ningún sistema es
          absolutamente infalible; si detectamos un incidente relevante,
          actuaremos conforme a nuestros protocolos y a la ley aplicable.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
