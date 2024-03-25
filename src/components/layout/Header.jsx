import Button from "../ui/Button";
import Navbar from "../ui/Navbar";

export default function Header() {
  return (
    <header className="bg-primary text-white h-16 border-b border-lightGray sticky top-0 z-50">
      <div className="flex justify-between items-center h-full container mx-auto px-12">
        <h1 className="font-medium text-xl"><a href="#">{`<AlexandreTonin/>`}</a></h1>
        <Navbar />
        <Button text="Entrar em contato"/>
      </div>
    </header>
  );
}
