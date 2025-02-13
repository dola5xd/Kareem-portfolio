function AboutBox({ children }: { children: string }) {
  return (
    <div className="px-4 py-4 rounded-lg sm:text-2xl md:text-4xl bg-primary-900 sm:bg-blue-zodiac-500 md:p-10 text-start text-pretty text-primary-50 box">
      {children}
    </div>
  );
}

export default AboutBox;
