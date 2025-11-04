const clients = [
  { name: "PetCaart", industry: "SaaS-Ecommerce" },
  { name: "Ashapura Bajaj", industry: "Agency" },
  { name: "Shivaay", industry: "Coal Corporation" },
  { name: "Anjani Enterprise", industry: "Coal Corporation" },
  { name: "BrandForge", industry: "Design" },
  { name: "Shree Niti Vijay", industry: "Restaurant" },
];

const Clients = () => {
  return (
    <section className="py-12 md:py-16 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-2">
            Trusted by Ambitious Brands
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Building the future with innovative startups and creators
          </p>
        </div>

        {/* Clients Grid - 6 columns (3x2 on mobile, 6x1 on desktop) */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 md:p-6 bg-white border border-border rounded-lg hover:border-brand-blue/40 hover:bg-brand-light/20 transition-all duration-300 premium-shadow"
            >
              <div className="text-center">
                <p className="text-base md:text-lg font-bold text-brand-primary mb-1">
                  {client.name}
                </p>
                <p className="text-xs text-muted-foreground">{client.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
