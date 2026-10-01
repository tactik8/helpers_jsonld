/**
 * shadcn.js - Pure Vanilla JavaScript & Tailwind CSS Component Library
 * Standard Express.js HTML string rendering compliant
 */

/**
 * Button Component
 * @param {Object} props
 * @param {string} [props.children='']
 * @param {string} [props.variant='default'] - 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
 * @param {string} [props.size='default'] - 'default' | 'sm' | 'lg' | 'icon'
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 */
export function Button({ children = '', variant = 'default', size = 'default', className = '', attrs = '' } = {}) {
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  const sizes = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-10 rounded-md px-8',
    icon: 'h-9 w-9',
  };

  return `
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}" ${attrs}>
      ${children}
    </button>
  `.trim();
}

/**
 * Badge Component
 * @param {Object} props
 * @param {string} [props.children='']
 * @param {string} [props.variant='default'] - 'default' | 'secondary' | 'destructive' | 'outline'
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 */
export function Badge({ children = '', variant = 'default', className = '', attrs = '' } = {}) {
  const variants = {
    default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
    secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
    outline: 'text-foreground',
  };

  return `
    <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant] || variants.default} ${className}" ${attrs}>
      ${children}
    </div>
  `.trim();
}

/**
 * Card Component
 * @param {Object} props
 * @param {string} [props.title='']
 * @param {string} [props.description='']
 * @param {string} [props.children='']
 * @param {string} [props.footer='']
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 */
export function Card({ title = '', description = '', children = '', footer = '', className = '', attrs = '' } = {}) {
  return `
    <div class="rounded-xl border bg-card text-card-foreground shadow ${className}" ${attrs}>
      ${title || description ? `
        <div class="flex flex-col space-y-1.5 p-6 border-b border-border">
          ${title ? `<h3 class="font-semibold leading-none tracking-tight text-xl">${title}</h3>` : ''}
          ${description ? `<p class="text-sm text-muted-foreground">${description}</p>` : ''}
        </div>
      ` : ''}
      <div class="p-6">${children}</div>
      ${footer ? `<div class="flex items-center p-6 pt-0 border-t border-border mt-4">${footer}</div>` : ''}
    </div>
  `.trim();
}

