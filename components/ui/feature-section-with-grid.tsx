"use client";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "BSC in Computer Science",
    issuer: "Miva University",
    description: "Bachelor's degree in Computer Science with a focus on software development, data analysis, system design and check on cybersecurity.",
    // link: "https://miva.university"
  },
  {
    title: "Frontend engineering",
    issuer: "Ekobit Academy",
    description: "Gained a solid foundation in HTML, CSS, and JavaScript. Learned to build responsive web interfaces and developed practical skills in UI design, layout structuring, and basic interactivity. This training laid the groundwork for my continued growth in frontend development.",
    // link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
  {
    title: "React Development Course",
    issuer: "Andela Learning Community",
    description: "Completed an immersive React training focused on building scalable, component-based user interfaces. Gained hands-on experience with hooks, state management, and routing while developing real-world applications and following industry best practices.",
    // link: "https://github.com/WaqasIshaque1/portfolio-template"
  },
 
];

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">ß
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
               Certified competencies and industry-focused specializations.
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
                {/* <a href={cert.link} className="text-purple text-sm font-semibold hover:underline">Verify Certificate</a> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
