/**
 * Renders a JSON-LD <script> block for structured data.
 *
 * Server-rendered into the static HTML (no client JS), so crawlers and AI
 * answer engines see it in the initial payload. Pass any schema.org object.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; we escape "<" to avoid any
      // chance of breaking out of the script context.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
