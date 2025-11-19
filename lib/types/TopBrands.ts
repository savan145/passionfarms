/**
 * Types for TopBrands component
 */

export interface Brand {
  id: string;
  name: string;
  logo: string;
  width: number;
  height: number;
}

export interface TopBrandsProps {
  // Content customization
  title?: string;
  brands?: Brand[];

  // Styling customization
  sectionClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  brandGridClassName?: string;
  showDividers?: boolean;
}
