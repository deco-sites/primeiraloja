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
    <div class='flex items-center justify-center'>
      <a href={brand?.href} alt={brand?.alt} class='text-center'>
        <h1 class="font-bold">{brand?.name}</h1>
        {brand?.image && <img src={brand?.image} />}
      </a>
    </div>
  );
}
