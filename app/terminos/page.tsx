import type { Metadata } from "next";
import { LegalSection, LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Condiciones de uso del sitio y del servicio SaaS de conciliación directa de sencillopay.",
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="sencillopay · Legal"
      title="Términos y condiciones"
      updated="Octubre de 2026"
      intro="Estos términos regulan el acceso a este sitio web y el uso del servicio de conciliación directa de sencillopay. Al solicitar un diagnóstico o utilizar la plataforma, aceptas las condiciones descritas a continuación."
    >
      <LegalSection title="1. Aceptación de los términos">
        <p>
          El acceso a este sitio implica la aceptación de estos términos. Si no
          estás de acuerdo, te pedimos no utilizar el sitio ni solicitar
          servicios. Los servicios contratados se rigen adicionalmente por el
          contrato comercial y los anexos técnicos suscritos con cada empresa.
        </p>
      </LegalSection>

      <LegalSection title="2. Descripción del servicio">
        <p>
          sencillopay ofrece una plataforma de software (SaaS) para conectar la
          cuenta bancaria de una empresa mediante API o C2P, generar links de
          cobro, recibir notificaciones bancarias, conciliar transacciones por
          referencia, monto y RIF o cédula, y automatizar comprobantes, facturas
          y webhooks hacia sistemas administrativos.
        </p>
        <p>
          El servicio es una capa tecnológica de inteligencia y automatización.
          No constituye intermediación financiera, adquirencia, recaudación ni
          liquidación de fondos. El dinero de las ventas se abona directamente en
          la cuenta bancaria del comercio.
        </p>
      </LegalSection>

      <LegalSection title="3. Naturaleza del servicio y ausencia de custodia">
        <p>
          sencillopay no recibe, retiene, custodia ni liquida el dinero de sus
          clientes. La plataforma no ordena débitos sobre las cuentas de los
          pagadores ni administra fondos de terceros. Su función se limita a
          procesar datos y notificaciones autorizados por la empresa para
          conciliar pagos y disparar automatizaciones.
        </p>
        <p>
          La empresa es responsable de la titularidad y operación de su cuenta
          bancaria, de la veracidad de los datos de sus clientes y del
          cumplimiento de sus obligaciones legales, fiscales y regulatorias.
        </p>
      </LegalSection>

      <LegalSection title="4. Uso permitido">
        <p>
          Te comprometes a utilizar el sitio y los servicios de forma lícita, a
          proporcionar información veraz y a no intentar acceder sin
          autorización a sistemas, datos o cuentas de terceros. Queda prohibido
          usar la plataforma para actividades fraudulentas, de lavado de dinero,
          financiamiento del terrorismo o cualquier fin prohibido por la ley.
        </p>
      </LegalSection>

      <LegalSection title="5. Precios, suscripción y facturación">
        <p>
          El servicio se factura mediante una suscripción mensual o anual basada
          en el volumen de conciliaciones y el número de sucursales contratadas.
          Las notificaciones de WhatsApp se facturan según consumo real a la
          tarifa pública aplicable. sencillopay no cobra comisiones sobre el
          monto de las ventas.
        </p>
        <p>
          Las tarifas publicadas son referenciales y están expresadas en dólares
          estadounidenses, más los impuestos aplicables. La facturación puede
          realizarse en bolívares al tipo de cambio BCV del día. El consumo
          adicional, los servicios de implementación y las condiciones del plan
          Enterprise se confirman en la propuesta comercial.
        </p>
      </LegalSection>

      <LegalSection title="6. Disponibilidad y soporte">
        <p>
          Trabajamos para mantener la plataforma disponible de forma continua,
          pero no garantizamos una disponibilidad ininterrumpida. Los niveles de
          servicio aplicables se detallan en el contrato correspondiente. Las
          ventanas de mantenimiento programado serán comunicadas con antelación
          razonable.
        </p>
      </LegalSection>

      <LegalSection title="7. Propiedad intelectual">
        <p>
          La marca, el software, los diseños, los textos y demás elementos de
          este sitio son propiedad de sencillopay o de sus licenciantes y están
          protegidos por las leyes de propiedad intelectual. No se concede
          licencia alguna sobre estos elementos salvo autorización expresa.
        </p>
      </LegalSection>

      <LegalSection id="legal" title="8. Aviso legal y limitación de responsabilidad">
        <p>
          La información de este sitio tiene carácter informativo y no
          constituye asesoría financiera, legal o tributaria. sencillopay no será
          responsable por daños indirectos, lucro cesante o decisiones tomadas
          exclusivamente con base en el contenido del sitio, en la medida
          permitida por la ley aplicable. Las marcas bancarias mencionadas son
          propiedad de sus respectivos titulares y se usan únicamente como
          referencia de compatibilidad.
        </p>
      </LegalSection>

      <LegalSection title="9. Modificaciones y ley aplicable">
        <p>
          Podemos actualizar estos términos para reflejar cambios en el servicio
          o en la normativa. La versión vigente será la publicada en esta
          página. Estos términos se rigen por las leyes de la República
          Bolivariana de Venezuela. Cualquier controversia se someterá a los
          tribunales competentes de la ciudad de Caracas, sin perjuicio de las
          normas de protección al consumidor aplicables.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
