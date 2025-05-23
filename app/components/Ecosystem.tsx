import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Book, Users, Layers, Grid2X2 } from 'lucide-react';
import { Button } from "./ui/button";

interface EcosystemItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
  linkHref: string;
  color: string;
}

const EcosystemItem: React.FC<EcosystemItemProps> = ({ 
  title, 
  description, 
  icon, 
  linkText, 
  linkHref,
  color
}) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <div className={`w-12 h-12 flex items-center justify-center  ${color} mb-4`}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-black">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild>
          <a
            className="transition-colors duration-200 hover:text-yellow-500 hover:animate-pulse"
            href={linkHref}
          >
            {linkText}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Ecosystem: React.FC = () => {
  const ecosystemItems = [
    {
      title: "Digital Maze",
      description: "A print-and-play game designed to bring digital concepts into the physical world.",
      icon: <Book className="h-6 w-6 text-black" />,
      linkText: "Download Free",
      linkHref: "/api/download/digital-maze",
      color: "bg-primary"
    },
    {
      title: "Dinami_CO",
      description: "Hybrid events that combine intellectual stimulation with social connection.",
      icon: <Users className="h-6 w-6 text-black" />,
      linkText: "Request Invitation",
      linkHref: "/dinami_co",
      color: "bg-secondary"
    },
    {
      title: "Xnor_IA",
      description: "Print and Run digital solutions for strategic technology integration.",
      icon: <Layers className="h-6 w-6 text-black" />,
      linkText: "Learn More",
      linkHref: "#xnoria",
      color: "bg-hybrid-blue"
    },
    {
      title: "nomad_proxy",
      description: "Services designed to support your hybrid lifestyle and workflow.",
      icon: <Grid2X2 className="h-6 w-6 text-black" />,
      linkText: "Explore Services",
      linkHref: "https://nomad-proxy.vercel.app/",
      color: "bg-hybrid-green"
    }
  ];

  return (
    <section id="ecosystem" className="p-16 bg-texture-y bg-center text-black">
      <div className=" ">
        <div className="text-left text-white max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-display text-3xl sm:text-xl">My Service Ecosystem</h2>
          <p className="text-2xl font-mono text-black">
            <b>The endless content creation.<br /> The pressure to be &apos;always on&apos;.</b> <br />
            You&apos;re pouring your soul into the void, <br />while the platforms profit from your exhaustion.
            <br />
            <br />
            I present you with Four interconnected initiatives that bring the bridge to your balance and growth, the core of Going Hybrid philosophy sparks into life.
          </p>
        </div>
        
        <div className="font-mono grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemItems.map((item) => (
            <EcosystemItem
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              linkText={item.linkText}
              linkHref={item.linkHref}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
