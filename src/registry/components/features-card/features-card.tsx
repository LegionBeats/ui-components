'use client';

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Zap,
  Users,
  Sparkles,
  ShieldCheck,
  Globe,
  Terminal,
  Lightbulb,
  Cpu,
  Layers,
  Lock,
  BarChart3,
} from "lucide-react";

export const Component = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState(0);

  const features = [
    {
      id: 0,
      title: "Lightning Fast",
      desc: "Sub-millisecond response times",
      icon: Zap,
      stat: "0.3ms",
    },
    {
      id: 1,
      title: "Smart Caching",
      desc: "AI-powered optimization",
      icon: Cpu,
      stat: "99.9%",
    },
    {
      id: 2,
      title: "Global Scale",
      desc: "44+ edge locations",
      icon: Globe,
      stat: "44",
    },
    {
      id: 3,
      title: "Enterprise Security",
      desc: "Military-grade encryption",
      icon: Lock,
      stat: "ISO 27001",
    },
  ];

  const metrics = [
    { label: "API Throughput", value: "2.5M", unit: "req/s", trend: "+24%" },
    { label: "Avg Latency", value: "12", unit: "ms", trend: "-8%" },
    { label: "Error Rate", value: "0.01", unit: "%", trend: "-12%" },
    { label: "Uptime SLA", value: "99.99", unit: "%", trend: "+0.02%" },
  ];

  const integrations = [
    { name: "React", abbr: "⚛️" },
    { name: "Node.js", abbr: "⚙️" },
    { name: "PostgreSQL", abbr: "🗄️" },
    { name: "Redis", abbr: "📦" },
    { name: "Docker", abbr: "🐳" },
    { name: "Kubernetes", abbr: "☸️" },
  ];

  const codeExample = `// Deploy in seconds
const app = new Nexus({
  regions: ["us-west", "eu-central"],
  cache: { ttl: 3600 },
  security: "enterprise"
});

await app.deploy();
// ✓ Live in 2.1s`;

  const stats = [
    { label: "Active Users", value: "2.5M+", icon: Users },
    { label: "Data Centers", value: "44", icon: Globe },
    { label: "Uptime", value: "99.99%", icon: ShieldCheck },
    { label: "Response Time", value: "0.3ms", icon: Zap },
  ];

  const activeFeature = features[activeTab];

  return (
    <section className="w-full bg-black py-24 px-4 md:px-8 text-white font-sans antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Hero Header */}
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 w-fit">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-xs font-semibold tracking-wider text-zinc-300">
              Powered by Next-Gen Architecture
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            Build at the Speed of Thought
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Experience lightning-fast deployments, intelligent scaling, and enterprise-grade reliability all in one platform.
          </p>
        </div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">

          {/* Large Hero Card - Interactive Features */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8 flex flex-col justify-between transition-all duration-300 hover:border-zinc-700">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-semibold">
                <Lightbulb className="w-3.5 h-3.5" />
                Smart Infrastructure
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-2 text-white">Core Features</h3>
              <p className="text-sm text-zinc-400">
                Click to explore what powers our platform
              </p>
            </div>

            {/* Feature Selector Grid */}
            <div className="grid grid-cols-2 gap-3 relative z-10">
              {features.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeTab === feature.id;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={cn(
                      "group/card relative overflow-hidden rounded-xl p-4 border transition-all duration-300 flex flex-col",
                      isActive
                        ? "bg-zinc-800 border-zinc-600"
                        : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5 mb-2 transition-colors",
                        isActive ? "text-white" : "text-zinc-500"
                      )}
                    />
                    <span className="text-xs font-bold text-white text-left">{feature.title}</span>
                    <span className="text-[10px] text-zinc-400 text-left mt-1 line-clamp-1">
                      {feature.stat}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content Area */}
            <div className="relative z-10 mt-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="flex-1">
                <p className="text-xs font-mono text-zinc-500 mb-1">Selected:</p>
                <p className="text-lg font-bold text-white">{activeFeature.title}</p>
                <p className="text-xs text-zinc-400 mt-1">{activeFeature.desc}</p>
              </div>
              <div className="text-3xl font-bold font-mono text-white mt-3">
                {activeFeature.stat}
              </div>
            </div>
          </div>

          {/* Metrics Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between transition-all duration-300 hover:border-zinc-700">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-zinc-800 border border-zinc-700 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs px-2 py-1 rounded-lg bg-zinc-800 text-zinc-300 font-semibold">
                  Live
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Performance</h3>
              <p className="text-xs text-zinc-400 mb-4">Real-time metrics</p>

              <div className="space-y-2">
                {metrics.map((metric, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedMetric(idx)}
                    className={cn(
                      "w-full text-left p-2 rounded-lg transition-all duration-200 border",
                      selectedMetric === idx
                        ? "bg-zinc-800 border-zinc-600"
                        : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                    )}
                  >
                    <p className="text-[10px] text-zinc-400">{metric.label}</p>
                    <div className="flex items-baseline justify-between mt-0.5">
                      <span className="text-sm font-bold text-white">{metric.value}</span>
                      <span className="text-[10px] text-zinc-300 font-semibold">
                        {metric.trend}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Integrations Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between transition-all duration-300 hover:border-zinc-700">
            <div className="relative z-10">
              <div className="p-2 bg-zinc-800 border border-zinc-700 rounded-lg w-fit mb-4">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Integrations</h3>
              <p className="text-xs text-zinc-400 mb-4">Popular stack support</p>

              <div className="grid grid-cols-3 gap-2">
                {integrations.map((int, idx) => (
                  <div
                    key={idx}
                    className="group/int p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 flex flex-col items-center gap-1 cursor-pointer"
                  >
                    <span className="text-xl group-hover/int:scale-125 transition-transform duration-200">
                      {int.abbr}
                    </span>
                    <p className="text-[9px] text-zinc-500 text-center">{int.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Terminal Demo Card */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between transition-all duration-300 hover:border-zinc-700">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-zinc-800 border border-zinc-700 rounded-lg">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white">Deploy Command</h3>
              </div>

              <div className="bg-black border border-zinc-800 rounded-lg p-4 font-mono text-[12px] leading-relaxed overflow-auto max-h-32 scrollbar-hide">
                {codeExample.split("\n").map((line, idx) => (
                  <div key={idx} className="flex gap-2">
                    <span className="text-zinc-600 select-none w-6 text-right">{idx + 1}</span>
                    <span
                      className={cn(
                        line.includes("//")
                          ? "text-zinc-600"
                          : line.includes("✓")
                          ? "text-zinc-300"
                          : line.includes("const") || line.includes("await")
                          ? "text-zinc-200"
                          : "text-zinc-300"
                      )}
                    >
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition-all duration-300 hover:border-zinc-700"
              >
                <Icon className="w-4 h-4 text-white mb-3 relative z-10" />
                <p className="text-xs text-zinc-400 relative z-10">{stat.label}</p>
                <p className="text-xl font-bold text-white mt-1 relative z-10">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Component;

