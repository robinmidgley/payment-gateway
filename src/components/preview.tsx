export default function Preview() {
  return (
    <>
      <div className="block md:hidden">
        <img
          src="/dashboard.png"
          alt="Dashboard preview"
          className="border rounded-md mb-12"
        />
      </div>
      <div className="hidden md:block">
        <video
          width="1500"
          height="1500"
          className="border rounded-md mb-12"
          autoPlay
          muted
        >
          <source src="/dashboard.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
