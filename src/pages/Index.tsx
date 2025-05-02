
import React from 'react';
import Header from '@/components/Header';
import EmissionStatCards from '@/components/EmissionStatCards';
import EmissionsGraph from '@/components/EmissionsGraph';
import EmissionSourcesPieChart from '@/components/EmissionSourcesPieChart';
import MitigationStrategies from '@/components/MitigationStrategies';
import CarbonFootprintCalculator from '@/components/CarbonFootprintCalculator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Tracking India's Carbon Footprint
              </h1>
              <p className="text-lg text-muted-foreground">
                Monitor real-time emissions, understand the sources, and learn about mitigation strategies
              </p>
            </div>
            
            <EmissionStatCards />
          </div>
        </section>
        
        <section className="py-12" id="dashboard">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">Live Emissions Dashboard</h2>
            <div className="mb-8">
              <EmissionsGraph />
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-muted/50" id="sources">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">Emission Sources & Mitigation</h2>
            <div className="mb-8">
              <EmissionSourcesPieChart />
            </div>
            
            <div className="mt-12">
              <MitigationStrategies />
            </div>
          </div>
        </section>
        
        <section className="py-12" id="calculator">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">Personal Impact</h2>
            <CarbonFootprintCalculator />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
