export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-[70px] pb-9 px-[8vw]">
      <div className="flex justify-between flex-wrap gap-10 max-w-[1200px] mx-auto">
        <div>
          <div className="font-cormorant text-[24px] tracking-[3px]">
            HAVILAH
            <em className="font-great-vibes font-normal text-gold block text-[19px] tracking-[1px] mt-1">
              Building dreams, shaping communities
            </em>
          </div>
        </div>
        <div className="text-[12.5px] tracking-[1.5px] leading-[2.3] text-white/70 uppercase">
          <b className="text-white font-medium block mb-1.5">Visit</b>
          Eyebrow Area
          <br />
          Lekki, Lagos State
          <br />
          Nigeria
        </div>
        <div className="text-[12.5px] tracking-[1.5px] leading-[2.3] text-white/70 uppercase">
          <b className="text-white font-medium block mb-1.5">Talk</b>
          0816 264 9021
          <br />
          <a href="mailto:hr.havilah@gmail.com">hr.havilah@gmail.com</a>
        </div>
        <div className="text-[12.5px] tracking-[1.5px] leading-[2.3] text-white/70 uppercase">
          <b className="text-white font-medium block mb-1.5">Explore</b>
          <a href="/projects">Properties</a>
          <br />
          <a href="/management">Management</a>
          <br />
          <a href="/contact">Contact Us</a>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-14 pt-[22px] border-t border-white/12 flex justify-between flex-wrap gap-2.5 text-[11.5px] tracking-[1.5px] text-white/45 uppercase">
        <span>&copy; 2026 Havilah Development &amp; Management Services Limited</span>
        <span>Nigeria</span>
      </div>
    </footer>
  );
}
