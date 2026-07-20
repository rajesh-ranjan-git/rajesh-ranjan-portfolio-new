import Link from "next/link";
import { BreadcrumbProps } from "@/types/props/common.props.types";

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="px-(--section-padding-x) md:pt-2">
      <ol className="flex flex-wrap items-center text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-primary hover:underline transition-colors hover:text-accent-blue"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="font-medium text-secondary"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="mx-2 text-secondary select-none">›</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
