'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MapPin, Building2, CheckCircle2, AlertCircle, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SpanishContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Consulta General',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Hubo un error al enviar el mensaje. Por favor intente de nuevo o escriba a questions@dpalaw.com.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: 'Consulta General',
        message: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Hubo un error al enviar.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <div className="bg-[#0f233a] text-white py-14 lg:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Atención y Soporte</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Contacto y Soporte
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              ¿Tiene preguntas sobre nuestra plataforma de conexión legal, comentarios o quejas de cumplimiento? Póngase en contacto con nuestro equipo administrativo.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-[#0f233a] font-bold text-lg font-playfair mb-1">
                    <Building2 className="w-5 h-5 text-[#3d7826]" />
                    <span>Operado por DPA Attorneys at Law</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    DPA Law supervisa las operaciones legales de CALegalSource en todo el estado de California.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#3d7826] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block font-semibold">Oficina en San Diego</strong>
                      <p className="text-gray-600">8880 Rio San Diego Dr.</p>
                      <p className="text-gray-600">Suite 800</p>
                      <p className="text-gray-600">San Diego, CA 92108</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                    <Mail className="w-4 h-4 text-[#3d7826] shrink-0" />
                    <a href="mailto:questions@dpalaw.com" className="font-medium text-[#0f233a] hover:text-[#3d7826]">
                      questions@dpalaw.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#edf7e8] border border-[#cde8c5] text-xs sm:text-sm text-gray-700 leading-relaxed space-y-3">
                <strong className="text-gray-900 block font-semibold text-sm">¿Busca un Abogado para un Asunto Legal?</strong>
                <p>
                  Si desea ser conectado con un abogado para un caso nuevo de derecho laboral, lesiones personales, arrendamiento o familia, use nuestro formulario de evaluación en línea.
                </p>
                <Link
                  href="/es/evaluacion-gratuita"
                  className="inline-flex items-center gap-1.5 text-[#3d7826] font-bold hover:underline text-xs sm:text-sm"
                >
                  <span>Iniciar Evaluación Gratuita</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-xl">
                <h2 className="font-playfair text-2xl font-bold text-[#0f233a] mb-2">
                  Envíenos un Mensaje Administrativo
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-6">
                  Complete los siguientes campos y nos comunicaremos con usted a la brevedad.
                </p>

                {status === 'success' ? (
                  <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#3d7826] mx-auto" />
                    <h3 className="font-bold text-lg text-gray-900">¡Mensaje Enviado con Éxito!</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Gracias por contactarnos. Nuestro equipo revisará su mensaje y responderá a su correo electrónico.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-4 py-2 bg-[#3d7826] text-white rounded-lg text-xs font-semibold hover:bg-[#32641e] transition-colors"
                    >
                      Enviar Otro Mensaje
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
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Juan Pérez"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          Correo Electrónico <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="juan@ejemplo.com"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(760) 555-0123"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                          Motivo de Consulta
                        </label>
                        <select
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none bg-white"
                        >
                          <option value="Consulta General">Consulta General</option>
                          <option value="Soporte de Plataforma">Soporte de Plataforma</option>
                          <option value="Cumplimiento / Quejas">Cumplimiento / Quejas</option>
                          <option value="Panel de Abogados">Panel de Abogados</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-800 mb-1">
                        Mensaje <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Escriba su consulta o comentario aquí..."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d7826]/30 focus:border-[#3d7826] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar Mensaje</span>
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
