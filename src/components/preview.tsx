export default function Preview() {
  return (
    <video
      width="1500"
      className="border rounded-md mb-32"
      height="1500"
      autoPlay
      muted
    >
      <source src="/dashboard.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
