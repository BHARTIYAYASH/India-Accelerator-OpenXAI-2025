"use client";

import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  compact?: boolean;
}

const languages = [
  { code: 'eng', name: 'English' },
  { code: 'spa', name: 'Spanish' },
  { code: 'fra', name: 'French' },
  { code: 'deu', name: 'German' },
  { code: 'ita', name: 'Italian' },
  { code: 'por', name: 'Portuguese' },
  { code: 'rus', name: 'Russian' },
  { code: 'chi_sim', name: 'Chinese (Simplified)' },
  { code: 'chi_tra', name: 'Chinese (Traditional)' },
  { code: 'jpn', name: 'Japanese' },
  { code: 'kor', name: 'Korean' },
  { code: 'ara', name: 'Arabic' },
  { code: 'hin', name: 'Hindi' },
  { code: 'tha', name: 'Thai' },
  { code: 'vie', name: 'Vietnamese' },
];

export default function LanguageSelector({ selectedLanguage, onLanguageChange, compact = false }: LanguageSelectorProps) {
  if (compact) {
    return (
      <div className="flex items-center space-x-2">
        <Globe className="h-4 w-4 text-muted-foreground" />
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="bg-transparent border-none text-sm text-foreground focus:ring-0 focus:outline-none cursor-pointer"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code} className="bg-background text-foreground">
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="neo-card rounded-xl border border-border p-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-foreground">
          <Globe className="h-5 w-5" />
          <span className="font-medium">Language:</span>
        </div>
        
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="flex-1 max-w-xs px-3 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}