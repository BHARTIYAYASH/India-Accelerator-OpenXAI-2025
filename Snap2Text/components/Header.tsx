import { FileText } from 'lucide-react';
import { PanelLeft, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  onToggleSidebar: () => void;
}

export default function Header({ selectedLanguage, onLanguageChange, onToggleSidebar }: HeaderProps) {
  return (
    <header className="glass border-b border-border/50 shadow-sm sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onToggleSidebar}
              className="p-2 hover:bg-white/20 dark:hover:bg-black/20 rounded-lg transition-all duration-300 interactive-scale group"
              title="Toggle sidebar"
            >
              <PanelLeft className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
            </button>
            <div className="bg-gradient-to-br from-primary to-primary/80 p-3 rounded-xl shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FileText className="h-6 w-6 text-white relative z-10" />
              <Sparkles className="h-3 w-3 text-white/60 absolute top-1 right-1 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                HandScript OCR
              </h1>
              <p className="text-sm text-muted-foreground flex items-center space-x-1">
                <span>Convert handwritten notes to digital text</span>
                <span className="w-1 h-1 bg-primary rounded-full animate-pulse"></span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <LanguageSelector 
              selectedLanguage={selectedLanguage}
              onLanguageChange={onLanguageChange}
              compact={true}
            />
            <div className="w-px h-6 bg-border/50"></div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}