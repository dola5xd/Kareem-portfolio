function AboutBox({ children }: { children: string }) {
  return (
    <div className="px-4 py-4 rounded-lg md:max-w-2xl sm:text-2xl md:text-2xl bg-primary-900 md:p-7 text-start text-pretty text-primary-50 box">
      {children}
    </div>
  );
}

export default AboutBox;
