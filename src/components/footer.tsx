// src/components/Footer.jsx
import {FaGithub,FaSlack,FaLinkedin,FaCommentDots,FaYoutube,} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-gray px-6 py-4 mt-8">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div>
          <span className="font-body text-muted-foreground text-sm">
            © Zindua Coding School LTD 2025
          </span>
        </div>

      
        <div className="flex gap-6 my-3 md:my-0">
          {['Terms', 'Privacy', 'Contract'].map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-muted-foreground text-sm hover:text-red transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-muted-foreground hover:text-red transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-red transition-colors"
            aria-label="Slack"
          >
            <FaSlack size={20} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-red transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-red transition-colors"
            aria-label="Chat"
          >
            <FaCommentDots size={20} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-red transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}