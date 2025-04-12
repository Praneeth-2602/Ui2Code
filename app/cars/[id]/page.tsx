import { Metadata } from 'next';
import ProductDetail from '@/app/components/product-detail';
import img from '@/app/assets/mclaren.png';
import img2 from '@/app/assets/veloc.png';
import img3 from '@/app/assets/swamp.png';
import img4 from '@/app/assets/trice.png';

// Define props type
interface ProductPageProps {
  params: {
    id: string;
  };
}

const products = [
  {
    id: "1",
    name: `McLaren 840`,
    description: "High-quality Hot Wheels & Matchbox car clipart - perfect for party invites, kids crafts, and custom designs!",
    price: 50,
    imageSrc: img.src
  },
  {
    id: "2",
    name: 'Swamp Thing Truck',
    description: 'A rugged and powerful monster truck designed for off-road adventures and thrilling performances.',
    price: 75,
    imageSrc: img2.src
  },
  {
    id: "3",
    name: 'Triceratops',
    description: 'A dinosaur-themed car with a unique design inspired by the mighty Triceratops, perfect for collectors and kids alike.',
    price: 60,
    imageSrc: img4.src
  },
  {
    id: "4",
    name: 'Velociraptor Blue',
    description: 'A sleek and fast dinosaur-inspired car with a striking blue design, perfect for racing enthusiasts and collectors.',
    price: 65,
    imageSrc: img3.src
  }
];

export default async function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return <div className="text-center text-white mt-20">Product not found!</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'
      style={{
        boxShadow: "20px 20px 0px rgba(73,70,78,0.80)",
        filter: "blur(0px)",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 py-8 border rounded-lg bg-zinc-800/50">
        <ProductDetail {...product} />
      </div>
    </div>
  );
}
