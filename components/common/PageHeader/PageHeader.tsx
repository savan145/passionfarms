import React from "react";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backLink?: {
    href: string;
    label: string;
  };
  action?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  backLink,
  action,
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      {backLink && (
        <Link
          href={backLink.href}
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← {backLink.label}
        </Link>
      )}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
    </div>
  );
}
