"use client";

import {
  Code,
  Database,
  Figma,
  FileCode,
  Github,
  Globe,
  Layers,
  Cloud,
  ChartLine,
  Lightbulb,
  Palette,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Technical Skills with proficiency levels
const technicalSkills = [
  { name: "JavaScript/TypeScript", proficiency: 95 },
  { name: "React.js", proficiency: 90 },
  { name: "Node.js", proficiency: 85 },
  { name: "RESTful APIs", proficiency: 88 },
  { name: "Version Control (Git)", proficiency: 92 },
  { name: "Software Architecture", proficiency: 80 },
  { name: "Debugging", proficiency: 90 },
  { name: "Agile Methodologies", proficiency: 85 },
  { name: "Code Optimization", proficiency: 88 },
  { name: "Cross-browser Compatibility", proficiency: 82 },
];

// Tools categorized by type
const tools = [
  {
    category: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    items: [
      { name: "React", icon: <Code /> },
      { name: "Next.js", icon: <FileCode /> },
      { name: "TypeScript", icon: <FileCode /> },
      { name: "Tailwind CSS", icon: <Palette /> },
      { name: "ShadeCN UI", icon: <Palette /> },
      { name: "Redux", icon: <Layers /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5" />,
    items: [
      { name: "Node.js", icon: <Server /> },
      { name: "Express", icon: <Server /> },
      { name: "PostgreSQL", icon: <Database /> },
      { name: "MongoDB", icon: <Database /> },
      { name: "GraphQL", icon: <Code /> },
      { name: "REST API", icon: <Globe /> },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Terminal className="h-5 w-5" />,
    items: [
      { name: "Git & GitHub", icon: <Github /> },
      { name: "Docker", icon: <Terminal /> },
      { name: "AWS", icon: <Server /> },
      { name: "CI/CD", icon: <Terminal /> },
      { name: "Jest", icon: <Terminal /> },
      { name: "Figma", icon: <Figma /> },
    ],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-5 w-5" />,
    items: [
      { name: "React Native", icon: <Smartphone /> },
      { name: "Flutter", icon: <Smartphone /> },
      { name: "iOS", icon: <Smartphone /> },
      { name: "Android", icon: <Smartphone /> },
      { name: "Firebase", icon: <Database /> },
      { name: "App Store Connect", icon: <Globe /> },
    ],
  },
  
];

export default function SkillsDisplay() {
  // Function to determine skill level label
  const getSkillLevel = (proficiency: number) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Advanced";
    if (proficiency >= 70) return "Proficient";
    if (proficiency >= 50) return "Intermediate";
    return "Beginner";
  };

  // Function to get color class based on proficiency
  const getColorClass = (proficiency: number) => {
    if (proficiency >= 90) return "text-purple";
    if (proficiency >= 80) return "text-primary";
    if (proficiency >= 70) return "text-indigo-400";
    if (proficiency >= 50) return "text-amber-400";
    return "text-muted-foreground";
  };

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary mx-auto px-3 py-1 text-xs font-medium tracking-wide uppercase"
          >
            My Toolkit
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            A comprehensive overview of my technical skills, proficiency levels,
            and the tools I use to create exceptional digital experiences.
          </p>
        </div>

        <Tabs defaultValue="skills" className="max-w-4x mx-auto">
          <TabsList className="grid h-fit w-full grid-cols-1 md:grid-cols-2 bg-muted">
            <TabsTrigger value="skills" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#3A2492] data-[state=active]:via-[#3A2492] data-[state=active]:to-[#CBACF9] data-[state=active]:text-white">Technical & Professional Skills</TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#3A2492] data-[state=active]:via-[#3A2492] data-[state=active]:to-[#CBACF9] data-[state=active]:text-white">Tools & Technologies</TabsTrigger>
          </TabsList>

          {/* Technical Skills Tab */}
          <TabsContent value="skills" className="mt-6">
            <div className="bg-card rounded-xl border p-6">
              <h3 className="mb-4 text-xl font-semibold">
                <Lightbulb className="text-primary mr-2 inline h-5 w-5" />
                Skill Proficiency Levels
              </h3>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{skill.name}</p>
                      <span
                        className={cn(
                          "text-sm font-semibold",
                          getColorClass(skill.proficiency),
                        )}
                      >
                        {getSkillLevel(skill.proficiency)}
                      </span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Tools & Technologies Tab */}
          <TabsContent value="tools" className="mt-6">
            <div className="bg-card rounded-xl border p-6">
              <h3 className="mb-6 text-xl font-semibold">
                <Terminal className="text-primary mr-2 inline h-5 w-5" />
                Tools & Technologies
              </h3>

              <div className="grid gap-8 sm:grid-cols-2">
                {tools.map((toolCategory) => (
                  <div
                    key={toolCategory.category}
                    className="space-y-4 rounded-lg border p-4"
                  >
                    <h4 className="flex items-center gap-2 font-medium">
                      {toolCategory.icon}
                      {toolCategory.category}
                    </h4>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {toolCategory.items.map((tool) => (
                        <div
                          key={tool.name}
                          className="bg-muted/40 hover:border-muted flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm transition-colors"
                        >
                          <span className="text-primary">{tool.icon}</span>
                          {tool.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
