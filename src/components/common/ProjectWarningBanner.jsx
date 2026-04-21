const ProjectWarningBanner = () => {
  return (
    <div className="bg-amber-100 border-b border-amber-300 text-amber-900">
      <div className="max-w-[1440px] mx-auto px-4 py-2 text-xs sm:text-sm font-medium text-center">
        Student project: This app is for educational/demo purposes only and is not affiliated with Coinbase.
      </div>
    </div>
  );
};

export default ProjectWarningBanner;
