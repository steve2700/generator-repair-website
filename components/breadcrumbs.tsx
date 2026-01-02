import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol
        className="flex items-center gap-2 text-sm text-muted-foreground"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {item.href ? (
              <>
                <Link href={item.href} className="hover:text-primary transition-colors" itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </Link>
                <meta itemProp="position" content={String(index + 1)} />
              </>
            ) : (
              <>
                <span className="text-foreground" itemProp="name">
                  {item.label}
                </span>
                <meta itemProp="position" content={String(index + 1)} />
              </>
            )}
            {index < items.length - 1 && <ChevronRight className="h-4 w-4" />}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
