"use client";

import React from "react";
import Layout from "@/components/layout/Layout";

export default function HomePage() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-4 gradient-text animate-gradient">
          Stormbound Isles
        </h1>
        <p className="text-xl text-center max-w-xl mb-8">
          Welcome to Stormbound Isles - Project under development
        </p>
      </main>
    </Layout>
  );
}
