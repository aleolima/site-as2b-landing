"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Image
              src="/logo_as2b_v1.png"
              alt="AS2B Logo"
              width={100}
              height={100}
              className="rounded-lg object-contain"
              priority
            />

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#servicos"
                className="text-gray-700 hover:text-blue-700 transition-all duration-200 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('servicos')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Serviços
              </Link>
              <Link
                href="#sobre"
                className="text-gray-700 hover:text-blue-700 transition-all duration-200 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sobre')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Sobre
              </Link>
              <Link
                href="#depoimentos"
                className="text-gray-700 hover:text-blue-700 transition-all duration-200 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('depoimentos')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Depoimentos
              </Link>
              <Link
                href="#contato"
                className="text-gray-700 hover:text-blue-700 transition-all duration-200 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contato')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Contato
              </Link>
            </nav>

            <Button
              className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5511945952869&text=Olá,%20vi%20o%20site%20da%20AS2B%20e%20gostaria%20de%20um%20diagnóstico.', '_blank')}
            >
              Solicitar Diagnóstico
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Tecnologia, Automação e IA<br />
            para negócios de verdade
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in-delay">
            Sites, bots e soluções sob demanda para empresas que querem escalar com inteligência.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-bounce-in"
            onClick={() => window.open('https://api.whatsapp.com/send?phone=5511945952869&text=Olá,%20vi%20o%20site%20da%20AS2B%20e%20gostaria%20de%20um%20diagnóstico%20gratuito.', '_blank')}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
            </svg>
            Solicitar Diagnóstico Gratuito
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Criação de Sites e Landing Pages</h3>
              <p className="text-gray-600">
                Desenvolvimento profissional de sites responsivos e landing pages otimizadas para conversão de leads.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Migração de Sites para WordPress</h3>
              <p className="text-gray-600">
                Migração segura e otimizada do seu site atual para WordPress, mantendo SEO e funcionalidades.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Automação com N8N e Bots</h3>
              <p className="text-gray-600">
                Automatização completa de processos empresariais com N8N e desenvolvimento de bots personalizados.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Servidores VPS e Suporte Técnico</h3>
              <p className="text-gray-600">
                Configuração e gerenciamento de servidores VPS com suporte técnico especializado 24/7.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Chatbots com IA (GPT)</h3>
              <p className="text-gray-600">
                Desenvolvimento de chatbots inteligentes com GPT para atendimento automatizado e vendas.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Consultoria de TI sob Demanda</h3>
              <p className="text-gray-600">
                Consultoria especializada em tecnologia para otimizar processos e resolver desafios técnicos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="sobre" className="py-20 bg-white scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a AS2B?
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Atendimento direto com especialista</h3>
                <p className="text-gray-600">
                  Comunicação direta com profissionais experientes, sem intermediários ou call centers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Preço justo e suporte contínuo</h3>
                <p className="text-gray-600">
                  Investimento transparente com suporte técnico contínuo para garantir o sucesso do seu projeto.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Soluções sob medida com visão de negócio</h3>
                <p className="text-gray-600">
                  Desenvolvemos soluções personalizadas pensando nos resultados práticos do seu negócio.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">TI + Inteligência digital no mesmo lugar</h3>
                <p className="text-gray-600">
                  Combinamos infraestrutura tecnológica com inteligência artificial de forma integrada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-6">
                <p className="text-lg text-gray-700 italic">
                  "A AS2B salvou nosso projeto em tempo recorde. A automação implementada nos permitiu focar no que realmente importa para o crescimento da empresa."
                </p>
              </div>
              <div>
                <div className="font-semibold text-gray-900">João Silva</div>
                <div className="text-gray-600">CEO, TechUp</div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-6">
                <p className="text-lg text-gray-700 italic">
                  "Os bots melhoraram o atendimento em 40%. Nossos clientes ficaram impressionados com a rapidez e qualidade das respostas automatizadas."
                </p>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Maria Santos</div>
                <div className="text-gray-600">Marketing, SmartClinic</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 scroll-mt-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Receba uma proposta personalizada
              </h2>
              <p className="text-gray-600">
                Preencha o formulário e receba um diagnóstico gratuito com soluções sob medida para seu negócio.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nome">Nome completo *</Label>
                  <Input id="nome" required className="transition-all duration-200 focus:scale-105" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail profissional *</Label>
                  <Input id="email" type="email" required className="transition-all duration-200 focus:scale-105" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="telefone">WhatsApp *</Label>
                  <Input id="telefone" placeholder="(11) 99999-9999" required className="transition-all duration-200 focus:scale-105" />
                </div>
                <div>
                  <Label htmlFor="empresa">Empresa *</Label>
                  <Input id="empresa" required className="transition-all duration-200 focus:scale-105" />
                </div>
              </div>

              <div>
                <Label htmlFor="servico">Serviço de interesse</Label>
                <Select>
                  <SelectTrigger className="transition-all duration-200 focus:scale-105">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="site">Criação de Sites e Landing Pages</SelectItem>
                    <SelectItem value="wordpress">Migração para WordPress</SelectItem>
                    <SelectItem value="automacao">Automação com N8N e Bots</SelectItem>
                    <SelectItem value="vps">Servidores VPS e Suporte</SelectItem>
                    <SelectItem value="chatbot">Chatbots com IA</SelectItem>
                    <SelectItem value="consultoria">Consultoria de TI</SelectItem>
                    <SelectItem value="outros">Outros serviços</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="mensagem">Descreva seu projeto ou necessidade</Label>
                <Textarea
                  id="mensagem"
                  placeholder="Conte-nos mais sobre seu projeto, desafios atuais ou objetivos..."
                  className="min-h-[100px] transition-all duration-200 focus:scale-105"
                />
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 transition-all duration-300 hover:scale-110 hover:shadow-xl">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enviar Solicitação
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m9-9V6a2 2 0 00-2-2H7a2 2 0 00-2 2v3m14 0V9a2 2 0 00-2 2v3.5M3 12v3.5a2 2 0 002 2h.5" />
                  </svg>
                  Seus dados estão seguros. Não enviamos spam.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Seu negócio merece mais tecnologia
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Implemente soluções que funcionam de verdade.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 transition-all duration-300 hover:scale-110 hover:shadow-xl"
            onClick={() => window.open('https://api.whatsapp.com/send?phone=5511945952869&text=Olá,%20vi%20o%20site%20da%20AS2B%20e%20quero%20minha%20solução.', '_blank')}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
            </svg>
            Quero minha solução
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-black text-white py-16 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/logo_as2b_v1.png"
                alt="AS2B Logo"
                width={100}
                height={100}
                className="rounded-lg mb-4"
              />
              <p className="text-gray-300">
                Tecnologia, Automação e IA para negócios de verdade
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <a
                  href="https://api.whatsapp.com/send?phone=5511945952869&text=Olá,%20vi%20o%20site%20da%20AS2B%20e%20gostaria%20de%20falar%20com%20vocês."
                  target="_blank"
                  className="flex items-center space-x-3 hover:text-green-400 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
                  </svg>
                  <span>(11) 94595-2869</span>
                </a>
                <a
                  href="mailto:contato@as2b.com.br"
                  className="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contato@as2b.com.br</span>
                </a>
                <div className="flex items-start space-x-3 hover:text-red-400 transition-colors duration-200">
                  <svg className="w-5 h-5 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    Av. Águia de Haia, 1336 casa 2<br />
                    Artur Alvim – São Paulo<br />
                    CEP 03694-000
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/as2b.services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon" className="bg-gradient-to-r from-purple-500 to-pink-500 border-none hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Button>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511945952869&text=Olá,%20vi%20o%20site%20da%20AS2B%20e%20gostaria%20de%20falar%20com%20vocês."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon" className="bg-green-600 border-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
                    </svg>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 AS2B. Todos os direitos reservados. | Política de Privacidade</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://api.whatsapp.com/send?phone=5511945952869&text=Olá,%20vi%20o%20site%20da%20AS2B%20e%20gostaria%20de%20conversar."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="icon"
            className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
            </svg>
          </Button>
        </a>
      </div>
    </div>
  )
}