/**
 * JsonEditor Component
 * Designed to safely execute when generated server-side by Express.js
 * 
 * @param {Object} props
 * @param {string} [props.id] - Unique identifier for the instance
 * @param {string} [props.endpoint] - Target URL for the POST request
 * @param {Object|string} [props.initialData] - Initial JSON data
 * @param {Object} [props.headers] - Default request headers
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 */
export function JsonEditor({
  id = `json_editor_${Math.random().toString(36).substring(2, 9)}`,
  endpoint = '',
  initialData = { title: "Sample Record", active: true },
  headers = { "Content-Type": "application/json" },
  className = '',
  attrs = ''
} = {}) {
  // Ensure function-safe identifier (strips hyphens, spaces, and invalid JS function tokens)
  const safeId = id.replace(/[^a-zA-Z0-9_]/g, '_');

  const formattedJson = typeof initialData === 'string'
    ? initialData
    : JSON.stringify(initialData, null, 2);

  const formattedHeaders = JSON.stringify(headers, null, 2);

  // Global browser execution script namespace bound via window[safeId]
  const clientScript = `
    <script>
      (function() {
        var safeId = "${safeId}";
        
        window[safeId + "_validate"] = function() {
          var textarea = document.getElementById(safeId + "_textarea");
          var statusBadge = document.getElementById(safeId + "_status");
          var submitBtn = document.getElementById(safeId + "_submit_btn");

          try {
            JSON.parse(textarea.value);
            statusBadge.className = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-emerald-500/15 text-emerald-600 dark:text-emerald-400";
            statusBadge.innerText = "Valid JSON";
            if (submitBtn) submitBtn.removeAttribute("disabled");
            return true;
          } catch (err) {
            statusBadge.className = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-destructive/15 text-destructive";
            statusBadge.innerText = "Invalid JSON";
            if (submitBtn) submitBtn.setAttribute("disabled", "true");
            return false;
          }
        };

        window[safeId + "_format"] = function() {
          var textarea = document.getElementById(safeId + "_textarea");
          try {
            var parsed = JSON.parse(textarea.value);
            textarea.value = JSON.stringify(parsed, null, 2);
            window[safeId + "_validate"]();
          } catch (err) {
            alert("Cannot format invalid JSON.");
          }
        };

        window[safeId + "_submit"] = async function(event) {
          event.preventDefault();

          var textarea = document.getElementById(safeId + "_textarea");
          var endpointInput = document.getElementById(safeId + "_endpoint");
          var headersTextarea = document.getElementById(safeId + "_headers");
          var responseContainer = document.getElementById(safeId + "_response_container");
          var responseOutput = document.getElementById(safeId + "_response");
          var responseBadge = document.getElementById(safeId + "_response_badge");
          var submitBtn = document.getElementById(safeId + "_submit_btn");

          if (!window[safeId + "_validate"]()) return;

          var payload;
          var customHeaders = {};

          try {
            payload = JSON.parse(textarea.value);
          } catch (e) {
            alert("Invalid JSON Body");
            return;
          }

          try {
            if (headersTextarea.value.trim()) {
              customHeaders = JSON.parse(headersTextarea.value);
            }
          } catch (e) {
            alert("Invalid Custom Headers JSON");
            return;
          }

          var targetUrl = endpointInput.value.trim();
          if (!targetUrl) {
            alert("Please specify a valid POST URL endpoint.");
            return;
          }

          submitBtn.setAttribute("disabled", "true");
          var originalBtnText = submitBtn.innerHTML;
          submitBtn.innerHTML = '<span class="animate-spin inline-block mr-2">⚙</span> Posting...';

          try {
            var response = await fetch(targetUrl, {
              method: "POST",
              headers: Object.assign({ "Content-Type": "application/json" }, customHeaders),
              body: JSON.stringify(payload)
            });

            var statusText = response.status + " " + response.statusText;
            var responseData;

            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              responseData = JSON.stringify(await response.json(), null, 2);
            } else {
              responseData = await response.text();
            }

            responseContainer.classList.remove("hidden");
            responseOutput.textContent = responseData || "(Empty Response)";

            if (response.ok) {
              responseBadge.className = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-emerald-500/15 text-emerald-600 dark:text-emerald-400";
              responseBadge.textContent = statusText;
            } else {
              responseBadge.className = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-destructive/15 text-destructive";
              responseBadge.textContent = statusText;
            }
          } catch (err) {
            responseContainer.classList.remove("hidden");
            responseBadge.className = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-destructive/15 text-destructive";
            responseBadge.textContent = "Network Error";
            responseOutput.textContent = err.message || "Failed to execute fetch request.";
          } finally {
            submitBtn.removeAttribute("disabled");
            submitBtn.innerHTML = originalBtnText;
          }
        };
      })();
    </script>
  `.trim();

  const bodyContent = `
    <form id="${safeId}_form" onsubmit="window.${safeId}_submit(event)" class="space-y-4">
      <div>
        <label for="${safeId}_endpoint" class="block text-sm font-medium mb-1.5 text-foreground">
          Target POST URL Endpoint
        </label>
        <input 
          type="url" 
          id="${safeId}_endpoint"
          value="${endpoint}"
          required
          placeholder="https://api.example.com/v1/records" 
          class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <details class="group">
        <summary class="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground select-none py-1">
          ▶ Request Headers (JSON)
        </summary>
        <div class="mt-2">
          <textarea 
            id="${safeId}_headers"
            rows="3"
            class="flex w-full rounded-md border border-input bg-muted px-3 py-2 text-xs font-mono shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >${formattedHeaders}</textarea>
        </div>
      </details>

      <div>
        <div class="flex items-center justify-between mb-1.5">
          <label for="${safeId}_textarea" class="block text-sm font-medium text-foreground">
            JSON Payload
          </label>
          <div class="flex items-center space-x-2">
            <span id="${safeId}_status" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              Valid JSON
            </span>
            ${Button({
              children: 'Format',
              variant: 'outline',
              size: 'sm',
              attrs: `type="button" onclick="window.${safeId}_format()"`
            })}
          </div>
        </div>
        <textarea 
          id="${safeId}_textarea"
          rows="10"
          oninput="window.${safeId}_validate()"
          class="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm font-mono shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >${formattedJson}</textarea>
      </div>

      <div class="flex justify-end space-x-2">
        ${Button({
          children: 'Submit Record',
          variant: 'default',
          attrs: `id="${safeId}_submit_btn" type="submit"`
        })}
      </div>
    </form>

    <div id="${safeId}_response_container" class="mt-6 hidden border-t border-border pt-4">
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-semibold text-foreground">Server Response</h4>
        <span id="${safeId}_response_badge" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold"></span>
      </div>
      <pre id="${safeId}_response" class="p-3 bg-muted rounded-md text-xs font-mono overflow-x-auto max-h-60 border border-border text-muted-foreground"></pre>
    </div>

    ${clientScript}
  `.trim();

  return Card({
    title: 'JSON Record Editor',
    description: 'View, edit, and post JSON records directly to your backend service.',
    children: bodyContent,
    className,
    attrs
  });
}