'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Scale, 
  Users, 
  FileCheck, 
  ArrowRight,
  AlertCircle,
  Loader2,
  Building2,
  Mail
} from 'lucide-react';
import { all17PracticeAreasData } from '@/data/practiceAreas';
import { californiaCountiesData } from '@/data/counties';

export default function SpanishForAttorneysPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    barNumber: '',
    firmName: '',
    email: '',
    phone: '',
    primaryCounty: '',
    practiceAreas: '',
    notes: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Client Validation
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'El nombre completo es requerido.';
    if (!formData.barNumber.trim()) errors.barNumber = 'El número de State Bar de California es requerido.';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Un correo válido es requerido.';
    if (!formData.phone.trim()) errors.phone = 'El teléfono es requerido.';
    if (!formData.primaryCounty) errors.primaryCounty = 'Seleccione su condado principal.';
    if (!formData.practiceAreas) errors.practiceAreas = 'Seleccione su área de práctica principal.';

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});
    setStatus('loading');

    try {
      const res = await fetch('/api/attorney-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Hubo un error al procesar su solicitud. Intente nuevamente.');
      }

      setStatus('success');
      setFormData({
        fullName: '',
        barNumber: '',
        firmName: '',
        email: '',
        phone: '',
        primaryCounty: '',
        practiceAreas: '',
        notes: '',
      });
    } catch (err: any) {
      console.error('Attorney submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Ocurrió un error al enviar la solicitud.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden border-b border-[#162e4d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Red de Abogados de California</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Para Abogados y Firmas Legales
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Únase a nuestra red de abogados en los 58 condados de California. Conectamos casos calificados con profesionales que cumplen los más altos estándares éticos.
            </p>
          </div>
        </div>

        {/* Value Section & Form */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0f233a]">
                  ¿Por Qué Unirse al Panel de CALegalSource?
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Operado por DPA Attorneys at Law, facilitamos la conexión ética y transparente con personas que buscan representación calificada en California.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#f8fafc] border border-gray-200">
                  <FileCheck className="w-5 h-5 text-[#3d7826] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-[#0f233a]">Casos Evaluados</h3>
                    <p className="text-xs text-gray-600">Consultas con detalles de jurisdicción, condado y resumen de los hechos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#f8fafc] border border-gray-200">
                  <ShieldCheck className="w-5 h-5 text-[#3d7826] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-[#0f233a]">Cumplimiento con el State Bar</h3>
                    <p className="text-xs text-gray-600">Operamos bajo las reglas de conducta profesional de California y el Código de Negocios y Profesiones § 6155.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0f233a] text-white space-y-3">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <Building2 className="w-4 h-4 text-[#85db61]" />
                  <span>DPA Attorneys at Law</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Oficina en San Diego: 8880 Rio San Diego Dr., Suite 800, San Diego, CA 92108. Contacto: questions@dpalaw.com.
                </p>
              </div>
            </div>

            {/* Right Application Form */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-xl">
                <h3 className="font-playfair text-2xl font-bold text-[#0f233a] mb-2">
                  Solicitud para el Panel de Abogados
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-6">
                  Complete la información para iniciar la verificación de membresía en nuestro panel.
                </p>

                {status === 'success' ? (
                  <div className="p-8 rounded-xl bg-green-50 border border-green-200 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#3d7826] mx-auto" />
                    <h4 className="font-bold text-lg text-gray-900">¡Solicitud Enviada con Éxito!</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Hemos recibido sus datos. Nuestro equipo de cumplimiento revisará su número de State Bar y se comunicará a la brevedad.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-4 py-2 bg-[#3d7826] text-white rounded-lg text-xs font-semibold hover:bg-[#32641e] transition-colors"
                    >
                      Enviar Otra Solicitud
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === 'error' && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-red-700 text-xs">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          Nombre Completo <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Lic. Carlos Mendoza"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none"
                        />
                        {validationErrors.fullName && <p className="text-red-500 text-[10px] mt-0.5">{validationErrors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          California State Bar # <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.barNumber}
                          onChange={(e) => setFormData({ ...formData, barNumber: e.target.value })}
                          placeholder="123456"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none"
                        />
                        {validationErrors.barNumber && <p className="text-red-500 text-[10px] mt-0.5">{validationErrors.barNumber}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          Nombre de la Firma / Despacho
                        </label>
                        <input
                          type="text"
                          value={formData.firmName}
                          onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                          placeholder="Mendoza Law Group"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          Correo Electrónico <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="abogado@firma.com"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none"
                        />
                        {validationErrors.email && <p className="text-red-500 text-[10px] mt-0.5">{validationErrors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          Teléfono de Contacto <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(760) 555-0123"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none"
                        />
                        {validationErrors.phone && <p className="text-red-500 text-[10px] mt-0.5">{validationErrors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          Condado Principal <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.primaryCounty}
                          onChange={(e) => setFormData({ ...formData, primaryCounty: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none bg-white"
                        >
                          <option value="">Seleccione un Condado</option>
                          {californiaCountiesData.map((c) => (
                            <option key={c.slug} value={c.name}>{c.name}</option>
                          ))}
                        </select>
                        {validationErrors.primaryCounty && <p className="text-red-500 text-[10px] mt-0.5">{validationErrors.primaryCounty}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-800 mb-1">
                        Área de Práctica Principal <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.practiceAreas}
                        onChange={(e) => setFormData({ ...formData, practiceAreas: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none bg-white"
                      >
                        <option value="">Seleccione un Área de Práctica</option>
                        {all17PracticeAreasData.map((pa) => (
                          <option key={pa.slug} value={pa.name}>{pa.nameEs || pa.name}</option>
                        ))}
                      </select>
                      {validationErrors.practiceAreas && <p className="text-red-500 text-[10px] mt-0.5">{validationErrors.practiceAreas}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-800 mb-1">
                        Notas Adicionales / Jurisdicciones
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Idiomas hablados, condados secundarios, certificaciones..."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Verificando y Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar Solicitud al Panel</span>
                          <ArrowRight className="w-4 h-4 text-[#85db61]" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
