
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const Cotizar = () => {
  return (
    <>
      <Navbar />
      
      <section className="bg-daty-700 text-white py-12">
        <div className="container px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Solicita una Cotización</h1>
          <p className="text-lg md:max-w-2xl">
            Completa el formulario con los detalles de tu proyecto y recibe una cotización personalizada.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <InfoIcon className="h-5 w-5 text-blue-600" />
              <AlertDescription>
                Las cotizaciones son evaluadas por nuestros profesionales. Cualquier descuento será analizado individualmente por el asesor asignado a su proyecto.
              </AlertDescription>
            </Alert>
            
            <QuoteForm />
            
            <div className="mt-12 bg-gray-50 rounded-lg border p-6">
              <h3 className="text-lg font-medium mb-4">Proceso de Cotización</h3>
              <ol className="space-y-3">
                <li className="flex">
                  <span className="bg-daty-100 text-daty-700 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <p>Completa el formulario con los detalles de tu proyecto.</p>
                </li>
                <li className="flex">
                  <span className="bg-daty-100 text-daty-700 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <p>Un asesor revisará la información y validará el precio.</p>
                </li>
                <li className="flex">
                  <span className="bg-daty-100 text-daty-700 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <p>Recibirás la confirmación por correo o teléfono.</p>
                </li>
                <li className="flex">
                  <span className="bg-daty-100 text-daty-700 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <p>Realiza el pago del 50% para iniciar el trabajo.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Cotizar;
