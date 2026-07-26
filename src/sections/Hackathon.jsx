const Hackathon = () => {
  return (
    <div className="xl:col-span-2">
      <div className="grid-container">
        <p className="section-kicker">Beyond code</p>
        <h3 className="grid-headtext text-xl">Collaboration & Teamwork</h3>
        <p className="grid-subtext">I enjoy turning ambiguous ideas into useful products with multidisciplinary teams — especially when there is a difficult problem to solve.</p>
        <div className="grid sm:grid-cols-3 gap-3 mt-auto">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-2xl font-semibold text-blue-300">1st</p>
            <p className="text-xs text-white-500 mt-1">IEEE Codeathon winner</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-2xl font-semibold text-blue-300">Top 4</p>
            <p className="text-xs text-white-500 mt-1">AnalyticaX · IIT Indore</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-2xl font-semibold text-blue-300">Team-led</p>
            <p className="text-xs text-white-500 mt-1">From concept to working demo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
