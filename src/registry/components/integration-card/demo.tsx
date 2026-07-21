import { IntegrationsCard, type IntegrationItem } from "./integration-card";
import { Slack, Github, Figma, Chrome, Mail, Calendar } from "lucide-react";

const items: IntegrationItem[] = [
  {
    id: "slack",
    name: "Slack",
    entities: "Channels, Messages",
    description: "Send messages and receive events from Slack workspaces.",
    tags: ["Chat", "Notifications"],
    triggers: 4,
    actions: 8,
    available: true,
    icon: <Slack className="h-5 w-5" />,
  },
  {
    id: "github",
    name: "GitHub",
    entities: "Repos, PRs, Issues",
    description: "Automate issues, pull requests, and CI events.",
    tags: ["Dev", "Source"],
    triggers: 12,
    actions: 9,
    available: true,
    icon: <Github className="h-5 w-5" />,
  },
  {
    id: "figma",
    name: "Figma",
    entities: "Files, Comments",
    description: "Track design updates and export assets automatically.",
    tags: ["Design"],
    triggers: 3,
    actions: 2,
    available: false,
    icon: <Figma className="h-5 w-5" />,
  },
  {
    id: "gmail",
    name: "Gmail",
    entities: "Threads, Labels",
    description: "Trigger flows from incoming email and send replies.",
    tags: ["Email"],
    triggers: 5,
    actions: 6,
    available: true,
    icon: <Mail className="h-5 w-5" />,
  },
  {
    id: "calendar",
    name: "Google Calendar",
    entities: "Events, Invites",
    description: "Create events and react to calendar changes.",
    tags: ["Productivity"],
    triggers: 4,
    actions: 5,
    available: true,
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    id: "chrome",
    name: "Chrome",
    entities: "Tabs, Bookmarks",
    description: "Capture browser events into your workflows.",
    tags: ["Browser"],
    triggers: 2,
    actions: 3,
    available: false,
    icon: <Chrome className="h-5 w-5" />,
  },
];

export default function IntegrationCardDemo() {
  return (
    <div className="flex items-center justify-center w-full p-6">
      <IntegrationsCard title="Integrations" items={items} />
    </div>
  );
}