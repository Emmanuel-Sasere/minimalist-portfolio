import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Certification 1",
    issuer: "Issuer Name",
    description: "Description of the certification and what it covers.",
    link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
  {
    title: "Certification 2",
    issuer: "Issuer Name",
    description: "Description of the certification and what it covers.",
    link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
  {
    title: "Certification 3",
    issuer: "Issuer Name",
    description: "Description of the certification and what it covers.",
    link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
  {
    title: "Certification 4",
    issuer: "Issuer Name",
    description: "Description of the certification and what it covers.",
    link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
  {
    title: "Certification 5",
    issuer: "Issuer Name",
    description: "Description of the certification and what it covers.",
    link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
  {
    title: "Certification 6",
    issuer: "Issuer Name",
    description: "Description of the certification and what it covers.",
    link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
  {
    title: "Certification 7",
    issuer: "Issuer Name",
    description: "Description of the certification and what it covers.",
    link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
  {
    title: "Certification 8",
    issuer: "Issuer Name",
    description: "Description of the certification and what it covers.",
    link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
  {
    title: "Certification 9",
    issuer: "Issuer Name",
    description: "Description of the certification and what it covers.",
    link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
  {
    title: "Certification 10",
    issuer: "Issuer Name",
    description: "Description of the certification and what it covers.",
    link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
  {
    title: "Certification 11",
    issuer: "Issuer Name",
    description: "Description of the certification and what it covers.",
    link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
  {
    title: "Certification 12",
    issuer: "Issuer Name",
    description: "Description of the certification and what it covers.",
    link: "https://github.com/WaqasIshaque1/portfolio-template"
  }
];

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Certifications</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Professional Credentials
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                A collection of certifications and specializations in data science, machine learning, and IT.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col gap-2 border rounded-md p-4">
                <h3 className="text-xl tracking-tight">{cert.title}</h3>
                <p className="text-primary text-base font-medium">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
                <a href={cert.link} className="text-purple text-sm font-semibold hover:underline">Verify Certificate</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
