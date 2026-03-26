
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Send, 
  Briefcase, 
  Sun, 
  Moon, 
  Download, 
  Menu, 
  X,
  Code2,
  Database,
  Cloud,
  Layout,
  Cpu,
  Layers,
  Box,
  BarChart3,
  Terminal,
  Figma
} from 'lucide-react';

export const GithubIcon = ({ size = 20 }) => <Github size={size} />;
export const LinkedInIcon = ({ size = 20 }) => <Linkedin size={size} />;
export const MailIcon = ({ size = 20 }) => <Mail size={size} />;
export const ExternalLinkIcon = ({ size = 16 }) => <ExternalLink size={size} />;
export const SendIcon = ({ size = 20 }) => <Send size={size} />;
export const BriefcaseIcon = ({ size = 20 }) => <Briefcase size={size} />;
export const SunIcon = ({ size = 20 }) => <Sun size={size} />;
export const MoonIcon = ({ size = 20 }) => <Moon size={size} />;
export const DownloadIcon = ({ size = 20 }) => <Download size={size} />;
export const MenuIcon = ({ size = 24 }) => <Menu size={size} />;
export const XIcon = ({ size = 24 }) => <X size={size} />;

// Tech Icons mapping to Lucide icons for a cleaner look
export const ReactIcon = () => <Code2 size={24} />;
export const TSIcon = () => <Terminal size={24} />;
export const TailwindIcon = () => <Layout size={24} />;
export const NodeIcon = () => <Cpu size={24} />;
export const AWSIcon = () => <Cloud size={24} />;
export const FigmaIcon = () => <Figma size={24} />;
export const NextIcon = () => <Layers size={24} />;
export const PostgresIcon = () => <Database size={24} />;
export const DockerIcon = () => <Box size={24} />;
export const D3Icon = () => <BarChart3 size={24} />;

export const TechIcon = ({ name }) => {
  const Icons = {
    ReactIcon, TSIcon, TailwindIcon, NodeIcon, AWSIcon, FigmaIcon, NextIcon, PostgresIcon, DockerIcon, D3Icon
  };
  const Icon = Icons[name] || BriefcaseIcon;
  return <Icon />;
};
