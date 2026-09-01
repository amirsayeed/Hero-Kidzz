import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";


export default async function Home() {
  return (
    <div className="space-y-20">
      <section><Banner></Banner></section>
      <section><Products></Products></section>
    </div>
  );
}
