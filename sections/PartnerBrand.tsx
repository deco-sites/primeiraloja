export interface Brand {
    name: string;
    href: string;
    image?: string;
    alt?: string;
  }

export interface Props {
    brand: Brand;
}
  
export default function PartnerBrand({ brand }: Props) {
    return (
        <div>
            <a href={brand?.href} alt={brand?.alt}>
                <h1 class="font-bold">{brand?.name}</h1>
                {brand?.image && <img src={brand?.image} />}
            </a>
        </div>
    );
}