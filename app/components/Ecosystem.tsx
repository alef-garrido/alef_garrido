
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
          <a href={linkHref}>{linkText}</a>
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
      linkHref: "#digital-maze",
      color: "bg-primary"
    },
    {
      title: "Dinami_CO",
      description: "Hybrid events that combine intellectual stimulation with social connection.",
      icon: <Users className="h-6 w-6 text-black" />,
      linkText: "Request Invitation",
      linkHref: "#dinamico",
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
      linkHref: "#nomad-proxy",
      color: "bg-hybrid-green"
    }
  ];

  return (
    <section id="ecosystem" className="p-16 bg-texture-head">
      <div className=" ">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl">My Service Ecosystem</h2>
          <p className="text-black">
            Four interconnected initiatives that bring the Going Hybrid philosophy to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
