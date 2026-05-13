import { Separator } from "@/components/ui/separator";

interface ShowcaseSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ShowcaseSection({
  title,
  description,
  children,
  className,
}: ShowcaseSectionProps) {
  return (
    <section className={`space-y-4 ${className || ""}`}>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <Separator />
      <div className="space-y-4">{children}</div>
    </section>
  );
}
