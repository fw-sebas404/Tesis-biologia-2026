/**
 * Home - Página de inicio de la Tesis Digital
 * Diseño: Eco-Educativo Natural, verde claro, bordes redondeados
 * Tipografía: Nunito - amigable y legible
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E8F5E9]">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <img
            src="/manus-storage/logo_tesis_ec45a2d8.png"
            alt="Tesis Digital Biología"
            className="w-32 h-32 mx-auto rounded-full shadow-lg border-4 border-[#4CAF50]/20 mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B5E20] mb-4">
            Tesis Digital
          </h1>
          <p className="text-xl text-[#2E7D32] font-medium mb-2">
            Biología - Evolución
          </p>
          <p className="text-base text-[#388E3C]/80 max-w-2xl mx-auto leading-relaxed">
            Un proyecto educativo interactivo que explica la evolución de los seres vivos
            de forma clara, visual y accesible para estudiantes de secundaria.
          </p>
        </div>
      </section>

      {/* Secciones disponibles */}
      <section className="py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B5E20] mb-6 text-center">
            Secciones Disponibles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Microevolución - Disponible */}
            <Link href="/microevolucion">
              <div className="bg-white rounded-2xl p-6 border-2 border-[#4CAF50]/30 shadow-sm hover:shadow-md hover:border-[#4CAF50]/60 cursor-pointer transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B5E20]">Microevolución</h3>
                    <span className="text-xs font-semibold text-[#4CAF50] bg-[#4CAF50]/10 px-2 py-0.5 rounded-full">
                      Disponible
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#388E3C]/70">
                  Aprende sobre los mecanismos que causan cambios en las poblaciones:
                  selección natural, deriva génica, flujo génico y mutaciones.
                </p>
              </div>
            </Link>

            {/* Macroevolución - Próximamente */}
            <div className="bg-white/50 rounded-2xl p-6 border-2 border-gray-200 opacity-70">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-500">Macroevolución</h3>
                    <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      Próximamente
                    </span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Especieación, radiación adaptativa y los grandes patrones evolutivos
                a lo largo de millones de años.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 border-2 border-[#4CAF50]/20">
            <h2 className="text-xl font-bold text-[#1B5E20] mb-3">
              Sobre esta tesis digital
            </h2>
            <p className="text-sm text-[#388E3C]/80 leading-relaxed">
              Este proyecto fue creado como recurso educativo para estudiantes de secundaria
              (aproximadamente 14 años). El contenido está basado en fuentes científicas
              reconocidas como <strong>Understanding Evolution</strong> de UC Berkeley,
              <strong> Khan Academy</strong> y <strong>National Geographic</strong>.
              Cada sección incluye explicaciones claras, imágenes reales y ejemplos
              concretos para facilitar la comprensión de los conceptos biológicos.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
