const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="p-5 h-14 bg-background bg-black text-white">


      <div className="flex justify-center items-center">
        <p className="text-sm">© Made with ❤️ by Marvin {year}.</p>
      </div>
    </footer>
  );
}
