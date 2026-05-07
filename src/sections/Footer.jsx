const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-zinc-500 text-sm">
          © 2026 Jagrit Bharara. All rights reserved.
        </p>

        <p className="text-zinc-600 text-sm">
          Built with React, Tailwind CSS & Docker.
        </p>

      </div>
    </footer>
  );
};

export default Footer;