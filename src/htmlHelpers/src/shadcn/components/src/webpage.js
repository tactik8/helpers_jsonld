/**
 * Express / Server-Side Webpage Wrapper Template
 * Updated for Tailwind CSS v4 runtime dark mode compatibility.
 * 
 * @param {Object} props
 * @param {string} [props.title='']
 * @param {string} [props.headContent='']
 * @param {string} [props.header='']
 * @param {string} [props.footer='']
 * @param {string} [props.content='']
 * @param {string} [props.breadcrumb='']
 * @returns {string} Fully structured HTML document string
 */
export function Webpage({ title, headContent, header, footer, content, breadcrumb }) {
  return `
    <!DOCTYPE html>
    <html lang="en" class="dark">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title || ''}</title>
      <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
      <style type="text/tailwindcss">
        @variant dark (&:where(.dark, .dark *));

        @theme inline {
          --color-border: hsl(var(--border));
          --color-input: hsl(var(--input));
          --color-ring: hsl(var(--ring));
          --color-background: hsl(var(--background));
          --color-foreground: hsl(var(--foreground));

          --color-primary: hsl(var(--primary));
          --color-primary-foreground: hsl(var(--primary-foreground));

          --color-secondary: hsl(var(--secondary));
          --color-secondary-foreground: hsl(var(--secondary-foreground));

          --color-destructive: hsl(var(--destructive));
          --color-destructive-foreground: hsl(var(--destructive-foreground));

          --color-muted: hsl(var(--muted));
          --color-muted-foreground: hsl(var(--muted-foreground));

          --color-accent: hsl(var(--accent));
          --color-accent-foreground: hsl(var(--accent-foreground));

          --color-popover: hsl(var(--popover));
          --color-popover-foreground: hsl(var(--popover-foreground));

          --color-card: hsl(var(--card));
          --color-card-foreground: hsl(var(--card-foreground));

          --radius-lg: var(--radius);
        }

        :root {
          --background: 0 0% 100%;
          --foreground: 222.2 84% 4.9%;
          --card: 0 0% 100%;
          --card-foreground: 222.2 84% 4.9%;
          --popover: 0 0% 100%;
          --popover-foreground: 222.2 84% 4.9%;
          --primary: 222.2 47.4% 11.2%;
          --primary-foreground: 210 40% 98%;
          --secondary: 210 40% 96.1%;
          --secondary-foreground: 222.2 47.4% 11.2%;
          --muted: 210 40% 96.1%;
          --muted-foreground: 215.4 16.3% 46.9%;
          --accent: 210 40% 96.1%;
          --accent-foreground: 222.2 47.4% 11.2%;
          --destructive: 0 84.2% 60.2%;
          --destructive-foreground: 210 40% 98%;
          --border: 214.3 31.8% 91.4%;
          --input: 214.3 31.8% 91.4%;
          --ring: 222.2 84% 4.9%;
          --radius: 0.5rem;
        }

        .dark {
          --background: 222.2 84% 4.9%;
          --foreground: 210 40% 98%;
          --card: 222.2 84% 4.9%;
          --card-foreground: 210 40% 98%;
          --popover: 222.2 84% 4.9%;
          --popover-foreground: 210 40% 98%;
          --primary: 210 40% 98%;
          --primary-foreground: 222.2 47.4% 11.2%;
          --secondary: 217.2 32.6% 17.5%;
          --secondary-foreground: 210 40% 98%;
          --muted: 217.2 32.6% 17.5%;
          --muted-foreground: 215 20.2% 65.1%;
          --accent: 217.2 32.6% 17.5%;
          --accent-foreground: 210 40% 98%;
          --destructive: 0 62.8% 30.6%;
          --destructive-foreground: 210 40% 98%;
          --border: 217.2 32.6% 17.5%;
          --input: 217.2 32.6% 17.5%;
          --ring: 212.7 26.8% 83.9%;
          --radius: 0.5rem;
        }
      </style>
      ${headContent || ''}
    </head>
    <body class="bg-background text-foreground min-h-screen w-full flex flex-col justify-between antialiased">

      <!-- Header Target: Spans full width -->
      <div id="header-container" class="w-full">${header || ''}</div>

      <!-- Main Content Target: Flex-1 fills available vertical space -->
      <main class="w-full flex-1 flex flex-col items-center justify-start p-6 md:p-8">
        <div id="main-content" class="w-full max-w-6xl space-y-8">
          ${breadcrumb || ''}
          ${content || ''}
        </div>
      </main>

      <!-- Footer Target: Spans full width at bottom -->
      <div id="footer-container" class="w-full">${footer || ''}</div>

    </body>
    </html>
  `.trim();
}